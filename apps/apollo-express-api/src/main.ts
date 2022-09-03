import { ApolloServer } from "apollo-server-express";
import * as express from 'express';
import { resolvers, typeDefs } from './graphql';
import microCors = require('micro-cors');

const startServer = async () => {
  // app init
  const app = express();
  const port = process.env.port || 4000; 

    // middleware
    app.use(microCors());
    
  // server
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app })

  app.use((_req, res) => {
    res.send("Hello from express apollo server");
  });

  app.listen({ port }, () => console.log(`Apollo server running on port ${port}`));
}

startServer();
