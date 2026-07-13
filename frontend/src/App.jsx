import { useEffect, useState } from "react";
import "./App.css";

import Dashboard from "./components/Dashboard";
import FormularioGasto from "./components/FormularioGasto";
import CardGasto from "./components/CardGasto";
import Pessoas from "./components/Pessoas";

function App() {
  const [gastos, setGastos] = useState([]);
  const [pessoas, setPessoas] = useState([]);

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [tipo, setTipo] = useState("Despesa");
  const [pessoaId, setPessoaId] = useState("");

  useEffect(() => {
    buscarPessoas();
    buscarGastos();
  }, []);

  function buscarPessoas() {
    fetch("http://localhost:5086/api/Pessoa")
      .then((response) => response.json())
      .then((data) => setPessoas(data));
  }

  function buscarGastos() {
    fetch("http://localhost:5086/api/Gasto")
      .then((response) => response.json())
      .then((data) => setGastos(data));
  }

  function cadastrarPessoa() {
    fetch("http://localhost:5086/api/Pessoa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        idade: Number(idade),
      }),
    })
      .then((response) => response.json())
      .then(() => {
        buscarPessoas();
        setNome("");
        setIdade("");
      });
  }

  function excluirPessoa(id) {
    if (!window.confirm("Deseja excluir esta pessoa?")) {
      return;
    }

    fetch(`http://localhost:5086/api/Pessoa/${id}`, {
      method: "DELETE",
    }).then(() => {
      buscarPessoas();
      buscarGastos();
    });
  }

  function limparFormulario() {
    setDescricao("");
    setValor("");
    setCategoria("");
    setTipo("Despesa");
    setPessoaId("");
  }

  function cadastrarGasto() {
    fetch("http://localhost:5086/api/Gasto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        descricao,
        valor: Number(valor),
        categoria,
        tipo,
        pessoaId: Number(pessoaId),
        data: new Date().toISOString(),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((texto) => {
            alert(texto);
            throw new Error(texto);
          });
        }

        return response.json();
      })
      .then(() => {
        buscarGastos();
        limparFormulario();
      })
      .catch(() => {});
  }

  function excluirGasto(id) {
    if (!window.confirm("Deseja excluir este gasto?")) {
      return;
    }

    fetch(`http://localhost:5086/api/Gasto/${id}`, {
      method: "DELETE",
    }).then(() => buscarGastos());
  }

  const totalReceitas = gastos
    .filter((g) => g.tipo === "Receita")
    .reduce((total, g) => total + g.valor, 0);

  const totalDespesas = gastos
    .filter((g) => g.tipo === "Despesa")
    .reduce((total, g) => total + g.valor, 0);

  const saldo = totalReceitas - totalDespesas;

  return (
    <div className="container">
      <header className="header">
        <h1>💰 Controle de Gastos</h1>
        <p>Sistema desenvolvido em React + ASP.NET Core</p>
      </header>

      <Dashboard
        totalReceitas={totalReceitas}
        totalDespesas={totalDespesas}
        saldo={saldo}
      />

      <Pessoas
        pessoas={pessoas}
        nome={nome}
        setNome={setNome}
        idade={idade}
        setIdade={setIdade}
        cadastrarPessoa={cadastrarPessoa}
        excluirPessoa={excluirPessoa}
      />

      <FormularioGasto
        descricao={descricao}
        setDescricao={setDescricao}
        valor={valor}
        setValor={setValor}
        categoria={categoria}
        setCategoria={setCategoria}
        tipo={tipo}
        setTipo={setTipo}
        pessoaId={pessoaId}
        setPessoaId={setPessoaId}
        pessoas={pessoas}
        cadastrarGasto={cadastrarGasto}
      />

      <h2>📋 Gastos Cadastrados</h2>

      <div className="lista">
        {gastos.map((gasto) => (
          <CardGasto
            key={gasto.id}
            gasto={gasto}
            pessoas={pessoas}
            excluirGasto={excluirGasto}
          />
        ))}
      </div>
    </div>
  );
}

export default App;