'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Documento extends Model {
    static associate(models) {
      Documento.belongsTo(models.Tarefa, {
        foreignKey: ['idtarefa', 'idusuario'],
      });
    }
  }

  Documento.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      idtarefa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      idusuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      caminho: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      extensao: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      tamanho: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Documento',
      tableName: 'documento',
      timestamps: false,
    }
  );

  return Documento;
};
