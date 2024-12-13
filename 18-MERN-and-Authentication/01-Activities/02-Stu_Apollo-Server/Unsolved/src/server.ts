import express from 'express';
import db from './config/connection.js';

// TODO: Add a comment describing the functionality of this expression
// Imports the `ApolloServer` class to create an instance of a GraphQL server 
// and the `expressMiddleware` function to integrate the Apollo server with an Express application.

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

// TODO: Add a comment describing the functionality of this expression
// Imports the `typeDefs` (GraphQL schema definitions) and `resolvers` (functions defining how GraphQL queries and mutations are resolved) 
// from the `schemas` module, which together define the GraphQL API.
// imports typeDefs to query 
import { typeDefs, resolvers } from './schemas/index.js';
const server = new ApolloServer({
  typeDefs,
  resolvers,
});


// TODO: Add a comment describing the functionality of this async function
// Defines an asynchronous function to initialize and start the Apollo GraphQL server and Express application.
// givin time for the server to stat and the db to connect, then opens the epxress prots for listening and sets 
// the api to use the graphql endpoints confirming the endpoints 
server.start
const startApolloServer = async () => {
  await server.start();
  await db();

  const PORT = process.env.PORT || 3001;
  const app = express();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
};

// Call the async function to start the server
startApolloServer();
