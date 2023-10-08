import { NextRequest } from "next/server";
import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import typeDefs from "@graphql/weather/schemas";
import resolvers from "@graphql/weather/resolvers";


const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});
const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer)




export async function GET(request: NextRequest) {

    return handler(request);
  
  }
  
  export async function POST(request: NextRequest) {
  
    return handler(request);
  
  }