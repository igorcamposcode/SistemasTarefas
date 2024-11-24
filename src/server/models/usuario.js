'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(_models) {
      // Associações podem ser definidas aqui
    }
  }

  Usuario.init(
    {
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
        type: DataTypes.CHAR(13),
        allowNull: true, // Opcional
      },
      email: {
        type: DataTypes.CHAR(255),
        allowNull: false,
        unique: true, // E-mail único
      },
      senha: {
        type: DataTypes.CHAR(15),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Usuario',
      tableName: 'usuario', // Nome da tabela no banco
      timestamps: false, // Remove colunas createdAt e updatedAt
    }
  );

  return Usuario;
};

