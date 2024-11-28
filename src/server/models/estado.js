'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Estado extends Model {
    static associate(models) {
      Estado.hasMany(models.TarefasEstado, {
        foreignKey: 'idestado',
      });
    }
  }

  Estado.init(
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
      modelName: 'Estado',
      tableName: 'estado',
      timestamps: false,
    }
  );

  return Estado;
};
