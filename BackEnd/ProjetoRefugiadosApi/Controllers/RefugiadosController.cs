using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using AutoMapper;
using MailKit.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using MimeKit.Text;
using MimeKit;
using ProjetoRefugiados.Models;
using ProjetoRefugiadosApi.Config;
using ProjetoRefugiadosApi.Data;
using ProjetoRefugiadosApi.Dtos.Refugiado;
using ProjetoRefugiadosApi.Validations;
using static Org.BouncyCastle.Math.EC.ECCurve;
using MailKit.Net.Smtp;
using NuGet.Common;
using System.Web;
using Microsoft.AspNetCore.Authorization;

namespace ProjetoRefugiadosApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RefugiadosController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;
        private readonly IConfiguration _config;
        private readonly RefugiadoValidation _validator = new();


        public RefugiadosController(AppDbContext context, IMapper mapper, IConfiguration config)
        {
            _context = context;
            _mapper = mapper;
            _config = config;
        }

        [HttpGet]
        [Authorize(Roles = "admin")]
        public async Task<ActionResult<IEnumerable<Refugiado>>> GetRefugiados()
        {
            var refugiados = await _context.Refugiados.ToListAsync();
            foreach (var refugiado in refugiados)
            {
                refugiado.Pais = await _context.Paises.FirstOrDefaultAsync(p => p.Id == refugiado.PaisId);
                refugiado.Documento = await _context.Documentos.FirstOrDefaultAsync(d => d.Id == refugiado.DocumentoId);
                refugiado.Endereco = await _context.Enderecos.FirstOrDefaultAsync(e => e.Id == refugiado.EnderecoId);

            }

            return Ok(new
            {
                total = refugiados.Count,
                data = refugiados
            });

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Refugiado>> GetRefugiado(int id)
        {
            var refugiado = await _context.Refugiados.FirstOrDefaultAsync(r => r.Id == id);

            if (refugiado == null)
            {
                return NotFound();
            }

            refugiado.Pais = await _context.Paises.FirstOrDefaultAsync(p => p.Id == refugiado.PaisId);
            refugiado.Documento = await _context.Documentos.FirstOrDefaultAsync(d => d.Id == refugiado.DocumentoId);
            refugiado.Endereco = await _context.Enderecos.FirstOrDefaultAsync(e => e.Id == refugiado.EnderecoId);


            return refugiado;
        }

        
        [HttpGet("Email/{email}")]
        public async Task<ActionResult<Refugiado>> GetRefugiadoByEmail(string email)
        {
            var refugiado = await _context.Refugiados.FirstOrDefaultAsync(r => r.Email == email);
            refugiado.Pais = await _context.Paises.FirstOrDefaultAsync(p => p.Id == refugiado.PaisId);
            refugiado.Documento = await _context.Documentos.FirstOrDefaultAsync(d => d.Id == refugiado.DocumentoId);
            refugiado.Endereco = await _context.Enderecos.FirstOrDefaultAsync(e => e.Id == refugiado.EnderecoId);

            if (refugiado == null)
            {
                return NotFound();
            }

            return refugiado;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutRefugiado(int id, UpdateRefugiadoDto refugiadoDto)
        {
            Refugiado refugiado = await _context.Refugiados.FirstOrDefaultAsync(r => r.Id == id);

            refugiado = _mapper.Map(refugiadoDto, refugiado);

            if (id != refugiado.Id)
            {
                return BadRequest();
            }

            _context.Entry(refugiado).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RefugiadoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Refugiado>> PostRefugiado(CreateRefugiadoDto refugiadoDto)
        {
            if (_context.Refugiados.Any(r => r.Email == refugiadoDto.Email))
            {
                return BadRequest("Email já cadastrado!");
            }

            var resposta = _validator.Validate(refugiadoDto);
            if (!resposta.IsValid)
            {
                return BadRequest(resposta.Errors);
            }

            CreateSenhaHash(refugiadoDto.Senha, out byte[] senhaHash, out byte[] senhaSalt);

            var refugiado = _mapper.Map<Refugiado>(refugiadoDto);
            refugiado.Pais = await _context.Paises.FirstOrDefaultAsync(p => p.Id == refugiadoDto.PaisId);
            refugiado.SenhaHash = senhaHash;
            refugiado.SenhaSalt = senhaSalt;
            refugiado.TokenVerificacao = CreateRandomToken();


            _context.Refugiados.Add(refugiado);
            await _context.SaveChangesAsync();

            string tokenEncoded = HttpUtility.UrlEncode(refugiado.TokenVerificacao);
            string tokenUrl = Url.ActionLink("Verificar", "Refugiados", new { token = tokenEncoded }, Request.Scheme);

            EnviarEmail(
                $"<a href='{tokenUrl}'> <h3>Verifique sua conta clicando neste link.</h3> </a> ", 
                refugiado.Email,
                "Link para confirmação de conta"
                );

            return Ok($"Usuário registrado com sucesso. Um e-mail de verificação foi enviado para {refugiado.Email}.");
            //return CreatedAtAction("GetRefugiado", new { id = refugiado.Id }, refugiado);
        }

        

        [HttpPost("Login")]
        public async Task<ActionResult<dynamic>> Login(LoginRefugiadoDto refugiadoDto)
        {
            string token = "";
            var user = await _context.Refugiados.FirstOrDefaultAsync(r => r.Email == refugiadoDto.Email);

            if (refugiadoDto.Email == null || refugiadoDto.Senha == null)
            {
                return BadRequest("Campos inválidos.");
            }
            if (user == null)
            {
                return BadRequest("Usuário inválido.");
            }
            if (!VerifySenhaHash(refugiadoDto.Senha, user.SenhaHash, user.SenhaSalt))
            {
                return BadRequest("Senha inválida.");
            }
            if (user.DataVerificacao == null)
            {
                return BadRequest("Usuário não verificado.");
            }

            token = AdicionarToken.GenerateToken(user);
            return new { token = token };
        }

        [HttpGet("Verificar")]
        public async Task<ActionResult<string>> Verificar([FromQuery]string token)
        {
            token = HttpUtility.UrlDecode(token);

            var user = await _context.Refugiados.FirstOrDefaultAsync(r => r.TokenVerificacao == token);

            if (user == null)
            {
                return BadRequest("Token inválido.");
            }
            if (user.DataVerificacao != null)
            {
                return BadRequest("Usuário já verificado.");
            }
            user.DataVerificacao = DateTime.Now;
            await _context.SaveChangesAsync();

            return Ok("Usuário verificado.");
        }

        [HttpGet("esqueci-senha")]
        public async Task<ActionResult<dynamic>> EsqueciSenha(string email)
        {
            var user = await _context.Refugiados.FirstOrDefaultAsync(r => r.Email == email);
            //var userLogado = (from u in users where u.Email == refugiadoDto.Email & u.Senha == refugiadoDto.Senha select u).ToList();

            if (user == null)
            {
                return BadRequest("Usuário não encontrado.");
            }

            user.TokenResetSenha = CreateRandomToken();
            user.ResetTokenExpira = DateTime.Now.AddDays(1);
            await _context.SaveChangesAsync();


            EnviarEmail(
                $"<a href='http://127.0.0.1:5500/html/resetSenha.html?token={user.TokenResetSenha}'> <h3>Altere sua senha clicando neste link.</h3> </a> ", 
                user.Email,
                "Link para alterar senha"
                );

            return Ok("Foi enviado um email com um link para resetar sua senha.");
        }

        [HttpPost("reset-senha")]
        public async Task<ActionResult<dynamic>> ResetSenha(ResetSenhaDto reset)
        {
            ResetSenhaValidation senhaValidator = new();
            var user = await _context.Refugiados.FirstOrDefaultAsync(r => r.TokenResetSenha == reset.Token);
            //var userLogado = (from u in users where u.Email == refugiadoDto.Email & u.Senha == refugiadoDto.Senha select u).ToList();

            if (user == null || user.ResetTokenExpira < DateTime.Now)
            {
                return BadRequest("Token inválido.");
            }
            var resposta = senhaValidator.Validate(reset);
            if (!resposta.IsValid)
            {
                return BadRequest(resposta.Errors.FirstOrDefault());
            }

            CreateSenhaHash(reset.Senha, out byte[] senhaHash, out byte[] senhaSalt);

            user.SenhaHash = senhaHash;
            user.SenhaSalt = senhaSalt;
            user.ResetTokenExpira = null;
            user.TokenResetSenha = null;

            await _context.SaveChangesAsync();

            return Ok("Senha alterada com sucesso.");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRefugiado(int id)
        {
            var refugiado = await _context.Refugiados.FindAsync(id);
            refugiado.Pais = await _context.Paises.FirstOrDefaultAsync(p => p.Id == refugiado.PaisId);
            refugiado.Documento = await _context.Documentos.FirstOrDefaultAsync(d => d.Id == refugiado.DocumentoId);
            refugiado.Endereco = await _context.Enderecos.FirstOrDefaultAsync(e => e.Id == refugiado.EnderecoId);

            if (refugiado == null)
            {
                return NotFound();
            }

            _context.Refugiados.Remove(refugiado);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RefugiadoExists(int id)
        {
            return _context.Refugiados.Any(e => e.Id == id);
        }

        private void CreateSenhaHash(string senha, out byte[] senhaHash, out byte[] senhaSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                {
                    senhaSalt = hmac.Key;
                    senhaHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(senha));
                }
            }
        }

        private bool VerifySenhaHash(string senha, byte[] senhaHash, byte[] senhaSalt)
        {
            using (var hmac = new HMACSHA512(senhaSalt))
            {
                {
                    var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(senha));
                    return computedHash.SequenceEqual(senhaHash);
                }
            }
        }

        private string CreateRandomToken()
        {
            return Convert.ToHexString(RandomNumberGenerator.GetBytes(64));
        }

        [NonAction]
        public void EnviarEmail(string body, string toEmail, string subject)
        {
            
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse(_config.GetSection("EmailUsername").Value));
            email.To.Add(MailboxAddress.Parse(toEmail));
            email.Subject = subject;
            email.Body = new TextPart(TextFormat.Html) { Text = body };
            using var smtp = new SmtpClient();
            {
                smtp.Connect(_config.GetSection("EmailHost").Value, Convert.ToInt32(_config.GetSection("EmailPort").Value), SecureSocketOptions.StartTls);
                smtp.Authenticate(_config.GetSection("EmailUsername").Value, _config.GetSection("EmailPassword").Value);
                smtp.Send(email);

                smtp.Disconnect(true);
            }

        }
    }
}
