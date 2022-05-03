// Packages
import React from 'react'
import { RecoilRoot } from 'recoil'
import { CookiesProvider } from 'react-cookie'

// Commons
import loadPolyfills from './src/common/utils/polyfills'

// Tailwind
import './src/common/styles/tailwind.css'

// Components
import AppProvider from './src/components/AppProvider'

export const shouldUpdateScroll = ({ routerProps }) => {
  const { disableScrollUpdate } = routerProps.location.state
  return !disableScrollUpdate
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <CookiesProvider>
      <RecoilRoot>
        <AppProvider {...props}>{element}</AppProvider>
      </RecoilRoot>
    </CookiesProvider>
  )
}

export { wrapRootElement } from './src/common/apollo/wrap-root-element'

export const onClientEntry = () => {
  loadPolyfills()
}
