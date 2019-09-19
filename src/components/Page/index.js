/* eslint-disable react/no-unused-state */
// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

// Consts
import { styleTheme } from '../../theme/styleTheme'

// Styled Components
import { GlobalStyle } from '../../theme/GlobalStyle'

// Components
import AppProvider from '../AppProvider'
import Nav from '../Nav'

const Page = ({ children }) => (
  <ThemeProvider theme={styleTheme}>
    <AppProvider>
      <GlobalStyle />
      <Nav />
      {children}
    </AppProvider>
  </ThemeProvider>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
