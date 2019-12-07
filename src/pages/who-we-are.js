// Packages
import React from 'react'

// Styled Components
import SiteMaxWidthContainer from '../components/Shared/SiteMaxWidthContainer'

// Components
import Meta from '../components/Meta'
import PageIntro from '../components/PageIntro'
import Footer from '../components/Footer'

const WhoWeAre = () => (
  <>
    <Meta title="Who We Are" />
    <SiteMaxWidthContainer>
      <PageIntro>
        <span>Not your average agency.</span> We combine our deep expertise in
        product design and strategy to accelerate business growth for industry
        leaders and fast-growing startups.
      </PageIntro>
    </SiteMaxWidthContainer>
    <Footer />
  </>
)

export default WhoWeAre
