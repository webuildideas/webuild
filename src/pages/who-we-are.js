// Packages
import React from 'react'

// Styled Components
import MaxWidthContainer from '../components/Shared/MaxWidthContainer'

// Components
import PageIntro from '../components/PageIntro'
import Page from '../components/Page'

const WhoWeAre = () => (
  <Page>
    <MaxWidthContainer>
      <PageIntro
        heading="Not your average agency"
        blurb="We’re a remote team of designers, product makers &amp; strategists passionate about design."
      />
    </MaxWidthContainer>
  </Page>
)

export default WhoWeAre
