import { ApolloClient, InMemoryCache,HttpLink } from "@apollo/client"

const link =new HttpLink({
  uri: `${process.env.SITE_URL}/api/graphqlWeather`,
})
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

export default client