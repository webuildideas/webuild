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
        <object
          className="CaseStudy__logo"
          data={caseStudy.logo.file.url}
          type="image/svg+xml"
        >
          <img alt={`${caseStudy.name} logo`} src={caseStudy.logo.file.url} />
        </object>
        <h1 className="CaseStudy__tagline">{caseStudy.tagline}</h1>
        {caseStudy.successSummary && (
          <p className="CaseStudy__summary">
            {caseStudy.successSummary.successSummary}
          </p>
        )}
        <Button href={`/case-studies/${caseStudy.slug}`} type="primaryLink">
          Read Case Study
        </Button>
      </div>
      <Img
        alt={`${caseStudy.name}`}
        className="CaseStudy__img"
        fluid={caseStudy.listingImage.fluid}
        imgStyle={{ objectFit: 'contain' }}
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
    /** The name of the client */
    name: PropTypes.string.isRequired,
    /** The slug for the case study detail page */
    slug: PropTypes.string.isRequired,
    /** Short summary of the success of the case study. */
    successSummary: PropTypes.object,
    /** The tagline of the Case Study */
    tagline: PropTypes.string.isRequired,
  }),
  /** Which side do you want the image to be on. */
  layout: PropTypes.oneOf(['right', 'left']),
}

export default CaseStudy
