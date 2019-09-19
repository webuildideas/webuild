// Packages
import React from 'react'

// Styled Components
import MaxWidthContainer from '../components/Shared/MaxWidthContainer'

// Components
import Page from '../components/Page'
import SEO from '../components/SEO'
import PageIntro from '../components/PageIntro'

const IndexPage = () => (
  <Page>
    <SEO title="Home" />
    <MaxWidthContainer>
      <PageIntro
        heading="Scaling startups <br />through user-driven design"
        blurb="We’re a digital product design studio. We partner with inspiring entrepreneurs and growth-minded startups to achieve ambitious business goals through design."
      />
    </MaxWidthContainer>
  </Page>
)

export default IndexPage
