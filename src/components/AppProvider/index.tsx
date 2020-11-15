// Packages
import React from 'react'
import { ThemeProvider } from 'styled-components'

// Consts
import { styleTheme } from '../../common/theme/styleTheme'

// Styled Components
import { GlobalStyle } from '../../common/theme/GlobalStyle'

// Components
import Nav from '../Nav'
import Meta from '../Meta'

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={styleTheme}>
      <Meta />
      <GlobalStyle />
      <Nav />
      {children}
    </ThemeProvider>
  )
}

export default AppProvider
