// Packages
import React from 'react'

// Styled Components
import SiteMaxWidthContainer from '../components/Shared/SiteMaxWidthContainer'

// Components
import Meta from '../components/Meta'
import PageIntro from '../components/PageIntro'

const WhoWeAre = () => (
  <>
    <Meta title="Who We Are" />
    <SiteMaxWidthContainer>
      <PageIntro
        heading="Not your average agency"
        blurb="We’re a remote team of designers, product makers &amp; strategists passionate about design."
      />
    </SiteMaxWidthContainer>
  </>
)

export default WhoWeAre
