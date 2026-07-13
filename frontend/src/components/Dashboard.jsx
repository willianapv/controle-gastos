function Dashboard({ totalReceitas, totalDespesas, saldo }) {
  return (
    <div className="dashboard">

      <div className="info receita">
        <h3>💰 Receitas</h3>
        <p>R$ {totalReceitas.toFixed(2)}</p>
      </div>

      <div className="info despesa">
        <h3>📉 Despesas</h3>
        <p>R$ {totalDespesas.toFixed(2)}</p>
      </div>

      <div className={`info ${saldo >= 0 ? "receita" : "despesa"}`}>
        <h3>💵 Saldo</h3>
        <p>R$ {saldo.toFixed(2)}</p>
      </div>

    </div>
  );
}

export default Dashboard;