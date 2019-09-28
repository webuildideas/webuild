// Packages
import React, { useEffect, useContext } from 'react'

// Context
import { AppContext } from '../components/AppProvider'

// Components
import Meta from '../components/Meta'
import ServicesHero from '../components/ServicesHero'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const WhatWeDo = () => {
  const { setNavColorTheme } = useContext(AppContext)

  useEffect(() => {
    setNavColorTheme('dark')
  }, [setNavColorTheme])

  return (
    <>
      <Meta title="What We Do" />
      <ServicesHero />
      <Contact />
      <Footer />
    </>
  )
}

export default WhatWeDo
