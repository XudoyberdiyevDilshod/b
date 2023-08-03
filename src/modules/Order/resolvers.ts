import { Food, Order } from '../../models';

// GraphQL resolvers
export default {
	Query: {
		orders: async (_, { userId }) => {
			return Order.findAll({ where: { userId }, include: [Food] });
		},
	},
	Mutation: {
		addOrder: async (_, { userId, food_id, quantity }) => {
			return Order.create({ userId, food_id, quantity });
		},
	},

	Order: {
		food: async (order: any) => {
			return Food.findByPk(order.food_id);
		},
	},
};
