// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Styled Components
import CaseStudyContainer from './CaseStudyContainer'

const CaseStudy = ({ name, tagline, listingImgSrc, listingImgSrcSet }) => (
  <CaseStudyContainer>
    <img
      className="CaseStudy__img"
      src={listingImgSrc}
      srcSet={listingImgSrcSet && listingImgSrcSet}
      alt={`${name}`}
    />
    <h3 className="CaseStudy__name">{name}</h3>
    <p className="CaseStudy__tagline">{tagline}</p>
  </CaseStudyContainer>
)

CaseStudy.propTypes = {
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  listingImgSrc: PropTypes.string.isRequired,
  listingImgSrcSet: PropTypes.string.isRequired,
}

export default CaseStudy
