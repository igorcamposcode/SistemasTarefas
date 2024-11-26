module.exports = (sequelize, DataTypes) => {
  const Tarefa = sequelize.define('Tarefa', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    idusuario: { type: DataTypes.INTEGER, allowNull: false },
    idmae: { type: DataTypes.INTEGER, allowNull: true },
    idprioridade: { type: DataTypes.INTEGER, allowNull: false },
    titulo: { type: DataTypes.STRING(255), allowNull: false },
    dthrinicio: { type: DataTypes.DATE, allowNull: false },
    dthrfim: { type: DataTypes.DATE, allowNull: true },
    descricao: { type: DataTypes.TEXT, allowNull: true },
  }, { tableName: 'tarefa', timestamps: false });

  Tarefa.associate = (models) => {
    Tarefa.belongsTo(models.Usuario, { foreignKey: 'idusuario' });
    Tarefa.belongsTo(models.Prioridade, { foreignKey: 'idprioridade' });
    Tarefa.hasMany(models.Documento, { foreignKey: 'idtarefa' });
    Tarefa.hasMany(models.TarefasEstado, { foreignKey: 'idtarefa' });
    Tarefa.belongsTo(models.Tarefa, { foreignKey: 'idmae', as: 'TarefaMae' });
  };

  return Tarefa;
};
