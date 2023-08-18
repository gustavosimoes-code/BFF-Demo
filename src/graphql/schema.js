import resolvers from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";

const typeDefs = `
type Customer {
  id: Int
  firstName: String
  lastName: String
  invitedBy: String
  vin: String
  invitationCode: String
}

type Query {
  customers: [Customer]
  customer(id : Int!) : Customer
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
