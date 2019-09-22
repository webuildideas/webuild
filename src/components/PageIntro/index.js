/* eslint-disable react/no-danger */
// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Styled Components
import ContentMaxWidthContainer from '../Shared/ContentMaxWidthContainer'
import PageIntroContainer from './PageIntroContainer'

const PageIntro = ({ heading, blurb }) => {
  const createHeader = () => ({ __html: heading })
  const createBlurb = () => ({ __html: blurb })
  return (
    <PageIntroContainer bgColor="#fff">
      <h1 dangerouslySetInnerHTML={createHeader()} />
      <ContentMaxWidthContainer>
        <h2 className="h5" dangerouslySetInnerHTML={createBlurb()} />
      </ContentMaxWidthContainer>
    </PageIntroContainer>
  )
}

PageIntro.propTypes = {
  heading: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
}

export default PageIntro
