// Packages
import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

// Styled Components
import CaseStudyContainer from './CaseStudyContainer'

const CaseStudy = ({ name, tagline, listingImg, slug }) => (
  <CaseStudyContainer to={`/case-studies/${slug}`}>
    <Img className="CaseStudy__img" fluid={listingImg} alt={`${name}`} />
    <h3 className="CaseStudy__name">{name}</h3>
    <p className="CaseStudy__tagline">{tagline}</p>
  </CaseStudyContainer>
)

CaseStudy.propTypes = {
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  listingImg: PropTypes.object,
  slug: PropTypes.string.isRequired,
}

export default CaseStudy
