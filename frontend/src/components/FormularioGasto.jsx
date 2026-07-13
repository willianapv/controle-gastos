function FormularioGasto({
  descricao,
  setDescricao,
  valor,
  setValor,
  categoria,
  setCategoria,
  tipo,
  setTipo,
  pessoaId,
  setPessoaId,
  pessoas,
  cadastrarGasto,
}) {
  return (
    <div className="formulario">
      <h2>📝 Novo Gasto</h2>

      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />

      <input
        type="text"
        placeholder="Categoria"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      />

      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
      >
        <option value="Despesa">Despesa</option>
        <option value="Receita">Receita</option>
      </select>

      <select
        value={pessoaId}
        onChange={(e) => setPessoaId(e.target.value)}
      >
        <option value="">Selecione uma pessoa</option>

        {pessoas.map((pessoa) => (
          <option
            key={pessoa.id}
            value={pessoa.id}
          >
            {pessoa.nome}
          </option>
        ))}
      </select>

      <button onClick={cadastrarGasto}>
        Cadastrar
      </button>
    </div>
  );
}

export default FormularioGasto;