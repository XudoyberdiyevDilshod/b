import sequelize from '../config/db';
import { DataTypes } from 'sequelize';
import Restaurant from './restaurants';

const Food = sequelize.define(
	'Food',
	{
		food_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		foodName: {
			type: DataTypes.STRING(32),
			allowNull: false,
			unique: true,
		},
		price: {
			type: new DataTypes.FLOAT(),
			allowNull: false,
		},
	},
	{
		tableName: 'foods',
	},
);

export default Food;
