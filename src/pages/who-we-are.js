// Packages
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
// Utils
import { rhythmUnit } from '../utils/typography'

// Components
import Meta from '../components/Meta'
import PageIntro from '../components/PageIntro'
import TeamMap from '../components/TeamMap'
import BioCard from '../components/BioCard'
import JoinUs from '../components/JoinUs'
import PhotoGrid from '../components/PhotoGrid'
import TestimonialSlider from '../components/TestimonialSlider'
import Footer from '../components/Footer'

const PhotoGridContainer = styled.div`
  padding-top: ${() => rhythmUnit(5)};
  @media (min-width: 768px) {
    padding-top: ${() => rhythmUnit(7)};
  }
`

const WhoWeAre = ({ data }) => {
  const aboutPageData = data.contentfulAboutPage
  const { nodes: testimonialData } = data.allContentfulTestimonial

  const [ref, inView] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  })

  const controls = useAnimation()

  const variants = {
    visible: i => ({
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        delay: i * 0.252,
      },
    }),
    headingHidden: {
      y: -25,
      opacity: 0,
    },
    textHidden: {
      x: -25,
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
      <Meta title="Who We Are" />

      <PageIntro maxWidth={860}>{aboutPageData.heroCopy.heroCopy}</PageIntro>

      <PhotoGridContainer>
        <PhotoGrid photos={aboutPageData.photoGrid} />
      </PhotoGridContainer>

      <TeamMap />

      <div
        style={{
          marginBottom: `${rhythmUnit(3)}`,
        }}
      >
        <TestimonialSlider testimonials={testimonialData} />
      </div>

      <div
        ref={ref}
        style={{
          backgroundColor: '#F9F9F9',
          padding: `${rhythmUnit(3)} 0`,
        }}
      >
        <BioCard>
          <motion.h2
            animate={controls}
            custom={0}
            initial="headingHidden"
            variants={variants}
          >
            We've Been There, Too.
          </motion.h2>
          <motion.p
            animate={controls}
            custom={1}
            initial="textHidden"
            variants={variants}
          >
            Meet our founder, Evan Shoemaker. He has bootstrapped and co-founded
            multiple companies, all while traveling to 35 countries across 4
            continents.
          </motion.p>
          <motion.p
            animate={controls}
            custom={2}
            initial="textHidden"
            variants={variants}
          >
            Given his experience co-founding and growing startups, Evan has
            intimate experience with building products that get results, and
            he’s committed to helping other founders do the same.
          </motion.p>
          <motion.p
            animate={controls}
            custom={3}
            initial="textHidden"
            variants={variants}
          >
            You can find him and connect on{' '}
            <a
              href="https://www.linkedin.com/in/evanshoemaker/"
              rel="noopener noreferrer"
              style={{ fontWeight: 700 }}
              target="_blank"
            >
              LinkedIn
            </a>
          </motion.p>
        </BioCard>
      </div>

      <div
        style={{
          padding: `${rhythmUnit(3)} 0`,
        }}
      >
        <JoinUs />
      </div>
      <Footer />
    </motion.div>
  )
}

WhoWeAre.propTypes = {
  data: PropTypes.object.isRequired,
}

export const WHO_WE_ARE_QUERY = graphql`
  query whoWeAreQuery {
    contentfulAboutPage(pageTitle: { eq: "Who We Are" }) {
      heroCopy {
        heroCopy
      }
      photoGrid {
        fluid {
          srcSet
          src
        }
      }
    }
    allContentfulTestimonial(
      filter: { type: { eq: "Team Member" } }
      limit: 4
      sort: { fields: createdAt, order: ASC }
    ) {
      nodes {
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

export default WhoWeAre
