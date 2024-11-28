'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tarefa extends Model {
    static associate(models) {
      Tarefa.belongsTo(models.Usuario, {
        foreignKey: 'idusuario',
      });
      Tarefa.belongsTo(models.Prioridade, {
        foreignKey: 'idprioridade',
      });
      Tarefa.belongsTo(models.Tarefa, {
        foreignKey: 'idmae',
      });
      Tarefa.hasMany(models.Documento, {
        foreignKey: ['idtarefa', 'idusuario'],
      });
      Tarefa.hasMany(models.TarefasEstado, {
        foreignKey: ['idtarefa', 'idusuario'],
      });
    }
  }

  Tarefa.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      idusuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      idmae: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      idprioridade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      titulo: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      dthrinicio: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      dthrfim: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Tarefa',
      tableName: 'tarefa',
      timestamps: false,
    }
  );

  return Tarefa;
};
