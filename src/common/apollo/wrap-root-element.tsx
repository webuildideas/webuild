// Packages
import React from 'react'
import { ApolloProvider } from '@apollo/client'

// Common
import { client } from '@common/apollo/client'
import { AdsProvider } from '@common/ads/AdsContext'

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
  <ApolloProvider client={client}>
    <AdsProvider>{element}</AdsProvider>
  </ApolloProvider>
)
