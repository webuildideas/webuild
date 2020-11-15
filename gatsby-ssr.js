// Packages
import React from 'react'

// Components
import AppProvider from './src/components/AppProvider'

export const wrapPageElement = ({ element, props }) => {
  return <AppProvider {...props}>{element}</AppProvider>
}

// export { wrapRootElement } from './src/common/apollo/wrap-root-element'
