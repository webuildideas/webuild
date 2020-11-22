// Packages
import React from 'react'
import { RecoilRoot } from 'recoil'

// Components
import AppProvider from './src/components/AppProvider'

export const wrapPageElement = ({ element, props }) => {
  return (
    <RecoilRoot>
      <AppProvider {...props}>{element}</AppProvider>
    </RecoilRoot>
  )
}

export { wrapRootElement } from './src/common/apollo/wrap-root-element'
