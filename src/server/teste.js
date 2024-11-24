const { Sequelize, DataTypes } = require('sequelize');

// Configurar a conexão com o banco de dados
const sequelize = new Sequelize('sistematarefas', 'starefassystem', 'ci@systemtarefas2024b', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Desativa logs SQL para um output mais limpo
});

// Definir o modelo `Usuario` (baseado na tabela do banco)
const Usuario = sequelize.define('Usuario', {
  idusuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING(13),
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
});

// Função de teste para criar um novo usuário
const testeCriacaoUsuario = async () => {
  try {
    // Testa a conexão
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados foi bem-sucedida.');

    // Sincronizar o modelo com a tabela (garantir que está em conformidade)
    await sequelize.sync();

    // Inserir um novo usuário
    const novoUsuario = await Usuario.create({
      nome: 'João Teste',
      telefone: '11999999999',
      email: 'joaoteste@email.com',
      senha: 'senha123',
    });

    console.log('Novo usuário criado com sucesso:');
    console.log(novoUsuario.toJSON());
  } catch (error) {
    console.error('Erro durante o teste de criação de usuário:', error.message);
  } finally {
    // Fechar a conexão
    await sequelize.close();
    console.log('Conexão com o banco de dados encerrada.');
  }
};

// Executar o teste
testeCriacaoUsuario();
