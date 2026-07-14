function ResumoPessoas({ pessoas, gastos }) {
  const totalReceitasGeral = gastos
    .filter((g) => g.tipo === "Receita")
    .reduce((total, g) => total + g.valor, 0);

  const totalDespesasGeral = gastos
    .filter((g) => g.tipo === "Despesa")
    .reduce((total, g) => total + g.valor, 0);

  const saldoGeral = totalReceitasGeral - totalDespesasGeral;

  return (
    <>
      <h2>📊 Resumo por Pessoa</h2>

      <div className="lista">
        {pessoas.map((pessoa) => {
          const gastosPessoa = gastos.filter(
            (g) => g.pessoaId === pessoa.id
          );

          const receitas = gastosPessoa
            .filter((g) => g.tipo === "Receita")
            .reduce((t, g) => t + g.valor, 0);

          const despesas = gastosPessoa
            .filter((g) => g.tipo === "Despesa")
            .reduce((t, g) => t + g.valor, 0);

          const saldo = receitas - despesas;

          return (
            <div
              className="card"
              key={pessoa.id}
            >
              <h3>👤 {pessoa.nome}</h3>

              <p>
                <strong>Idade</strong>
                <br />
                {pessoa.idade} anos
              </p>

              <p>
                <strong>💰 Receitas</strong>
                <br />
                R$ {receitas.toFixed(2)}
              </p>

              <p>
                <strong>📉 Despesas</strong>
                <br />
                R$ {despesas.toFixed(2)}
              </p>

              <p>
                <strong>💵 Saldo</strong>
                <br />
                R$ {saldo.toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>

      <h2 style={{ marginTop: "40px" }}>
        📈 Total Geral
      </h2>

      <div className="dashboard">
        <div className="info receita">
          <h3>Receitas</h3>
          <p>R$ {totalReceitasGeral.toFixed(2)}</p>
        </div>

        <div className="info despesa">
          <h3>Despesas</h3>
          <p>R$ {totalDespesasGeral.toFixed(2)}</p>
        </div>

        <div className="info saldo">
          <h3>Saldo</h3>
          <p>R$ {saldoGeral.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}

export default ResumoPessoas;