const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database'); // Importa o Sequelize configurado
const authRoutes = require('./routes/authRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const tarefaRoutes = require('./routes/tarefaRoutes');
const subtarefaRoutes = require('./routes/subtarefaRoutes');

const app = express();
const PORT = 3000;

app.use(cors({
  origin: "http://localhost:4200",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());

app.use('/api', authRoutes);
app.use('/api/usuario', usuarioRoutes);
app.use('/api/tarefa', tarefaRoutes);
app.use('/api/tarefa', subtarefaRoutes);

sequelize.sync({ alter: true })
  .then(() => {
    console.log("Banco de dados sincronizado.");
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => console.error("Erro ao sincronizar banco:", err));
