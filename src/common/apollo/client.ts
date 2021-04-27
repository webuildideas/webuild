// Packages
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import fetch from 'cross-fetch'

/**
 * Staging:
 * https://graphql.contentful.com/content/v1/spaces/ry6adbgbrq11/environments/staging
 */
const httpLink = createHttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.GATSBY_CONTENTFUL_SPACE_ID}/environments/${process.env.GATSBY_CONTENTFUL_ENVIRONMENT}`,
  headers: {
    Authorization: `Bearer ${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}`
  },
  fetch
})

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
