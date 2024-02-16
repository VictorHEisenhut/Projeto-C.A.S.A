using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using ProjetoRefugiados.Models;
using ProjetoRefugiadosApi.Data;
using ProjetoRefugiadosApi.Dtos.PostosDeSaude;
using ProjetoRefugiadosApi.Validations;
using ZstdSharp.Unsafe;

namespace ProjetoRefugiadosApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostoDeSaudeController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;
        private readonly PostoDeSaudeValidation _validator = new();


        public PostoDeSaudeController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/PostoDeSaude
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PostoDeSaude>>> GetPostosDeSaude()
        {
            var postos = await _context.PostosDeSaude.ToListAsync();
            foreach (var posto in postos)
            {
                posto.Endereco = await _context.Enderecos.FirstOrDefaultAsync(c => c.Id == posto.EnderecoId);
            }

            return await _context.PostosDeSaude.ToListAsync();
        }

        [HttpGet("Pages")]
        public async Task<ActionResult<IEnumerable<PostoDeSaude>>> GetPagesPostos([FromQuery] int pageNumber, [FromQuery] int pageSize)
        {
            List<PostoDeSaude> lista = await _context.PostosDeSaude.AsNoTracking().Skip(pageNumber * pageSize).Take(pageSize).ToListAsync();
            foreach (PostoDeSaude posto in lista)
            {
                posto.Endereco = await _context.Enderecos.FirstOrDefaultAsync(c => c.Id == posto.EnderecoId);
            }
            return lista;
        }

        // GET: api/PostoDeSaude/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PostoDeSaude>> GetPostoDeSaude(int id)
        {
            var postoDeSaude = await _context.PostosDeSaude.FindAsync(id);
            postoDeSaude.Endereco = await _context.Enderecos.FirstOrDefaultAsync(c => c.Id == postoDeSaude.EnderecoId);

            if (postoDeSaude == null)
            {
                return NotFound();
            }

            return postoDeSaude;
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> PutPostoDeSaude(int id, PostoDeSaude postoDeSaude)
        {
            postoDeSaude.Endereco = await _context.Enderecos.FirstOrDefaultAsync(c => c.Id == postoDeSaude.EnderecoId);

            if (id != postoDeSaude.Id)
            {
                return BadRequest();
            }

            _context.Entry(postoDeSaude).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostoDeSaudeExists(id))
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
        [Authorize(Roles = "admin")]
        public async Task<ActionResult<PostoDeSaude>> PostPostoDeSaude(CreatePostoDeSaudeDto postoDeSaudeDto)
        {
            var resposta = _validator.Validate(postoDeSaudeDto);
            if (!resposta.IsValid)
            {
                return BadRequest(resposta.Errors);
            }

            var postoDeSaude = _mapper.Map<PostoDeSaude>(postoDeSaudeDto);
            postoDeSaude.Endereco = await _context.Enderecos.FirstOrDefaultAsync(p => p.Id == postoDeSaudeDto.EnderecoId);


            _context.PostosDeSaude.Add(postoDeSaude);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPostoDeSaude", new { id = postoDeSaude.Id }, postoDeSaude);
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> DeletePostoDeSaude(int id)
        {
            var postoDeSaude = await _context.PostosDeSaude.FindAsync(id);
            postoDeSaude.Endereco = await _context.Enderecos.FirstOrDefaultAsync(c => c.Id == postoDeSaude.EnderecoId);
            if (postoDeSaude == null)
            {
                return NotFound();
            }

            _context.PostosDeSaude.Remove(postoDeSaude);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PostoDeSaudeExists(int id)
        {
            return _context.PostosDeSaude.Any(e => e.Id == id);
        }
    }
}
