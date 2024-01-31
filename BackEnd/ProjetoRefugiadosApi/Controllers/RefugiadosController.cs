using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoRefugiados.Models;
using ProjetoRefugiadosApi.Data;
using ProjetoRefugiadosApi.Dtos.Refugiado;

namespace ProjetoRefugiadosApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RefugiadosController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public RefugiadosController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET: api/Refugiados
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Refugiado>>> GetRefugiados()
        {
            return await _context.Refugiados.ToListAsync();
        }

        // GET: api/Refugiados/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Refugiado>> GetRefugiado(int id)
        {
            var refugiado = await _context.Refugiados.FindAsync(id);

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
            var refugiado = _mapper.Map<Refugiado>(refugiadoDto);
            refugiado.Pais = await _context.Paises.FirstOrDefaultAsync(p => p.Id == refugiadoDto.PaisId);
            

            _context.Refugiados.Add(refugiado);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRefugiado", new { id = refugiado.Id }, refugiado);
        }

        // DELETE: api/Refugiados/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRefugiado(int id)
        {
            var refugiado = await _context.Refugiados.FindAsync(id);
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
    }
}
