require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o MongoDB
const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/produtos_db';
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Porta do servidor
const PORT = process.env.PORT || 3000;

// Rotas
const productRoutes = require('./src/routes/productRoutes');
app.use('/api/products', productRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});