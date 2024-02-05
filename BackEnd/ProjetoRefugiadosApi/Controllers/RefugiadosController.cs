using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using ProjetoRefugiados.Models;
using ProjetoRefugiadosApi.Config;
using ProjetoRefugiadosApi.Data;
using ProjetoRefugiadosApi.Dtos.Refugiado;
using ProjetoRefugiadosApi.Validations;

namespace ProjetoRefugiadosApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RefugiadosController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;
        private readonly RefugiadoValidation _validator = new();


        public RefugiadosController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Refugiados
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Refugiado>>> GetRefugiados()
        {
            var refugiados = await _context.Refugiados.ToListAsync();
            foreach (var refugiado in refugiados)
            {
                refugiado.Pais = await _context.Paises.FirstOrDefaultAsync(p => p.Id == refugiado.PaisId);
                refugiado.Documento = await _context.Documentos.FirstOrDefaultAsync(d => d.Id == refugiado.DocumentoId);
                refugiado.Endereco = await _context.Enderecos.FirstOrDefaultAsync(e => e.Id == refugiado.EnderecoId);

            }

            return refugiados;

        }

        // GET: api/Refugiados/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Refugiado>> GetRefugiado(int id)
        {
            var refugiado = await _context.Refugiados.FindAsync(id);
            refugiado.Pais = await _context.Paises.FirstOrDefaultAsync(p => p.Id == refugiado.PaisId);
            refugiado.Documento = await _context.Documentos.FirstOrDefaultAsync(d => d.Id == refugiado.DocumentoId);
            refugiado.Endereco = await _context.Enderecos.FirstOrDefaultAsync(e => e.Id == refugiado.EnderecoId);

            if (refugiado == null)
            {
                return NotFound();
            }

            return refugiado;
        }

        // PUT: api/Refugiados/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRefugiado(int id, Refugiado refugiado)
        {
            refugiado.Pais = await _context.Paises.FirstOrDefaultAsync(p => p.Id == refugiado.PaisId);
            refugiado.Documento = await _context.Documentos.FirstOrDefaultAsync(d => d.Id == refugiado.DocumentoId);
            refugiado.Endereco = await _context.Enderecos.FirstOrDefaultAsync(e => e.Id == refugiado.EnderecoId);

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

        // POST: api/Refugiados
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Refugiado>> PostRefugiado(CreateRefugiadoDto refugiadoDto)
        {
            if (_context.Refugiados.Any(r => r.Email == refugiadoDto.Email))
            {
                return BadRequest("Email já cadastrado!");
            }

            var refugiado = _mapper.Map<Refugiado>(refugiadoDto);
            refugiado.Pais = await _context.Paises.FirstOrDefaultAsync(p => p.Id == refugiadoDto.PaisId);

            refugiado.TokenVerificacao = CreateRandomToken();

            var resposta = _validator.Validate(refugiado);
            if (!resposta.IsValid)
            {
                return BadRequest(resposta.Errors);
            }

            _context.Refugiados.Add(refugiado);
            await _context.SaveChangesAsync();

            string body = $"<i>{refugiado.TokenVerificacao}</i>";
            RedirectToAction("EnviarEmail", "EmailController", new {body = body, toEmail = refugiado.Email});
            return CreatedAtAction("GetRefugiado", new { id = refugiado.Id }, refugiado);
        }

        [HttpPost("Login")]
        public async Task<ActionResult<dynamic>> Login(LoginRefugiadoDto refugiadoDto)
        {
            string token = "";
            var user = await _context.Refugiados.FirstOrDefaultAsync(r => r.Email == refugiadoDto.Email);
            //var userLogado = (from u in users where u.Email == refugiadoDto.Email & u.Senha == refugiadoDto.Senha select u).ToList();

            if (user == null)
            {
                return BadRequest("Usuário inválido.");
            }
            if (user.Senha != refugiadoDto.Senha)
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

        [HttpPost("Verificar")]
        public async Task<ActionResult<dynamic>> Verificar(string token)
        {
            var user = await _context.Refugiados.FirstOrDefaultAsync(r => r.TokenVerificacao == token);
            //var userLogado = (from u in users where u.Email == refugiadoDto.Email & u.Senha == refugiadoDto.Senha select u).ToList();

            if (user == null)
            {
                return BadRequest("Token inválido.");
            }
            user.DataVerificacao = DateTime.Now;
            await _context.SaveChangesAsync();

            return Ok("Usuário verificado.");
        }

        [HttpPost("esqueci-senha")]
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

            return Ok("Você pode agora resetar sua senha.");
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

            user.Senha = reset.Senha;
            user.ResetTokenExpira = null;
            user.TokenResetSenha = null;

            await _context.SaveChangesAsync();

            return Ok("Senha alterada com sucesso.");
        }

        // DELETE: api/Refugiados/5
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

        private string CreateRandomToken()
        {
            return Convert.ToHexString(RandomNumberGenerator.GetBytes(64));
        }
    }
}
