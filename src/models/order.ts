import sequelize from '../config/db';
import { DataTypes } from 'sequelize';

const Order = sequelize.define(
	'Order',
	{
		order_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		userId: {
			type: DataTypes.INTEGER.UNSIGNED,
			allowNull: false,
		},
		quantity: {
			type: new DataTypes.INTEGER(),
			allowNull: false,
			defaultValue:1
		},
	},
	{
		tableName: 'orders',
	},
);

export default Order;
