module.exports = (sequelize, DataTypes) => {
  const Estado = sequelize.define('Estado', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING(100), allowNull: false },
  }, { tableName: 'estado', timestamps: false });

  Estado.associate = (models) => {
    Estado.hasMany(models.TarefasEstado, { foreignKey: 'idestado' });
  };

  return Estado;
};
