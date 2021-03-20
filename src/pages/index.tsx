// Packages
import React, { useEffect } from 'react'
import { RenderRichTextData } from 'gatsby-source-contentful/rich-text'
import { graphql } from 'gatsby'
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
import CaseStudyListing from '@components/CaseStudyListing'
import PageHeroText from '@modules/common/components/PageHeroText'
import DesignPartner from '@components/DesignPartner'
import Testimonial from '@components/Testimonial'
import TestimonialGrid from '@components/TestimonialGrid'
import Footer from '@components/Footer'

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
  location: {
    href: string
  }
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
    <div>
      <Meta location={location.href} title="Home" />
      <PageHeroText document={homeData.heroTitle} maxWidth={1040} />
      <CaseStudiesContainer>
        <CaseStudyListing caseStudies={homeData.caseStudies} />
      </CaseStudiesContainer>

      <DesignPartner />

      <section className="bg-snow">
        <SiteMaxWidthContainer className="pt-20 pb-24">
          <div ref={ref} className="mb-16">
            <motion.h1
              animate={animationControls}
              className="text-h4 font-bold mb-4"
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
            className="mb-6"
            company={homeData.featuredTestimonial.company}
            companyRole={homeData.featuredTestimonial.role}
            featuredHeadshot={
              homeData.featuredTestimonial?.featuredHeadshot?.fluid
            }
            headshot={homeData.featuredTestimonial.headshot.fixed}
            isFeatured={true}
            name={homeData.featuredTestimonial.name}
          >
            {homeData.featuredTestimonial.testimonial.testimonial}
          </Testimonial>

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

      testimonials {
        company
        name
        role
        testimonial {
          testimonial
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
