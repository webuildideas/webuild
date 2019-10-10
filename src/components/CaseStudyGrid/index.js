// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Styled Components
import CaseStudyGridContainer from './CaseStudyGridContainer'

// Components
import CaseStudyListing from '../CaseStudyListing'

const CaseStudyGrid = ({ caseStudies }) => (
  <CaseStudyGridContainer>
    {/**
     * We check to see if node exists because this component needs
     * to handle different responses from Contentful
     * When node is present that means we are on the listing page
     * when it is not present we are dealing with realtional field
     * data from contentful that is currently used on the HomePage
     * of the webuild site.
     */}
    {caseStudies.map(study =>
      study.node ? (
        <CaseStudyListing
          key={study.node.slug}
          slug={study.node.slug}
          name={study.node.name}
          tagline={study.node.tagline}
          listingImg={study.node.listingImage.fluid}
        />
      ) : (
        <CaseStudyListing
          key={study.slug}
          slug={study.slug}
          name={study.name}
          tagline={study.tagline}
          listingImg={study.listingImage.fluid}
        />
      )
    )}
  </CaseStudyGridContainer>
)

CaseStudyGrid.propTypes = {
  caseStudies: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      name: PropTypes.string,
      tagline: PropTypes.string,
      listingImage: PropTypes.object,
    })
  ).isRequired,
}

export default CaseStudyGrid
