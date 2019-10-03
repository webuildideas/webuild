// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Styled Components
import CaseStudyGridContainer from './CaseStudyGridContainer'

// Components
import CaseStudy from '../CaseStudy'

const CaseStudyGrid = ({ caseStudies }) => (
  <CaseStudyGridContainer>
    {caseStudies.map(study =>
      study.node ? (
        <CaseStudy
          key={study.node.slug}
          name={study.node.name}
          tagline={study.node.tagline}
          listingImgSrc={study.node.listingImage.fluid.srcWebp}
          listingImgSrcSet={study.node.listingImage.fluid.srcSetWebp}
          listingImg={study.node.listingImage.fluid}
        />
      ) : (
        <CaseStudy
          key={study.slug}
          name={study.name}
          tagline={study.tagline}
          listingImgSrc={study.listingImage.fluid.srcWebp}
          listingImgSrcSet={study.listingImage.fluid.srcSetWebp}
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
      listingImage: PropTypes.shape({
        fluid: PropTypes.shape({
          srcWebp: PropTypes.string,
          srcSetWebp: PropTypes.string,
        }),
      }),
    })
  ).isRequired,
}

export default CaseStudyGrid
