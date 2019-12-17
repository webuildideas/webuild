// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Styled Components
import * as S from './style'

// Components
import CaseStudy from '../CaseStudy'

const CaseStudyListing = ({ caseStudies }) => (
  <S.CaseStudyListing>
    {caseStudies.map((study, idx) => {
      const s = study.node || study
      // Even # items we want image on right.
      const layout = (idx + 1) % 2 === 0 ? 'left' : 'right'
      return <CaseStudy key={s.slug} caseStudy={s} layout={layout} />
    })}
  </S.CaseStudyListing>
)

CaseStudyListing.propTypes = {
  caseStudies: PropTypes.arrayOf(
    PropTypes.shape({
      listingImage: PropTypes.object,
      name: PropTypes.string,
      slug: PropTypes.string,
      tagline: PropTypes.string,
    })
  ).isRequired,
}

export default CaseStudyListing
