import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import fetch from 'cross-fetch'

const link = createHttpLink({
  uri: `${window.location.origin}/___graphql`,
  fetch
})

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})
