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
        fkUsuario: {
			field: 'fkUsuario',
			type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: 'usuario', key: 'id'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
		},
	}, 
	{
		tableName: 'Comentarios', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Comentarios;
};
