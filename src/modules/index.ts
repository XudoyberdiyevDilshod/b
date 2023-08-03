import { makeExecutableSchema } from '@graphql-tools/schema';

import Admin from './Admin';
import Restaurants from './Restaurants';
import Food from './Food';
import Order from './Order';

export default makeExecutableSchema({
	typeDefs: [
		Admin.typeDefs,
		Restaurants.typeDefs,
		Food.typeDefs,
		Order.typeDefs,
	],
	resolvers: [
		Admin.resolvers,
		Restaurants.resolvers,
		Food.resolvers,
		Order.resolvers,
	],
});
