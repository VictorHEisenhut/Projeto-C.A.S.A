using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using ProjetoRefugiados.Models;
using ProjetoRefugiadosApi.Data;
using ProjetoRefugiadosApi.Dtos.PostosDeSaude;
using ZstdSharp.Unsafe;

namespace ProjetoRefugiadosApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostoDeSaudeController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

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

        // PUT: api/PostoDeSaude/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
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

        // POST: api/PostoDeSaude
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PostoDeSaude>> PostPostoDeSaude(CreatePostoDeSaudeDto postoDeSaudeDto)
        {
            var postoDeSaude = _mapper.Map<PostoDeSaude>(postoDeSaudeDto);
            postoDeSaude.Endereco = await _context.Enderecos.FirstOrDefaultAsync(p => p.Id == postoDeSaudeDto.EnderecoId);

            _context.PostosDeSaude.Add(postoDeSaude);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPostoDeSaude", new { id = postoDeSaude.Id }, postoDeSaude);
        }

        // DELETE: api/PostoDeSaude/5
        [HttpDelete("{id}")]
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
