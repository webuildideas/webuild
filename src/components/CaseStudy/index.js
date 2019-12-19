// Packages
import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

// Styled Components
import * as S from './style'
import SiteMaxWidthContainer from '../Shared/SiteMaxWidthContainer'

// Components
import Button from '../Button'

const CaseStudy = ({ caseStudy, layout }) => (
  <SiteMaxWidthContainer className="CaseStudy">
    <S.CaseStudy layout={layout}>
      <div className="CaseStudy__content">
        <img alt="" src={caseStudy.logo.file.url} />
        <h1 className="CaseStudy__tagline">{caseStudy.tagline}</h1>
        {caseStudy.successSummary && (
          <p className="CaseStudy__summary">
            {caseStudy.successSummary.successSummary}
          </p>
        )}
        <Button to={`/case-studies/${caseStudy.slug}`} type="primary">
          Read Case Study
        </Button>
      </div>
      <Img
        alt={`${caseStudy.name}`}
        className="CaseStudy__img"
        fluid={caseStudy.listingImage.fluid}
      />
    </S.CaseStudy>
  </SiteMaxWidthContainer>
)

CaseStudy.propTypes = {
  /** Case Study Object */
  caseStudy: PropTypes.shape({
    /** The listing image for the case study */
    listingImage: PropTypes.object,
    /** The logo of the client */
    logo: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    successSummary: PropTypes.object,
    tagline: PropTypes.string.isRequired,
  }),
  layout: PropTypes.oneOf(['right', 'left']),
}

export default CaseStudy
