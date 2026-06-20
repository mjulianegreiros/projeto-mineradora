# Sistema Integrado da Mineradora

Projeto final da disciplina de Desenvolvimento Web, sistema de gestão pra mineradora com front-end em React e back-end em Node + Express, usando Supabase como banco de dados.

## O que tem aqui

- Cadastro de equipamentos
- Cadastro de cidades
- Cadastro de funcionários
- Cadastro de serviços

Cada um desses tem uma página no front pra listar e cadastrar, e uma rota no back que conversa com o Supabase.

## Como rodar

Primeiro cria o banco no Supabase e roda o `banco_de_dados.sql` que tá na raiz do projeto (é só copiar e colar no SQL Editor de lá).

Depois pega a URL e a key do projeto (em Project Settings > API) e coloca no `.env` dentro da pasta `backend`.

Pra rodar o back:
```
cd backend
npm install
npm run dev
```

Pra rodar o front (em outro terminal):
```
cd frontend
npm install
npm run dev
```

Se o front não estiver achando a API, confere a URL no `services/api.js`, tem que bater com a porta que o back tá usando.

## Estrutura

```
backend/
  src/
    config -> conexão com supabase
    controllers -> a lógica de cada cadastro
    routes -> as rotas da api
    server.js

frontend/
  src/
    components/Menu.jsx
    pages/ -> Inicio, Equipamentos, Cidades, Funcionarios, Servicos
    services/api.js
    App.jsx
```
