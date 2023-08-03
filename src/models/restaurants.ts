import sequelize from '../config/db';
import { DataTypes } from 'sequelize';

const Restaurant = sequelize.define(
	'Restaurant',
	{
		restaurant_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING(32),
			allowNull: false,
			unique: true,
		},
	},
	{
		tableName: 'restaurants',
	},
);

export default Restaurant;
