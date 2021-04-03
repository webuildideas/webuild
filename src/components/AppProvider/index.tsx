// Packages
import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useSetRecoilState } from 'recoil'

// Common
import { userFormConversionsAtom } from '@modules/common/atoms/userFormConversions'
import { styleTheme } from '@common/theme/styleTheme'
import { GlobalStyle } from '@common/theme/GlobalStyle'

// Components
import Meta from '@components/Meta'
import Nav from '@modules/common/components/Nav'

const AppProvider: React.FC = ({ children }) => {
  const setUserConversions = useSetRecoilState(userFormConversionsAtom)

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
