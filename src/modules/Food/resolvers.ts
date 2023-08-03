import { Food, Restaurant } from '../../models';

// GraphQL resolvers
export default {
	Query: {
		foods: async () => {
			return Food.findAll({ include: [Restaurant] });
		},
	},
	Mutation: {
		addFood: async (_, body) => {
			await Food.create(body);
			return 'new food added';
		},
	},
	Food: {
		restaurant: async (food: any) => {
			return Restaurant.findByPk(food.restaurant_id);
		},
	},
};
