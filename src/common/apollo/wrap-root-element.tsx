// Packages
import React from 'react'
import { ApolloProvider } from '@apollo/client'

// Common
import { client } from '@common/apollo/client'

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
