const express = require('express');
const cors = require('cors');
require('dotenv').config();

const equipamentoRoutes = require('./routes/equipamentoRoutes');
const cidadeRoutes = require('./routes/cidadeRoutes');
const funcionarioRoutes = require('./routes/funcionarioRoutes');
const servicoRoutes = require('./routes/servicoRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/equipamentos', equipamentoRoutes);
app.use('/api/cidades', cidadeRoutes);
app.use('/api/funcionarios', funcionarioRoutes);
app.use('/api/servicos', servicoRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
