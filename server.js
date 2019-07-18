const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDefs.js");
const resolvers = require("./resolvers/index.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  context: async ({ req }) => {
    let authToken = null;
    let currentUser = null;
    try {
      authToken = req.headers.authorization;
      if (authToken) {
        currentUser = await authAndFindUser(authToken);
      }
    } catch (error) {
      console.log(`Unable to authenticate user ${authToken}`);
    }
    return currentUser;
  }
});

module.exports = server;
