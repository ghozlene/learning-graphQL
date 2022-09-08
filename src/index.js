import { createServer } from '@graphql-yoga/node';

const typeDefs = 'src/schema/schema.graphql';
const resolvers = {
	Query: {
		hello: (_, { name }) => `Hello ${name || 'world'}`,
	},
};
const server = createServer({
	//definir le schema de graphQL

	//le Contrat offrir par notre Server graphQl
	typeDefs,
	//implementation de contrat
	resolvers,
});

server.start();
