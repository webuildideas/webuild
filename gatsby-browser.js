/* eslint-disable */

// Packages
const React = require('react')

// Components
const AppProvider = require('./src/components/AppProvider').default

exports.wrapPageElement = ({element, props}) => {
  return <AppProvider {...props}>{element}</AppProvider>
}