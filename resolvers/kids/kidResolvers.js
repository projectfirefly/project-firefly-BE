const { AuthenticationError } = require("apollo-server");
const Kid = require("../../models/kidModel.js");

const authenticated = next => (root, args, ctx, info) => {
  if (!ctx.currentUser) {
    throw new AuthenticationError("You must be logged in");
  }
  return next(root, args, ctx, info);
};

module.exports = {
  Query: {
    getKidBy: async (root, args, ctx) => {
      const kid = await Kid.findBy({ [args.param]: args.value });
      return kid[0];
    },
    getKidById: async (root, args, ctx) => {
      const kid = await Kid.findById(args.kidId);
      return kid;
    },
    getKids: async (root, args, ctx) => {
      const kids = await Kid.getAll();
      return kids;
    }
  },
  Mutation: {
    addKid: async (root, args, ctx) => {
      const kid = await Kid.addKid(args.input);
      return kid;
    }
  }
};
