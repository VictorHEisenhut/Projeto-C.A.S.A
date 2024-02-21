using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoRefugiados.Models;
using ProjetoRefugiadosApi.Data;
using ProjetoRefugiadosApi.Dtos.Consulado;
using ProjetoRefugiadosApi.Validations;

namespace ProjetoRefugiadosApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConsuladosController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;
        private readonly ConsuladoValidation _validator = new();

        public ConsuladosController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Consulado>>> GetConsulados()
        {
            var consulados = await _context.Consulados.ToListAsync();
            foreach (var consulado in consulados)
            {
                consulado.Endereco = await _context.Enderecos.FirstOrDefaultAsync(c => c.Id == consulado.EnderecoId);
            }

            return Ok(new
            {
                total = consulados.Count,
                data = consulados
            });
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Consulado>> GetConsulado(int id)
        {
            var consulado = await _context.Consulados.FindAsync(id);
            consulado.Endereco = await _context.Enderecos.FirstOrDefaultAsync(c => c.Id == consulado.EnderecoId);

            if (consulado == null)
            {
                return NotFound();
            }

            return consulado;
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> PutConsulado(int id, Consulado consulado)
        {
            consulado.Endereco = await _context.Enderecos.FirstOrDefaultAsync(c => c.Id == consulado.EnderecoId);

            if (id != consulado.Id)
            {
                return BadRequest();
            }

            _context.Entry(consulado).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ConsuladoExists(id))
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
        public async Task<ActionResult<Consulado>> PostConsulado(CreateConsuladoDto consuladoDto)
        {
            var resposta = _validator.Validate(consuladoDto);
            if (!resposta.IsValid)
            {
                return BadRequest(resposta.Errors);
            }

            var consulado = _mapper.Map<Consulado>(consuladoDto);
            consulado.Endereco = await _context.Enderecos.FirstOrDefaultAsync(c => c.Id == consuladoDto.EnderecoId);

            _context.Consulados.Add(consulado);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetConsulado", new { id = consulado.Id }, consulado);
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> DeleteConsulado(int id)
        {
            var consulado = await _context.Consulados.FindAsync(id);
            consulado.Endereco = await _context.Enderecos.FirstOrDefaultAsync(c => c.Id == consulado.EnderecoId);

            if (consulado == null)
            {
                return NotFound();
            }

            _context.Consulados.Remove(consulado);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ConsuladoExists(int id)
        {
            return _context.Consulados.Any(e => e.Id == id);
        }
    }
}
