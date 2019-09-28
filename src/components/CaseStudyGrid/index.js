// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Styled Components
import CaseStudyGridContainer from './CaseStudyGridContainer'

// Components
import CaseStudy from '../CaseStudy'

const CaseStudyGrid = ({ caseStudies }) => (
  <CaseStudyGridContainer>
    {caseStudies.map(({ node }) => (
      <CaseStudy
        key={node.url}
        name={node.name}
        tagline={node.tagline}
        listingImgSrc={node.listingImage.fluid.src}
        listingImgSrcSet={node.listingImage.fluid.srcSet}
      />
    ))}
  </CaseStudyGridContainer>
)

CaseStudyGrid.propTypes = {
  caseStudies: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      name: PropTypes.string,
      tagline: PropTypes.string,
      listingImage: PropTypes.shape({
        fluid: PropTypes.shape({
          src: PropTypes.string,
          srcSet: PropTypes.string,
        }),
      }),
    })
  ).isRequired,
}

export default CaseStudyGrid
