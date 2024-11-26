module.exports = (sequelize, DataTypes) => {
  const Prioridade = sequelize.define('Prioridade', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING(100), allowNull: false },
  }, { tableName: 'prioridade', timestamps: false });

  Prioridade.associate = (models) => {
    Prioridade.hasMany(models.Tarefa, { foreignKey: 'idprioridade' });
  };

  return Prioridade;
};
