// Packages
import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { Document } from '@contentful/rich-text-types'

// Commons
import { rhythmUnit } from '../common/utils/typography'
import SiteMaxWidthContainer from '../common/styledComponents/SiteMaxWidthContainer'
import SectionHeading from '../common/styledComponents/SectionHeading'
import { CaseStudy } from '../common/types/CaseStudy'
import { FeaturedTestimonial, Testimonials } from '../common/types/Testimonial'

// Components
import Meta from '../components/Meta'
import CaseStudyListing from '../components/CaseStudyListing'
import PageIntro from '../components/PageIntro'
import DesignPartner from '../components/DesignPartner'
import Testimonial from '../components/Testimonial'
import TestimonialGrid from '../components/TestimonialGrid'
import Footer from '../components/Footer'

export interface HomePageQueryResponse {
  contentfulHomePage: {
    heroTitle: Document
    caseStudies: CaseStudy[]
    featuredTestimonial: FeaturedTestimonial
    testimonials: Testimonials
  }
}

interface Props {
  data: HomePageQueryResponse
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

const IndexPage = ({ data }: Props) => {
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
      <Meta title="Home" />
      <PageIntro document={homeData.heroTitle} maxWidth={1040} />
      <CaseStudiesContainer>
        <CaseStudyListing caseStudies={homeData.caseStudies} />
      </CaseStudiesContainer>

      <DesignPartner />

      <section style={{ backgroundColor: '#F9F9F9' }}>
        <SiteMaxWidthContainer
          style={{
            paddingTop: `${rhythmUnit(3.5)}`,
            paddingBottom: `${rhythmUnit(4)}`
          }}
        >
          <SectionHeading
            ref={ref}
            style={{ marginBottom: `${rhythmUnit(2.75)}` }}
          >
            <motion.h1
              animate={animationControls}
              className="SectionHeading__title"
              custom={0}
              initial="hidden"
              variants={variants}
            >
              Our Partners Love Us
            </motion.h1>
            <motion.h2
              animate={animationControls}
              className="SectionHeading__subtitle"
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
          </SectionHeading>

          <Testimonial
            company={homeData.featuredTestimonial.company}
            companyRole={homeData.featuredTestimonial.role}
            featuredHeadshot={
              homeData.featuredTestimonial.featuredHeadshot.fluid
            }
            headshot={homeData.featuredTestimonial.headshot.fixed}
            isFeatured={true}
            name={homeData.featuredTestimonial.name}
            style={{ marginBottom: `${rhythmUnit(1)}` }}
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
