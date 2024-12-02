'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TarefasEstado extends Model {
    static associate(models) {
      TarefasEstado.belongsTo(models.Tarefa, {
        foreignKey: 'idtarefa', // Nome correto da chave estrangeira
        as: 'Tarefa',
      });

      TarefasEstado.belongsTo(models.Usuario, {
        foreignKey: 'idusuario',
        as: 'Usuario',
      });

      TarefasEstado.belongsTo(models.Estado, {
        foreignKey: 'idestado',
        as: 'Estado',
      });
    }
  }

  TarefasEstado.init(
    {
      idtarefa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      idusuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      idestado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      dthrinicio: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      dthrfim: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'TarefasEstado',
      tableName: 'tarefasestado',
      timestamps: false,
    }
  );

  return TarefasEstado;
};
