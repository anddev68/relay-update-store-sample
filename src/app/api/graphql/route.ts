"use server";

import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { addResolversToSchema } from "@graphql-tools/schema";

let userName = "initialUserName";
let userWithoutIdName = "initialUserWithoutIdName";

const resolvers = {
  Query: {
    user: () => {
      return {
        id: "1",
        name: userName,
      };
    },
    userWithoutId: () => {
      return {
        name: userWithoutIdName,
      };
    },
  },
  Mutation: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateUser: (_: any, { name }: any) => {
      userName = name;
      return {
        query: {},
      };
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    updateUserWithoutId: (_: any, { name }: any) => {
      userWithoutIdName = name;
      return {
        query: {},
      };
    },
  },
};

const schema = loadSchemaSync("./schema.graphql", {
  loaders: [new GraphQLFileLoader()],
});
const schemaWithResolvers = addResolversToSchema({ schema, resolvers });

const server = new ApolloServer({
  schema: schemaWithResolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
