import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import fetch from 'cross-fetch'

const uri =
  typeof window === 'undefined' ? 'https://webuild.io' : window.location.origin

const link = createHttpLink({
  uri: `${uri}/___graphql?`,
  fetch
})

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})
