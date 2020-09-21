import 'globals';

import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
};

startServer();
