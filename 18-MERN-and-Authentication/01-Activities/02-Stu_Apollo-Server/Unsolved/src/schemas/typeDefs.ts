const typeDefs = `
  # TODO: Add a comment describing the functionality of this statement
  
  # Defines a 'Class' type in the GraphQL schema, representing the structure of a class object. 
  # It includes fields for '_id' (unique identifier), 'name' (class name), 'building' (location), 
  # and 'creditHours' (number of credit hours associated with the class).
  # This is mirroring the model 

  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # TODO: Add a comment describing the functionality of this statement
  # Defines the 'Query' type in the GraphQL schema, specifying the root-level query operation. 
  # The 'classes' field returns a list of 'Class' objects, enabling clients to fetch information about available classes.
  # This is of method POST
  
  type Query {
    classes: [Class]
  }
`;

export default typeDefs;
