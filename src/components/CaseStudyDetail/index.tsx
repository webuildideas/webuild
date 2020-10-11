// Packages
import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { useInView } from 'react-intersection-observer'

// Commons
import { rhythmUnit } from '../../common/utils/typography'
import { CaseStudyDetail as CaseStudyDetailType } from '../../common/types/CaseStudy'
import * as S from './style'
import SiteMaxWidthContainer from '../../common/styledComponents/SiteMaxWidthContainer'

// Components
import CaseStudy from '../CaseStudy'
import Hero from './Hero'
import Carousel from './Carousel'
import Result from './Result'
import RichText from './RichText'
import ChallengeAndSolution from './ChallengeAndSolution'
import FeaturedTestimonial from './FeaturedTestimonial'
import Footer from '../Footer'
import Meta from '../Meta'

interface Props {
  data: {
    contentfulCaseStudy: CaseStudyDetailType
  }
}

const CaseStudyDetail = ({ data: { contentfulCaseStudy } }: Props) => {
  const [shouldAutoplay, setAutoPlay] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true
  })
  const {
    name,
    slug,
    heroBackgroundImage,
    heroImage,
    whiteLogo,
    successSummary,
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
    projectOutcome
  } = contentfulCaseStudy

  useEffect(() => {
    if (inView) {
      setAutoPlay(true)
    }
  }, [inView])

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: 'CaseStudyDetail'
        }}
      />
      <Meta title={name} />
      <S.CaseStudyDetail
        animate={{ opacity: 1 }}
        className={slug}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {heroBackgroundImage && heroImage && whiteLogo && successSummary ? (
          <Hero
            background={heroBackgroundImage.file.url}
            heroImg={heroImage.fluid}
            logo={whiteLogo.file.url}
            successSummary={successSummary.successSummary}
          />
        ) : null}

        <section>
          {challengeSummary && solutionSummary && (
            <ChallengeAndSolution
              challenge={challengeSummary.challengeSummary}
              solution={solutionSummary.solutionSummary}
            />
          )}

          <div
            style={{
              paddingTop: `${rhythmUnit(3)}`,
              paddingBottom: `${rhythmUnit(3)}`
            }}
          >
            <SiteMaxWidthContainer maxWidth={1400}>
              {designSystemCarousel && designSystemCarousel.images && (
                <div ref={ref}>
                  <Carousel
                    autoplay={shouldAutoplay}
                    images={designSystemCarousel.images}
                  />
                </div>
              )}
            </SiteMaxWidthContainer>
          </div>

          <SiteMaxWidthContainer>
            <S.CaseStudyResults>
              {resultOne && <Result document={resultOne} />}
              {resultTwo && <Result document={resultTwo} />}
              {resultThree && <Result document={resultThree} />}
            </S.CaseStudyResults>
          </SiteMaxWidthContainer>

          {featuredTestimonial && (
            <FeaturedTestimonial featuredTestimonial={featuredTestimonial} />
          )}
        </section>

        {projectOverview && <RichText document={projectOverview} />}
        {projectChallenge && <RichText document={projectChallenge} />}
        {projectSolution && <RichText document={projectSolution} />}
        {projectOutcome && <RichText document={projectOutcome} />}

        {nextCaseStudy ? (
          <div
            style={{
              paddingTop: `${rhythmUnit(2.5)}`,
              paddingBottom: `${rhythmUnit(1)}`,
              backgroundColor: '#F9F9F9'
            }}
          >
            <CaseStudy
              caseStudy={nextCaseStudy}
              layout="right"
              mobileTextFirst={true}
            />
          </div>
        ) : null}

        <Footer />
      </S.CaseStudyDetail>
    </>
  )
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
        fluid(maxWidth: 1100) {
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
      designSystemCarousel {
        images {
          fluid(maxWidth: 1400) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
      resultOne {
        raw
      }
      resultTwo {
        raw
      }
      resultThree {
        raw
      }
      featuredTestimonial {
        company
        name
        role
        testimonial {
          testimonial
        }
        featuredHeadshot {
          fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
        headshot {
          fixed(cropFocus: FACE, height: 50, width: 50) {
            ...GatsbyContentfulFixed_withWebp
          }
        }
      }
      projectOverview {
        raw
        references {
          contentful_id
          ... on ContentfulAsset {
            id
            fluid(maxWidth: 1100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          ... on ContentfulCarousel {
            images {
              fluid(maxWidth: 1100) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
      projectChallenge {
        raw
        references {
          contentful_id
          ... on ContentfulAsset {
            id
            fluid(maxWidth: 1100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          ... on ContentfulCarousel {
            images {
              fluid(maxWidth: 1100) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
      projectSolution {
        raw
        references {
          contentful_id
          ... on ContentfulAsset {
            id
            fluid(maxWidth: 1100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          ... on ContentfulCarousel {
            images {
              fluid(maxWidth: 1100) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
      projectOutcome {
        raw
        references {
          contentful_id
          ... on ContentfulAsset {
            id
            fluid(maxWidth: 1100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          ... on ContentfulCarousel {
            images {
              fluid(maxWidth: 1100) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
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
          fluid(maxWidth: 625) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`
export default CaseStudyDetail
