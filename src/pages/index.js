// Packages
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../utils/typography'

// Styled Components
import SiteMaxWidthContainer from '../components/Shared/SiteMaxWidthContainer'
import SectionHeading from '../components/Shared/SectionHeading'

// Components
import Meta from '../components/Meta'
import CaseStudyListing from '../components/CaseStudyListing'
import PageIntro from '../components/PageIntro'
import DesignPartner from '../components/DesignPartner'
import Testimonial from '../components/Testimonial'
import TestimonialGrid from '../components/TestimonialGrid'
import Footer from '../components/Footer'

const CaseStudiesContainer = styled.div`
  padding-top: ${() => rhythmUnit(5.5)};
  @media (min-width: 768px) {
    padding-top: ${() => rhythmUnit(8.5)};
  }
`

const MobileBreak = styled.span`
  display: inline;
  @media (min-width: 768px) {
    display: block;
  }
`

const IndexPage = ({ data }) => {
  const homeData = data.contentfulHomePage
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  })

  const controls = useAnimation()

  const variants = {
    visible: i => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.65,
        delay: i * 0.3,
      },
    }),
    hidden: {
      y: 25,
      opacity: 0,
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <Meta title="Home" />
      <PageIntro animationDelay={0.35} maxWidth={1040}>
        {homeData.heroCopy.heroCopy}
      </PageIntro>
      <CaseStudiesContainer>
        <CaseStudyListing caseStudies={homeData.caseStudies} />
      </CaseStudiesContainer>

      <DesignPartner />

      <section style={{ backgroundColor: '#F9F9F9' }}>
        <SiteMaxWidthContainer
          style={{
            paddingTop: `${rhythmUnit(3.5)}`,
            paddingBottom: `${rhythmUnit(4)}`,
          }}
        >
          <SectionHeading
            ref={ref}
            style={{ marginBottom: `${rhythmUnit(2.75)}` }}
          >
            <motion.h1
              animate={controls}
              className="SectionHeading__title"
              custom={0}
              initial="hidden"
              variants={variants}
            >
              Our Partners Love Us
            </motion.h1>
            <motion.h2
              animate={controls}
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
              homeData.featuredTestimonial.featuredHeadshot.fluid.src
            }
            headshot={homeData.featuredTestimonial.headshot.fixed.src}
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
    </motion.div>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const HOMEPAGE_QUERY = graphql`
  query homepageQuery {
    contentfulHomePage(pageTitle: { eq: "Home" }) {
      heroCopy {
        heroCopy
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
          fluid {
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

      testimonials {
        company
        name
        role
        testimonial {
          testimonial
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

export default IndexPage
