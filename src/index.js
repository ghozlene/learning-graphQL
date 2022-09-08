import { createServer } from '@graphql-yoga/node';

const server = createServer({
	//definir le schema de graphQL
	schema: {
		//le Contrat offrir par notre Server graphQl
		typeDefs: /* GraphQL */ `
			type Query {
				hello(name: String): String
			}
		`,

		//implementation de contrat
		resolvers: {
			Query: {
				hello: (_, { name }) => `Hello ${name || 'world'}`,
			},
		},
	},
});

server.start();
