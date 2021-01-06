// Packages
import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useSetRecoilState } from 'recoil'

// Common
import { userConversionsAtom } from '@common/store/newfangled/atoms'
import { styleTheme } from '@common/theme/styleTheme'
import { GlobalStyle } from '@common/theme/GlobalStyle'

// Components
import Nav from '@components/Nav'
import Meta from '@components/Meta'

const AppProvider: React.FC = ({ children }) => {
  const setUserConversions = useSetRecoilState(userConversionsAtom)

  useEffect(() => {
    const setUserConversionsData = setTimeout(() => {
      const conversions = window.NF.getActivityData()
        ? window.NF.getActivityData().conversions
        : []
      setUserConversions(conversions)
    }, 1000)

    return () => clearTimeout(setUserConversionsData)
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
