// server.js
/* Liberando a porta 3306: https://repassandoconhecimento.com/como-liberar-o-acesso-remoto-ao-mysql/
passo a passo para fazer o procedimento */

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conectando ao banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',     // Host do MySQL
    user: 'starefassystem',          // Usuário do MySQL
    password: 'ci@systemtarefas2024b',     // Senha do MySQL
    database: 'sistematarefas' // Nome do banco de dados
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL');
});

// Rota para obter todos os itens
/*app.get('/sistematarefas', (req, res) => {
    db.query('SELECT * FROM usuario', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});*/

// Rota para adicionar um item
app.post('/usuario', (req, res) => {
    const { name, description } = req.body;
    db.query('INSERT INTO usuario (name, description) VALUES (?, ?)', [name, description], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ id: result.insertId, name, description });
    });
});

app.listen(3306, () => {
    console.log('Servidor rodando na porta 3306');
});
