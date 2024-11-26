module.exports = (sequelize, DataTypes) => {
  const TarefasEstado = sequelize.define('TarefasEstado', {
    idtarefa: { type: DataTypes.INTEGER, primaryKey: true },
    idusuario: { type: DataTypes.INTEGER, primaryKey: true },
    idestado: { type: DataTypes.INTEGER, primaryKey: true },
    dthrinicio: { type: DataTypes.DATE, primaryKey: true },
    dthrfim: { type: DataTypes.DATE, allowNull: true },
  }, { tableName: 'tarefasestado', timestamps: false });

  TarefasEstado.associate = (models) => {
    TarefasEstado.belongsTo(models.Tarefa, { foreignKey: ['idtarefa', 'idusuario'] });
    TarefasEstado.belongsTo(models.Estado, { foreignKey: 'idestado' });
  };

  return TarefasEstado;
};
