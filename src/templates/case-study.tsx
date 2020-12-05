// Packages
import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { useInView } from 'react-intersection-observer'

// Commons
import { TypeCaseStudy } from '../common/types/CaseStudy'
import * as S from '../components/CaseStudyDetail/style'
import SiteMaxWidthContainer from '../common/styledComponents/SiteMaxWidthContainer'

// Components
import Hero from '../components/CaseStudyDetail/Hero'
import Carousel from '../components/CaseStudyDetail/Carousel'
import Result from '../components/CaseStudyDetail/Result'
import RichText from '../components/CaseStudyDetail/RichText'
import ChallengeAndSolution from '../components/CaseStudyDetail/ChallengeAndSolution'
import FeaturedTestimonial from '../components/CaseStudyDetail/FeaturedTestimonial'
import CaseStudy from '../components/CaseStudy'
import Footer from '../components/Footer'
import Meta from '../components/Meta'

interface Props {
  data: {
    contentfulCaseStudy: TypeCaseStudy
  }
  location: {
    href: string
  }
}

const CaseStudyDetail = ({
  data: { contentfulCaseStudy: caseStudy },
  location
}: Props) => {
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
  } = caseStudy

  useEffect(() => {
    if (inView) {
      setAutoPlay(true)
    }
  }, [inView])

  const metaBodyAtributes = {
    class: 'CaseStudyDetail'
  }
  return (
    <>
      <Meta
        bodyAttributes={metaBodyAtributes}
        location={location.href}
        title={name}
      />
      <S.CaseStudyDetail className={slug}>
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

          <div className="py-20">
            <SiteMaxWidthContainer maxWidth={1400}>
              {designSystemCarousel && (
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
          <div className="bg-snow pt-16 pb-6">
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
          fluid(maxWidth: 1400) {
            ...GatsbyContentfulFluid_withWebp_noBase64
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
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        headshot {
          fixed(cropFocus: FACE, height: 50, width: 50) {
            ...GatsbyContentfulFixed_withWebp_noBase64
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
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          ... on ContentfulCarousel {
            images {
              fluid(maxWidth: 1100) {
                ...GatsbyContentfulFluid_withWebp_noBase64
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
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          ... on ContentfulCarousel {
            images {
              fluid(maxWidth: 1100) {
                ...GatsbyContentfulFluid_withWebp_noBase64
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
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          ... on ContentfulCarousel {
            images {
              fluid(maxWidth: 1100) {
                ...GatsbyContentfulFluid_withWebp_noBase64
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
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          ... on ContentfulCarousel {
            images {
              fluid(maxWidth: 1100) {
                ...GatsbyContentfulFluid_withWebp_noBase64
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
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`
export default CaseStudyDetail
