const GMR = require("graphql-merge-resolvers");
const userResolvers = require("./users/userResolvers.js");
const kidResolvers = require("./kids/kidResolvers.js");

module.exports = GMR.merge([userResolvers, kidResolvers]);
