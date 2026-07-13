using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PessoaController : ControllerBase
{
    private readonly AppDbContext _context;

    public PessoaController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Pessoa>>> GetPessoas()
    {
        return await _context.Pessoas.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<Pessoa>> CriarPessoa(Pessoa pessoa)
    {
        _context.Pessoas.Add(pessoa);

        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetPessoas),
            new { id = pessoa.Id },
            pessoa
        );
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> ExcluirPessoa(int id)
    {
        var pessoa = await _context.Pessoas.FindAsync(id);

        if (pessoa == null)
        {
            return NotFound();
        }

        _context.Pessoas.Remove(pessoa);

        await _context.SaveChangesAsync();

        return NoContent();
    }
}