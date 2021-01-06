// Packages
import React from 'react'

// Common
import SiteMaxWidthContainer from '@common/styledComponents/SiteMaxWidthContainer'
import '@common/styles/SectionHeading.css'

// Components
import Button from '@components/Button'
import Meta from '@components/Meta'

const NotFoundPage = () => {
  const maxWidthContainerStyles = { paddingTop: '120px ' }

  return (
    <SiteMaxWidthContainer style={maxWidthContainerStyles}>
      <Meta title="404: Not found" />
      <div>
        <h1 className="SectionHeading__title">Error 404</h1>
        <h2 className="SectionHeading__subtitle">
          Looks like this page doesn't exist...
        </h2>
      </div>
      <Button href="/" type="secondaryLink">
        Back To Home
      </Button>
    </SiteMaxWidthContainer>
  )
}

export default NotFoundPage
