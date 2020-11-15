// Packages
import React from 'react'

// Commons
import { callProjectHuddle } from './src/common/utils/projectHuddle'
import loadPolyfills from './src/common/utils/polyfills'

// Tailwind
import './src/common/theme/tailwind.css'

// Components
import AppProvider from './src/components/AppProvider'

export const wrapPageElement = ({ element, props }) => {
  return <AppProvider {...props}>{element}</AppProvider>
}

export { wrapRootElement } from './src/common/apollo/wrap-root-element'

export const onClientEntry = () => {
  loadPolyfills()
  callProjectHuddle()
}
