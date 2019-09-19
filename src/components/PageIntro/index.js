/* eslint-disable react/no-danger */
// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Styled Components
import PageIntroContainer from './PageIntroContainer'

const PageIntro = ({ heading, blurb }) => {
  const createHeader = () => ({ __html: heading })
  const createBlurb = () => ({ __html: blurb })
  return (
    <PageIntroContainer bgColor="#fff">
      <h1 dangerouslySetInnerHTML={createHeader()} />
      <h2 dangerouslySetInnerHTML={createBlurb()} />
    </PageIntroContainer>
  )
}

PageIntro.propTypes = {
  heading: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
}

export default PageIntro
