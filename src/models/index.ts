import sequelize from '../config/db';
import Food from './food';
import Order from './order';
import Restaurant from './restaurants';
import Admin from './user';

Restaurant.hasMany(Food, {
	foreignKey: 'restaurant_id',
	onDelete: 'cascade',
});

Food.belongsTo(Restaurant, {
	foreignKey: 'restaurant_id',
});

Food.hasMany(Order, {
	foreignKey: 'food_id',
	onDelete: 'cascade',
});

Order.belongsTo(Food, {
	foreignKey: 'food_id',
});

sequelize.sync({ alter: true });

export { Restaurant, Food, Order, Admin };
