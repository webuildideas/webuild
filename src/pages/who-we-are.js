// Packages
import React from 'react'

// Styled Components
import SiteMaxWidthContainer from '../components/Shared/SiteMaxWidthContainer'

// Components
import Meta from '../components/Meta'
import Contact from '../components/Contact'
import PageIntro from '../components/PageIntro'
import Footer from '../components/Footer'

const WhoWeAre = () => (
  <>
    <Meta title="Who We Are" />
    <SiteMaxWidthContainer>
      <PageIntro
        heading="Not your average agency"
        blurb="We’re a remote team of designers, product makers &amp; strategists passionate about design."
      />
      <Contact />
    </SiteMaxWidthContainer>
    <Footer />
  </>
)

export default WhoWeAre
