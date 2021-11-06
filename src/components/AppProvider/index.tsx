// Packages
import React, { memo, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useRecoilState } from 'recoil'
import { PageProps } from 'gatsby'
import uniq from 'lodash/uniq'

// Common
import { userFormConversionsAtom } from '@modules/common/atoms/userFormConversions'
import { WithChildren } from '@common/types/Utilities'
import { styleTheme } from '@common/theme/styleTheme'
import { GlobalStyle } from '@common/theme/GlobalStyle'

// Components
import Nav from '@modules/common/components/Nav'
import LandingPageNav from '@modules/common/components/LandingPageNav'

interface Props extends WithChildren {
  location: PageProps['location']
}

const AppProvider = memo(function AppProviderMemo({
  children,
  location
}: Props) {
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
  }, [])

  return (
    <ThemeProvider theme={styleTheme}>
      <GlobalStyle />
      {location.pathname === '/fintech' ? (
        <LandingPageNav
          location={location.href}
          tagline="Results-drive Fintech design"
        />
      ) : (
        <Nav location={location.href} />
      )}
      {children}
    </ThemeProvider>
  )
})

export default AppProvider
