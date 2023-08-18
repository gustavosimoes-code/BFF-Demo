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

type Dealership {
  dealershipId: String
  dealershipCity: String
  dealerhipCountry: String
  dealershipBrand: String
}

type Query {
  customers: [Customer]
  customer(id : Int!) : Customer
  dealer(dealershipId: String!): Dealership
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
