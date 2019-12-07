// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Styled Components
import { CaseStudyGridContainer } from './style'

// Components
import CaseStudyListing from '../CaseStudyListing'

const CaseStudyGrid = ({ caseStudies }) => (
  <CaseStudyGridContainer>
    {/**
     * We check to see if node exists because this component needs
     * to handle different responses from Contentful
     * When node is present that means we are on the listing page
     * when it is not present we are dealing with relational field
     * data from contentful that is currently used on the HomePage
     * of the webuild site.
     */}
    {caseStudies.map(study =>
      study.node ? (
        <CaseStudyListing
          key={study.node.slug}
          listingImg={study.node.listingImage.fluid}
          name={study.node.name}
          slug={study.node.slug}
          tagline={study.node.tagline}
        />
      ) : (
        <CaseStudyListing
          key={study.slug}
          listingImg={study.listingImage.fluid}
          name={study.name}
          slug={study.slug}
          tagline={study.tagline}
        />
      )
    )}
  </CaseStudyGridContainer>
)

CaseStudyGrid.propTypes = {
  caseStudies: PropTypes.arrayOf(
    PropTypes.shape({
      listingImage: PropTypes.object,
      name: PropTypes.string,
      slug: PropTypes.string,
      tagline: PropTypes.string,
    })
  ).isRequired,
}

export default CaseStudyGrid
