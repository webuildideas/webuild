/* eslint-disable */

// Packages
const React = require('react')

// Utils
const { callProjectHuddle } = require('./src/utils/projectHuddle')

// Components
const AppProvider = require('./src/components/AppProvider').default

exports.wrapPageElement = ({ element, props }) => {
  return (
    <AppProvider {...props}>
      {element}
    </AppProvider>
  )
}

exports.onClientEntry = () => {
  async function loadPolyfills() {
    if (typeof window.IntersectionObserver === 'undefined') {
      await import('intersection-observer')
    }
  }
  callProjectHuddle()
}