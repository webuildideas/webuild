// Packages
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { useInView } from 'react-intersection-observer'

import { rhythmUnit } from '../../utils/typography'

// Styled Components
import * as S from './style'
import SiteMaxWidthContainer from '../Shared/SiteMaxWidthContainer'

// Components
import CaseStudy from '../CaseStudy'
import CaseStudyHero from './CaseStudyHero'
import CaseStudyCarousel from './CaseStudyCarousel'
import CaseStudyResult from './CaseStudyResult'
import CaseStudyRichText from './CaseStudyRichText'
import CaseStudyChallengeSolution from './CaseStudyChallengeAndSolution'
import CaseStudyFeaturedTestimonial from './CaseStudyFeaturedTestimonial'
import Footer from '../Footer'
import Meta from '../Meta'

// eslint-disable-next-line
const CaseStudyDetail = ({
  data: { contentfulCaseStudy: caseStudy },
}) => {
  const [shouldAutoplay, setAutoPlay] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
  })
  const {
    resultOne,
    resultTwo,
    resultThree,
    featuredTestimonial,
    challengeSummary,
    solutionSummary,
    nextCaseStudy,
    designSystemCarousel,
    projectOverview,
    projectChallenge,
    projectSolution,
    projectOutcome,
  } = caseStudy

  useEffect(() => {
    if (inView) {
      setAutoPlay(true)
    }
  }, [inView])

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: 'CaseStudyDetail',
        }}
      />
      <Meta title={`${caseStudy.name}`} />
      <S.CaseStudyDetail
        animate={{ opacity: 1 }}
        className={`${caseStudy.slug}`}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <CaseStudyHero
          background={caseStudy.heroBackgroundImage.file.url}
          heroImg={caseStudy.heroImage.fluid}
          logo={caseStudy.whiteLogo.file.url}
          successSummary={caseStudy.successSummary.successSummary}
        />

        <section>
          {challengeSummary && solutionSummary && (
            <CaseStudyChallengeSolution
              challenge={challengeSummary.challengeSummary}
              solution={solutionSummary.solutionSummary}
            />
          )}

          <div
            style={{
              paddingTop: `${rhythmUnit(3)}`,
              paddingBottom: `${rhythmUnit(3)}`,
            }}
          >
            <SiteMaxWidthContainer maxWidth={1400}>
              {designSystemCarousel && designSystemCarousel.images && (
                <div ref={ref}>
                  <CaseStudyCarousel
                    autoplay={shouldAutoplay}
                    images={designSystemCarousel.images}
                  />
                </div>
              )}
            </SiteMaxWidthContainer>
          </div>

          <SiteMaxWidthContainer>
            <S.CaseStudyResults>
              {resultOne && <CaseStudyResult document={resultOne.json} />}
              {resultTwo && <CaseStudyResult document={resultTwo.json} />}
              {resultThree && <CaseStudyResult document={resultThree.json} />}
            </S.CaseStudyResults>
          </SiteMaxWidthContainer>

          {featuredTestimonial && (
            <CaseStudyFeaturedTestimonial
              featuredTestimonial={featuredTestimonial}
            />
          )}
        </section>

        {projectOverview && (
          <CaseStudyRichText document={projectOverview.json} />
        )}
        {projectChallenge && (
          <CaseStudyRichText document={projectChallenge.json} />
        )}
        {projectSolution && (
          <CaseStudyRichText document={projectSolution.json} />
        )}
        {projectOutcome && <CaseStudyRichText document={projectOutcome.json} />}

        <div
          style={{
            paddingTop: `${rhythmUnit(2.5)}`,
            paddingBottom: `${rhythmUnit(1)}`,
            backgroundColor: '#F9F9F9',
          }}
        >
          <CaseStudy
            caseStudy={nextCaseStudy}
            layout="right"
            mobileTextFirst={true}
          />
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
      designSystemCarousel {
        images {
          fluid {
            src
            srcSet
          }
        }
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
      projectChallenge {
        json
      }
      projectOutcome {
        json
      }
      projectOverview {
        json
      }
      projectSolution {
        json
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
    }
  }
`
export default CaseStudyDetail
