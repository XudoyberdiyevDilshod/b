import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class User extends Model {
	public id!: number;
	public email!: string;
	public password!: string;
}

const Admin = sequelize.define<User>(
	'Admin',
	{
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		updatedAt: false,
		createdAt: false,
		tableName: 'admin',
	},
);

export default Admin;
