import { Class } from '../models/index.js';

// TODO: Add a comment describing the functionality of this expression
// Defines the GraphQL resolvers for handling the operations specified in the GraphQL schema.
// The `Query` object maps to the read-only queries, specifying the logic for fetching data.
// will actually query the database 
const resolvers = {
  Query: {

    // Retrieves all `Class` documents from the database using Mongoose's `find` method.
    // The function is asynchronous to handle the database query, which returns a promise,
    // ensuring the operation is completed before returning the results.
    // puts them all in an array 
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement
      return await Class.find({});
    },
  },
};

export default resolvers;
