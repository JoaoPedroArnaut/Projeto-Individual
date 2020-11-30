module.exports = (sequelize, DataTypes) => {
    let Comentarios = sequelize.define('Comentarios',{
		id: {
			field: 'id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		comentario: {
			field: 'comentario',
			type: DataTypes.TEXT,
			allowNull: false
        },
        avatar: {
			field: 'avatar',
			type: DataTypes.INTEGER,
            allowNull: false,
		},
		apelido: {
			field: 'apelido',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'Comentarios', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});
	return Comentarios;
};
