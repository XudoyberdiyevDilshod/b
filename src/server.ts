import { ApolloServer, BaseContext } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import schema from './modules/index';

// Create Apollo Server
const server = new ApolloServer({ schema });

startStandaloneServer(server, {
	context: async ({ req }): Promise<BaseContext> => {
		return {
			token: req.headers.authorization,
		};
	},
})
	.then(({ url }) => console.log(url))
	.catch((e) => console.log('connection error'));
