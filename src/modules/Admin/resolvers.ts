import { Admin } from '../../models';

// GraphQL resolvers
export default {
	Query: {
		user: async (_, { id }: { id: number }) => {
			const user = await Admin.findByPk(id);
			return user;
		},
	},
	Mutation: {
		login: async (
			_,
			{ email, password }: { email: string; password: string },
		) => {
			const user = await Admin.findOne({ where: { email, password } });
			if (!user) {
				throw new Error('Invalid credentials');
			}
			return user;
		},
	},
};
