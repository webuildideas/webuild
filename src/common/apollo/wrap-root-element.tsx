import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { RecoilRoot } from 'recoil'
import { client } from './client'

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
  <RecoilRoot>
    <ApolloProvider client={client}>{element}</ApolloProvider>
  </RecoilRoot>
)
