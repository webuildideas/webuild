// Packages
import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

// Styled Components
import { CaseStudyListingContainer } from './style'

const CaseStudyListing = ({ name, tagline, listingImg, slug }) => (
  <CaseStudyListingContainer to={`/case-studies/${slug}`}>
    <Img alt={`${name}`} className="CaseStudy__img" fluid={listingImg} />
    <h3 className="CaseStudy__name">{name}</h3>
    <p className="CaseStudy__tagline">{tagline}</p>
  </CaseStudyListingContainer>
)

CaseStudyListing.propTypes = {
  listingImg: PropTypes.object,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
}

export default CaseStudyListing
