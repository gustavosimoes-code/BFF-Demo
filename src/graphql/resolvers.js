const resolvers = {
  Query: {
    customers(root, args, ctx) {
      return ctx.models.customer.getAll();
    },
    customer(root, args, ctx) {
      console.log("Received id: " + args.id)
      return ctx.models.customer.getById(args.id);
    }
  }
};

export default resolvers;
