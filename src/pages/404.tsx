// Packages
import React from 'react'

// Common
import SiteMaxWidthContainer from '@common/styledComponents/SiteMaxWidthContainer'
import '@common/styles/SectionHeading.css'

// Components
import Link from '@modules/common/components/Link'
import Meta from '@components/Meta'

const NotFoundPage = () => {
  const maxWidthContainerStyles = { paddingTop: '120px ' }

  return (
    <SiteMaxWidthContainer style={maxWidthContainerStyles}>
      <Meta
        bodyAttributes={{ class: 'new-nav-padding' }}
        title="404: Not found"
      />
      <div>
        <h1 className="SectionHeading__title">Error 404</h1>
        <h2 className="SectionHeading__subtitle">
          Looks like this page doesn't exist...
        </h2>
      </div>
      <Link styleType="outline" to="/">
        Back To Home
      </Link>
    </SiteMaxWidthContainer>
  )
}

export default NotFoundPage
