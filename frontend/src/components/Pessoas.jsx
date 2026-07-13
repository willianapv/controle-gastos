function Pessoas({
  pessoas,
  nome,
  setNome,
  idade,
  setIdade,
  cadastrarPessoa,
  excluirPessoa,
}) {
  return (
    <>
      <div className="formulario">
        <h2>👤 Cadastro de Pessoas</h2>

        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="number"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />

        <button onClick={cadastrarPessoa}>
          Cadastrar Pessoa
        </button>
      </div>

      <h2>👥 Pessoas Cadastradas</h2>

      <div className="lista">

        {pessoas.map((pessoa) => (

          <div
            key={pessoa.id}
            className="card"
          >

            <h3>{pessoa.nome}</h3>

            <p>
              <strong>Idade</strong>
              <br />
              {pessoa.idade} anos
            </p>

            <button
              className="excluir"
              onClick={() => excluirPessoa(pessoa.id)}
            >
              🗑 Excluir
            </button>

          </div>

        ))}

      </div>
    </>
  );
}

export default Pessoas;