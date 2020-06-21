import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

const initApoloServer = async (app: express.Application) => {
  const schema = await buildSchema({
    emitSchemaFile: true,
    resolvers: [__dirname + '/resolvers/*-resolver.*'],
  });

  const server = new ApolloServer({
    introspection: true,
    playground: true,
    schema,
  });

  server.applyMiddleware({ app });
};

export default initApoloServer;
