import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: `${window.location.origin}/___graphql?`,
  cache: new InMemoryCache()
})
