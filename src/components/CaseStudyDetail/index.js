// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Styled Components
import * as S from './style'

// Components
import CaseStudyHero from '../CaseStudyHero'

const CaseStudyDetail = ({ data: { contentfulCaseStudy: caseStudy } }) => {
  console.log(caseStudy)
  return (
    <S.CaseStudyDetail className={`${caseStudy.slug}`}>
      <CaseStudyHero
        background={caseStudy.heroBackgroundImage.file.url}
        heroImg={caseStudy.heroImage.fluid}
        logo={caseStudy.whiteLogo.file.url}
        successSummary={caseStudy.successSummary.successSummary}
      />
    </S.CaseStudyDetail>
  )
}

CaseStudyDetail.propTypes = {
  data: PropTypes.object,
}

export const query = graphql`
  query caseStudyQuery($slug: String!) {
    contentfulCaseStudy(slug: { eq: $slug }) {
      name
      successSummary {
        successSummary
      }
      heroBackgroundImage {
        file {
          url
        }
      }
      heroImage {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      whiteLogo {
        file {
          url
        }
      }
      slug
    }
  }
`
export default CaseStudyDetail
