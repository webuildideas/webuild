/* eslint-disable */

// Packages
const React = require('react')

// Utils
const { callProjectHuddle } = require('./src/utils/projectHuddle')
const loadPolyfills = require('./src/utils/polyfills').default

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
  loadPolyfills()
  callProjectHuddle()
}