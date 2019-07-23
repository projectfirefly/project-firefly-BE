const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    #//*User
    getCurrentUser: User
    getUsers: [User]!
    getUserBy(param: String!, value: String!): User
    getUserById(userId: ID!): User
    #//*Kid
    getKids: [Kid]!
    getKidBy(param: String!, value: String!): Kid
    getKidById(kidId: ID!): Kid
  }
  type Mutation {
    addUser(input: UserInput!): User!

    addKid(input: KidInput!): Kid!
  }
  type User {
    id: ID!
    email: String!
    username: String!
    first_name: String
    last_name: String
    city: String
    state: String
    zip_code: String
    country: String
    marital_status: String
    job: String
    education: String
    age: Int!
    kid_relation: String
    academic_research: Boolean!
    kids: [Kid!]!
  }
  type Kid {
    id: ID!
    username: String!
    first_name: String
    last_name: String
    city: String
    state: String
    zip_code: String
    country: String
    age: Int
    grade: String
    school_type: String
    clubs: String
    hobbies: String
    classes: String
    teachers: String
    parental_approval: Boolean!
  }
  input UserInput {
    email: String!
    username: String!
  }
  input KidInput {
    username: String!
  }
`;
