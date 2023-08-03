import { Restaurant, Food } from '../../models';

// GraphQL resolvers
export default {
	Query: {
		restaurants: async () => {
			return Restaurant.findAll({ include: [Food] });
		},
	},
	Mutation: {
		addRestaurant: async (_, body) => {
			await Restaurant.create(body);
			return 'new food added';
		},
	},

	Restaurant: {
		foods: async(restaurant:any)=> {
			return :
		}
	}


	// Post: {
  //   comments: async (post: any) => {
  //     return Comment.findAll({ where: { postId: post.id } });
  //   },
  // },
};
