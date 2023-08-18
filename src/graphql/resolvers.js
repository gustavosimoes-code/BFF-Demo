const resolvers = {
  Query: {
    customers(root, args, ctx) {
      return ctx.models.customer.getAll();
    },
    customer(root, args, ctx) {
      console.log("Received id: " + args.id)
      return ctx.models.customer.getById(args.id);
    },
    dealer(root, args, ctx) {
      console.log("Received dealershipId: " + args.dealershipId)
      return ctx.models.dealer.getById(args.dealershipId);
    }
  }
};

export default resolvers;
