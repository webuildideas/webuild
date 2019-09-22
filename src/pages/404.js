// Packages
import React from 'react'

// Styled Components
import SiteMaxWidthContainer from '../components/Shared/SiteMaxWidthContainer'
import StyledButton from '../components/Button'

// Components
import PageIntro from '../components/PageIntro'
import Meta from '../components/Meta'

const NotFoundPage = () => (
  <SiteMaxWidthContainer style={{ textAlign: 'center' }}>
    <Meta title="404: Not found" />
    <PageIntro
      heading="You must be lost."
      blurb="Error 404. Looks like this page doesn't exist..."
    />
    <StyledButton to="/">Back To Home</StyledButton>
  </SiteMaxWidthContainer>
)

export default NotFoundPage
