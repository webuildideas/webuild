/* eslint-disable */

// Packages
const React = require('react')

// Components
const AppProvider = require('./src/components/AppProvider').default
const Page = require('./src/components/Page').default

exports.wrapPageElement = ({element, props}) => {
  return (
    <AppProvider {...props}>
      <Page>{element}</Page>
    </AppProvider>
  )
}