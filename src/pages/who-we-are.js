// Packages
import React from 'react'

// Styled Components
import MaxWidthContainer from '../components/Shared/MaxWidthContainer'

// Components
import Meta from '../components/Meta'
import PageIntro from '../components/PageIntro'

const WhoWeAre = () => (
  <>
    <Meta title="Who We Are" />
    <MaxWidthContainer>
      <PageIntro
        heading="Not your average agency"
        blurb="We’re a remote team of designers, product makers &amp; strategists passionate about design."
      />
    </MaxWidthContainer>
  </>
)

export default WhoWeAre
