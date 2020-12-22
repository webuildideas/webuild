// Packages
import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useSetRecoilState } from 'recoil'

// Common
import { styleTheme } from '@common/theme/styleTheme'
import { GlobalStyle } from '@common/theme/GlobalStyle'

// Components
import { userConversionsAtom } from '@common/store/newfangled/atoms'
import Nav from '../Nav'
import Meta from '../Meta'

const AppProvider: React.FC = ({ children }) => {
  const setUserConversions = useSetRecoilState(userConversionsAtom)

  useEffect(() => {
    setUserConversions(window.NF.getActivityData().conversions)
  })

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
