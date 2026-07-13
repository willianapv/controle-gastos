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
        _context.Gastos.Add(gasto);

        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetGastos),
            new { id = gasto.Id },
            gasto
        );
    }
}