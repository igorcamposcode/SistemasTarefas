'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Prioridade extends Model {
    static associate(models) {
      Prioridade.hasMany(models.Tarefa, {
        foreignKey: 'idprioridade',
      });
    }
  }

  Prioridade.init(
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
    },
    {
      sequelize,
      modelName: 'Prioridade',
      tableName: 'prioridade',
      timestamps: false,
    }
  );

  return Prioridade;
};
