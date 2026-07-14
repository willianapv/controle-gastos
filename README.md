# 💰 Controle de Gastos

Sistema Full Stack desenvolvido como projeto prático durante minha formação em Análise e Desenvolvimento de Sistemas.

O projeto permite o gerenciamento de receitas e despesas, com dashboard financeiro, cadastro de pessoas e integração completa entre Front-end e Back-end.

---

## 📷 Preview

> Em breve será adicionada uma imagem do sistema em funcionamento.

---

# 🚀 Tecnologias utilizadas

### Front-end

- React
- Vite
- JavaScript
- CSS3

### Back-end

- ASP.NET Core 8
- Entity Framework Core
- SQLite

### Ferramentas

- Git
- GitHub
- Visual Studio Code
- Swagger

---

# ✨ Funcionalidades

- ✅ Cadastro de Pessoas
- ✅ Listagem de Pessoas
- ✅ Atualização de Pessoas
- ✅ Exclusão de Pessoas

- ✅ Cadastro de Gastos
- ✅ Listagem de Gastos
- ✅ Exclusão de Gastos

- ✅ Dashboard Financeiro
- ✅ Controle de Receitas
- ✅ Controle de Despesas
- ✅ Cálculo automático do saldo

- ✅ Relacionamento entre Pessoa e Gasto
- ✅ Regra de negócio para menores de idade

---

# 📂 Estrutura do Projeto

```
Controle-Gastos

├── backend
│   ├── Controllers
│   ├── Models
│   ├── Data
│   ├── Migrations
│   └── Program.cs
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── App.jsx
│   │   └── App.css
│   │
│   └── package.json
│
└── README.md
```

---

# ⚙️ Como executar

## Back-end

```bash
cd backend

dotnet restore

dotnet ef database update

dotnet run
```

---

## Front-end

```bash
cd frontend

npm install

npm run dev
```

---

# 📌 API

### Pessoas

```
GET     /api/Pessoa

POST    /api/Pessoa

PUT     /api/Pessoa/{id}

DELETE  /api/Pessoa/{id}
```

### Gastos

```
GET     /api/Gasto

POST    /api/Gasto

PUT     /api/Gasto/{id}

DELETE  /api/Gasto/{id}
```

---

# 🎯 Objetivo

Este projeto foi desenvolvido para consolidar conhecimentos em desenvolvimento Full Stack utilizando React e ASP.NET Core, aplicando conceitos de APIs REST, banco de dados relacional, Entity Framework Core, componentização em React e integração entre Front-end e Back-end.

---

# 👨‍💻 Autor

**Willian Almeida**

Estudante de Análise e Desenvolvimento de Sistemas.

LinkedIn:
(Adicionar após publicação)

GitHub:
https://github.com/willianapv
