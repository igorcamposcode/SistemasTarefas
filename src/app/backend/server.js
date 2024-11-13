//Para integrar o Angular com um banco de dados MySQL usando o MySQL Workbench para gerenciar o banco de dados, você ainda precisa
//de um backend para servir de ponte entre o frontend Angular e o MySQL. Abaixo está um passo a passo com Node.js e Express, uma das maneiras mais comuns de fazer essa implementação.
//Passos para Implementar Angular com MySQL usando MySQL Workbench
//Configurar o Banco de Dados MySQL: Primeiro, crie o banco de dados e as tabelas no MySQL usando o MySQL Workbench.
//Criar o Backend com Node.js e Express: Configurar um servidor que se conecte ao MySQL para realizar operações CRUD.
//Configurar o Frontend Angular: Usar o serviço HttpClient para realizar chamadas HTTP ao backend e exibir os dados.

import express from "express";
import { createConnection } from "mysql2";
import { json } from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());

// Conectando ao banco de dados MySQL
const db = createConnection({
  host: "localhost", // Host do MySQL
  user: "root", // Usuário do MySQL
  password: "senha", // Senha do MySQL
  database: "", // Nome do banco de dados
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
    return;
  }
  console.log("Conectado ao MySQL");
});

// Rota para obter todos os itens
app.get("/items", (req, res) => {
  db.query("SELECT * FROM items", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Rota para adicionar um item
app.post("/items", (req, res) => {
  const { name, description } = req.body;
  db.query(
    "INSERT INTO items (name, description) VALUES (?, ?)",
    [name, description],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId, name, description });
    }
  );
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
