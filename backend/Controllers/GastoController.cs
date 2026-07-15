using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GastoController : ControllerBase
{
    private readonly AppDbContext _context;

    public GastoController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Gasto>>> GetGastos()
    {
        return await _context.Gastos.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<Gasto>> CriarGasto(Gasto gasto)
    {
        // Verifica se a pessoa informada existe no cadastro
        var pessoa = await _context.Pessoas.FindAsync(gasto.PessoaId);

        if (pessoa == null)
        {
            return NotFound("Pessoa não encontrada.");
        }

        // Regra de negócio:
        // Pessoas menores de 18 anos podem cadastrar apenas despesas.
        if (pessoa.Idade < 18 && gasto.Tipo == "Receita")
        {
            return BadRequest("Menores de idade só podem cadastrar despesas.");
        }

        _context.Gastos.Add(gasto);

        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetGastos),
            new { id = gasto.Id },
            gasto
        );
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> AtualizarGasto(int id, Gasto gastoAtualizado)
    {
        if (id != gastoAtualizado.Id)
        {
            return BadRequest();
        }

        var gasto = await _context.Gastos.FindAsync(id);

        if (gasto == null)
        {
            return NotFound();
        }

        gasto.Descricao = gastoAtualizado.Descricao;
        gasto.Valor = gastoAtualizado.Valor;
        gasto.Categoria = gastoAtualizado.Categoria;
        gasto.Data = gastoAtualizado.Data;
        gasto.Tipo = gastoAtualizado.Tipo;

        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> ExcluirGasto(int id)
    {
        var gasto = await _context.Gastos.FindAsync(id);

        if (gasto == null)
        {
            return NotFound();
        }

        _context.Gastos.Remove(gasto);

        await _context.SaveChangesAsync();

        return NoContent();
    }
}