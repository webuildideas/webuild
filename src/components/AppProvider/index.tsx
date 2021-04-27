// Packages
import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useRecoilState } from 'recoil'
import uniq from 'lodash/uniq'

// Common
import { userFormConversionsAtom } from '@modules/common/atoms/userFormConversions'
import { styleTheme } from '@common/theme/styleTheme'
import { GlobalStyle } from '@common/theme/GlobalStyle'

// Components
import Nav from '@modules/common/components/Nav'

const AppProvider: React.FC = ({ children }) => {
  const [userConversions, setUserConversions] = useRecoilState(
    userFormConversionsAtom
  )

  useEffect(() => {
    const setUserConversionsData = setTimeout(() => {
      const conversions = window.NF.getActivityData()
        ? window.NF.getActivityData().conversions
        : []

      setUserConversions(uniq([...userConversions, ...conversions]))
    }, 1000)

    return () => clearTimeout(setUserConversionsData)
  })

  return (
    <ThemeProvider theme={styleTheme}>
      <GlobalStyle />
      <Nav />
      {children}
    </ThemeProvider>
  )
}

export default AppProvider
