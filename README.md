# Sistema Integrado da Mineradora

Projeto final estruturado com base no documento "L10 - Criação do Projeto",
contendo Front-end (React) e Back-end (Node.js + Express + Supabase).

## Estrutura

```
projeto-mineradora/
├── banco_de_dados.sql      <- Script SQL com as 4 tabelas (cidades, equipamentos, funcionarios, servicos)
├── backend/
│   ├── .env                <- Preencha com sua URL e chave do Supabase
│   ├── package.json
│   └── src/
│       ├── config/supabaseClient.js
│       ├── controllers/    <- um controller por entidade
│       ├── routes/         <- uma rota por entidade
│       └── server.js
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── components/Menu.jsx
        ├── pages/           <- Inicio, Equipamentos, Cidades, Funcionarios, Servicos
        ├── services/api.js
        ├── App.jsx
        └── main.jsx
```

## Passo a passo

### 1. Banco de dados (Supabase)
1. Crie um projeto no [supabase.com](https://supabase.com).
2. Vá em **SQL Editor** e rode o conteúdo de `banco_de_dados.sql`.
3. Vá em **Project Settings > API** e copie a **URL** e a **anon/public key**.

### 2. Backend
```bash
cd backend
npm install
```
Edite o arquivo `.env` com sua URL e chave do Supabase:
```
SUPABASE_URL=https://SEU-PROJETO.supabase.co
SUPABASE_KEY=SUA_ANON_PUBLIC_KEY
PORT=3001
```
Inicie o servidor:
```bash
npm run dev
```

### 3. Frontend
```bash
cd frontend
npm install
npm run dev
```
O frontend já está configurado para consumir a API em `http://localhost:3001/api`
(edite essa URL em `src/services/api.js` se necessário).

### 4. Deploy
- **GitHub**: suba o projeto em um repositório.
- **Netlify**: conecte o repositório e configure a pasta `frontend` como diretório
  de build (comando `npm run build`, pasta de publicação `dist`).

## Observações

- As páginas **Cidades**, **Funcionários** e **Serviços** foram construídas seguindo
  exatamente o mesmo padrão da página **Equipamentos**, como solicitado no documento.
- As tabelas `funcionarios` e `servicos` foram complementadas no script SQL com
  colunas básicas (`nome`/`cargo` e `descricao`/`status`, respectivamente). Sinta-se
  livre para adicionar mais colunas conforme a necessidade do projeto.
