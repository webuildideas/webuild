// Packages
import React from 'react'

// Styled Components
import SiteMaxWidthContainer from '../components/Shared/SiteMaxWidthContainer'
import SectionHeading from '../components/Shared/SectionHeading'
import Button from '../components/Button'

// Components
import Meta from '../components/Meta'

const NotFoundPage = () => (
  <SiteMaxWidthContainer style={{ paddingTop: '120px' }}>
    <Meta title="404: Not found" />
    <SectionHeading>
      <h1 className="SectionHeading__title">Error 404</h1>
      <h2 className="SectionHeading__subtitle">
        Looks like this page doesn't exist...
      </h2>
    </SectionHeading>
    <Button to="/" type="secondary">
      Back To Home
    </Button>
  </SiteMaxWidthContainer>
)

export default NotFoundPage
