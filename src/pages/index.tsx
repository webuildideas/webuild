// Packages
import React, { useEffect } from 'react'
import { RenderRichTextData } from 'gatsby-source-contentful/rich-text'
import { graphql, PageProps } from 'gatsby'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

// Common
import { rhythmUnit } from '@common/utils/typography'
import SiteMaxWidthContainer from '@common/styledComponents/SiteMaxWidthContainer'
import { TypeCaseStudy } from '@common/types/CaseStudy'
import { TypeTestimonial } from '@common/types/Testimonial'
import '@common/styles/SectionHeading.css'

// Components
import Meta from '@components/Meta'
import MotionAniLink from '@modules/common/components/MotionAniLink'
import PageHeroText from '@modules/common/components/PageHeroText'
import DesignPartner from '@modules/home/components/DesignPartner'
import Testimonial from '@modules/common/components/Testimonial'
import TestimonialGrid from '@components/TestimonialGrid'
import Footer from '@components/Footer'
import CaseStudy from '@modules/common/components/CaseStudy'

// Styles
import '../common/styles/pages/home.css'

export interface HomePageQueryResponse {
  contentfulHomePage: {
    heroTitle: RenderRichTextData<never>
    caseStudies: TypeCaseStudy[]
    featuredTestimonial: TypeTestimonial
    testimonials: TypeTestimonial[]
  }
}

interface Props {
  data: HomePageQueryResponse
  location: PageProps['location']
}

const variants: Variants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.65,
      delay: i * 0.3
    }
  }),
  hidden: {
    y: 25,
    opacity: 0
  }
}

const CaseStudiesContainer = styled.div`
  padding-top: ${() => rhythmUnit(5)};
  @media (min-width: 768px) {
    padding-top: ${() => rhythmUnit(6)};
  }
`

const MobileBreak = styled.span`
  display: inline;
  @media (min-width: 768px) {
    display: block;
  }
`

const IndexPage = ({ data, location }: Props) => {
  const homeData = data.contentfulHomePage
  const animationControls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      animationControls.start('visible')
    }
  }, [animationControls, inView])

  return (
    <div className="Home">
      <Meta location={location} title="Home" />
      <PageHeroText document={homeData.heroTitle} />
      <div className="Home-learn-how">
        <MotionAniLink
          bgColor="#286AFF"
          className="inline-block"
          direction="top"
          duration={1.25}
          styleType="solid"
          to="/what-we-do"
        >
          Learn How
        </MotionAniLink>
      </div>
      <CaseStudiesContainer>
        <div className="overflow-hidden">
          {homeData.caseStudies.map((study: TypeCaseStudy, idx: number) => {
            const animationThreshold = idx === 0 ? 0.25 : 0.8
            // Even # items we want image on right.
            const layout = (idx + 1) % 2 === 0 ? 'left' : 'right'
            return (
              <CaseStudy
                key={study.slug}
                animationThreshold={animationThreshold}
                caseStudy={study}
                layout={layout}
              />
            )
          })}
        </div>
      </CaseStudiesContainer>

      <DesignPartner />

      <section className="bg-snow">
        <SiteMaxWidthContainer className="pt-20 pb-24">
          <div ref={ref} className="mb-16">
            <motion.h1
              animate={animationControls}
              className="text-h4 mb-6"
              custom={0}
              initial="hidden"
              variants={variants}
            >
              Our Partners Love Us
            </motion.h1>
            <motion.h2
              animate={animationControls}
              className="text-h3"
              custom={1}
              initial="hidden"
              variants={variants}
            >
              When smart collaboration and remarkable
              <MobileBreak>
                {' '}
                expertise come together, magic happens.
              </MobileBreak>
            </motion.h2>
          </div>

          <Testimonial
            className="mb-8"
            isFeatured={true}
            testimonial={homeData.featuredTestimonial}
          />

          <TestimonialGrid testimonials={homeData.testimonials} />
        </SiteMaxWidthContainer>
      </section>

      <Footer />
    </div>
  )
}

export const HOMEPAGE_QUERY = graphql`
  query homepageQuery {
    contentfulHomePage(pageTitle: { eq: "Home" }) {
      heroTitle {
        raw
      }
      caseStudies {
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

      featuredTestimonial {
        company
        name
        role
        quote {
          raw
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

      testimonials {
        company
        name
        role
        quote {
          raw
        }
        headshot {
          fixed(cropFocus: FACE, height: 50, width: 50) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
        }
      }
    }
  }
`

export default IndexPage
