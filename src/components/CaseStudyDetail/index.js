// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { rhythmUnit } from '../../utils/typography'

// Styled Components
import * as S from './style'
import SiteMaxWidthContainer from '../Shared/SiteMaxWidthContainer'

// Components
import CaseStudyHero from '../CaseStudyHero'
import CaseStudyResult from '../CaseStudyResult'
import Testimonial from '../Testimonial'

const CaseStudyDetail = ({ data: { contentfulCaseStudy: caseStudy } }) => {
  const {
    resultOne,
    resultTwo,
    resultThree,
    featuredTestimonial,
    challengeSummary,
    solutionSummary,
  } = caseStudy

  console.log(resultOne, resultTwo, resultThree)
  return (
    <>
      <Helmet
        bodyAttributes={{
          class: 'CaseStudyDetail',
        }}
      />
      <S.CaseStudyDetail className={`${caseStudy.slug}`}>
        <CaseStudyHero
          background={caseStudy.heroBackgroundImage.file.url}
          heroImg={caseStudy.heroImage.fluid}
          logo={caseStudy.whiteLogo.file.url}
          successSummary={caseStudy.successSummary.successSummary}
        />

        {challengeSummary && solutionSummary && (
          <SiteMaxWidthContainer>
            <S.CaseStudyChallengeSolution>
              <div>
                <h3>Challenge</h3>
                <p>{challengeSummary.challengeSummary}</p>
              </div>
              <div>
                <h3>Solution</h3>
                <p>{solutionSummary.solutionSummary}</p>
              </div>
            </S.CaseStudyChallengeSolution>
          </SiteMaxWidthContainer>
        )}

        <SiteMaxWidthContainer>
          <S.CaseStudyResults>
            {resultOne && <CaseStudyResult content={resultOne.json.content} />}
            {resultTwo && <CaseStudyResult content={resultTwo.json.content} />}
            {resultThree && (
              <CaseStudyResult content={resultThree.json.content} />
            )}
          </S.CaseStudyResults>
        </SiteMaxWidthContainer>

        {featuredTestimonial && (
          <div
            style={{
              paddingTop: `${rhythmUnit(4)}`,
              paddingBottom: `${rhythmUnit(4)}`,
              backgroundColor: '#F9F9F9',
            }}
          >
            <Testimonial
              company={featuredTestimonial.company}
              companyRole={featuredTestimonial.role}
              featuredHeadshot={featuredTestimonial.featuredHeadshot.fluid.src}
              headshot={featuredTestimonial.headshot.fixed.src}
              isFeatured={true}
              name={featuredTestimonial.name}
            >
              {featuredTestimonial.testimonial.testimonial}
            </Testimonial>
          </div>
        )}
      </S.CaseStudyDetail>
    </>
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
      solutionSummary {
        solutionSummary
      }
      challengeSummary {
        challengeSummary
      }
      resultOne {
        json
      }
      resultTwo {
        json
      }
      resultThree {
        json
      }
      featuredTestimonial {
        company
        name
        role
        testimonial {
          testimonial
        }
        featuredHeadshot {
          fluid(maxWidth: 1000) {
            src
          }
        }
        headshot {
          fixed(cropFocus: FACE, height: 100, width: 100) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
    }
  }
`
export default CaseStudyDetail
