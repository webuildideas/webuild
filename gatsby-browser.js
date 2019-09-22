/* eslint-disable */

// Packages
const React = require('react')

// Utils
const { callProjectHuddle } = require('./src/utils/projectHuddle')

// Components
const AppProvider = require('./src/components/AppProvider').default
const Page = require('./src/components/Page').default

exports.wrapPageElement = ({ element, props }) => {
  return (
    <AppProvider {...props}>
      <Page {...props}>{element}</Page>
    </AppProvider>
  )
}

exports.onClientEntry = () => {
  callProjectHuddle()
}