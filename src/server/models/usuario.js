'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.hasMany(models.Tarefa, {
        foreignKey: 'idusuario',
      });
    }
  }

  Usuario.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      telefone: {
        type: DataTypes.CHAR(15),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      senha: {
        type: DataTypes.CHAR(60),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Usuario',
      tableName: 'usuario',
      timestamps: false,
    }
  );

  return Usuario;
};
