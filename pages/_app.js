// Packages
import React from 'react'
import App from 'next/app'

// Components
import Page from '../components/Page'

class WeBuildApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Page>
        <Component {...pageProps} />
      </Page>
    )
  }
}

export default WeBuildApp
