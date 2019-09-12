// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

// Consts
import { styleTheme } from '../../theme/styleTheme'

// Styled Components
import { GlobalStyle } from '../../theme/GlobalStyle'

// Components
import Meta from '../Meta'
import Nav from '../Nav'

const Page = ({ children }) => (
  <ThemeProvider theme={styleTheme}>
    <>
      <GlobalStyle />
      <Meta />
      <Nav />
      {children}
    </>
  </ThemeProvider>
)

Page.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Page
