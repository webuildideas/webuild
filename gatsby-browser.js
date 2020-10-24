/* eslint-disable */
// Packages
const React = require('react')

// Tailwind
require('./src/common/theme/tailwind.css')

// Utils
const { callProjectHuddle } = require('./src/common/utils/projectHuddle')
const loadPolyfills = require('./src/common/utils/polyfills').default

// Components
const AppProvider = require('./src/components/AppProvider').default

exports.wrapPageElement = ({ element, props }) => {
  return <AppProvider {...props}>{element}</AppProvider>
}

exports.onClientEntry = () => {
  loadPolyfills()
  callProjectHuddle()
}
