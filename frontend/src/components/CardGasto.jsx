function CardGasto({ gasto, pessoas, excluirGasto }) {
  const pessoa = pessoas.find((p) => p.id === gasto.pessoaId);

  return (
    <div className="card">
      <h3>💳 {gasto.descricao}</h3>

      <p>
        <strong>💰 Valor</strong>
        <br />
        R$ {Number(gasto.valor).toFixed(2)}
      </p>

      <p>
        <strong>📂 Categoria</strong>
        <br />
        {gasto.categoria}
      </p>

      <p>
        <strong>👤 Pessoa</strong>
        <br />
        {pessoa ? pessoa.nome : "Não encontrada"}
      </p>

      <p>
        <strong>Status</strong>
        <br />
        {gasto.tipo === "Receita" ? "🟢 Receita" : "🔴 Despesa"}
      </p>

      <button
        className="excluir"
        onClick={() => excluirGasto(gasto.id)}
      >
        🗑️ Excluir
      </button>
    </div>
  );
}

export default CardGasto;