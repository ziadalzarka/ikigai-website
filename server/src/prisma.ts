import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from './generated/prisma';
import resolvers from './resolvers';

const PORT = process.env.GRAPH_PORT;

const server = new GraphQLServer({
	resolvers,
	typeDefs: './src/schema.graphql',
	context: req => ({
		...req,
		db: new Prisma({
			endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API (value set in `.env`)
			debug: true, // log all GraphQL queries & mutations sent to the Prisma API
			// secret: process.env.PRISMA_SECRET,
			// only needed if specified in `database/prisma.yml` (value set in `.env`)
		}),
	}),
});

server.start({
	port: PORT
}, () => console.log(`Server is running on http://localhost:${PORT}`));
