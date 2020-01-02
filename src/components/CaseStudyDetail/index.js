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
import CaseStudy from '../CaseStudy'
import CaseStudyHero from '../CaseStudyHero'
import CaseStudyCarousel from '../CaseStudyCarousel'
import CaseStudyResult from '../CaseStudyResult'
import Testimonial from '../Testimonial'
import Footer from '../Footer'

const CaseStudyDetail = ({ data: { contentfulCaseStudy: caseStudy } }) => {
  const {
    resultOne,
    resultTwo,
    resultThree,
    featuredTestimonial,
    challengeSummary,
    solutionSummary,
    nextCaseStudy,
    designSystemGallery,
  } = caseStudy

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

        <div
          style={{
            paddingTop: `${rhythmUnit(4)}`,
            paddingBottom: `${rhythmUnit(4)}`,
          }}
        >
          <SiteMaxWidthContainer maxWidth={1400}>
            {designSystemGallery && (
              <CaseStudyCarousel images={designSystemGallery} />
            )}
          </SiteMaxWidthContainer>
        </div>
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
        <div
          style={{
            paddingTop: `${rhythmUnit(4)}`,
            paddingBottom: `${rhythmUnit(4)}`,
            backgroundColor: '#F9F9F9',
          }}
        >
          <CaseStudy caseStudy={nextCaseStudy} layout="right" />
        </div>

        <Footer />
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
        fluid(maxWidth: 2200, quality: 100) {
          ...GatsbyContentfulFluid_withWebp_noBase64
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
      nextCaseStudy {
        name
        tagline
        slug
        successSummary {
          successSummary
        }
        logo {
          file {
            url
          }
        }
        listingImage {
          fluid {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      designSystemGallery {
        fluid {
          src
          srcSet
        }
      }
    }
  }
`
export default CaseStudyDetail
