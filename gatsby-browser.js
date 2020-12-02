// Packages
import React from 'react'
import { RecoilRoot } from 'recoil'

// Commons
import { callProjectHuddle } from './src/common/utils/projectHuddle'
import loadPolyfills from './src/common/utils/polyfills'

// Tailwind
import './src/common/theme/tailwind.css'

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

export const onClientEntry = () => {
  loadPolyfills()
  callProjectHuddle()
}
