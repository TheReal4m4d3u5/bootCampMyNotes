const typeDefs = `
  type Class {
    _id: ID!
    name: String
    building: String
    creditHours: Int
  }

  // Query is a get request, give me back an arry of class shaped objects
  type Query {
    classes: [Class]
  }
`;

export default typeDefs;
