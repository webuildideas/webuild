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
import { isOverlayNavOpenAtom } from '@common/store/userInterface/atoms'

// Components
import Nav from '@modules/common/components/Nav'
import LandingPageNav from '@modules/common/components/LandingPageNav'
import OpportunityFormModal from '@modules/forms/components/OpportunityFormModal'
import BookACallFormModal from '@modules/forms/components/BookACallFormModal'

interface Props extends WithChildren {
  location: PageProps['location']
}
const bookACallUrls = ['/fintech', '/fintech/', '/fintech-2', '/fintech-2/']

const AppProvider = memo(function AppProviderMemo({
  children,
  location
}: Props) {
  const [userConversions, setUserConversions] = useRecoilState(
    userFormConversionsAtom
  )

  const [isOverlayNavOpen, setIsOverlayNavOpen] = useRecoilState(
    isOverlayNavOpenAtom
  )

  console.log(location.pathname)

  useEffect(() => {
    if (bookACallUrls.includes(location.pathname)) {
      setIsOverlayNavOpen(false)
    }

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
      <OpportunityFormModal location={location.href} />
      {bookACallUrls.includes(location.pathname) ? (
        <>
          <BookACallFormModal
            location={location.href}
            successButtonText="Go Home"
            successButtonTo="/"
          />
          <LandingPageNav tagline="Results-driven Fintech design" />
        </>
      ) : (
        <Nav />
      )}
      {children}
    </ThemeProvider>
  )
})

export default AppProvider
