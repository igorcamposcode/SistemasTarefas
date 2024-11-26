module.exports = (sequelize, DataTypes) => {
  const Documento = sequelize.define('Documento', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    idtarefa: { type: DataTypes.INTEGER, allowNull: false },
    idusuario: { type: DataTypes.INTEGER, allowNull: false },
    nome: { type: DataTypes.STRING(100), allowNull: false },
    caminho: { type: DataTypes.STRING(255), allowNull: false },
    extensao: { type: DataTypes.STRING(255), allowNull: false },
    tamanho: { type: DataTypes.STRING(255), allowNull: false },
  }, { tableName: 'documento', timestamps: false });

  Documento.associate = (models) => {
    Documento.belongsTo(models.Tarefa, { foreignKey: 'idtarefa' });
    Documento.belongsTo(models.Usuario, { foreignKey: 'idusuario' });
  };

  return Documento;
};
