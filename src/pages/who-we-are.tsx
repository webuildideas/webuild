// Packages
import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-gtag'
import { Document } from '@contentful/rich-text-types'

// Commons
import { rhythmUnit } from '../common/utils/typography'
import { GatsbyImageFluid } from '../common/types/GatsbyImage'
import { Testimonials } from '../common/types/Testimonial'

// Components
import Meta from '../components/Meta'
import PageIntro from '../components/PageIntro'
import TeamMap from '../components/TeamMap'
import BioCard from '../components/BioCard'
import JoinUs from '../components/JoinUs'
import PhotoGrid from '../components/PhotoGrid'
import TestimonialSlider from '../components/TestimonialSlider'
import Footer from '../components/Footer'

interface WhoWeAreQueryResponse {
  contentfulAboutPage: {
    heroTitle: Document
    photoGrid: GatsbyImageFluid[]
  }
  allContentfulTestimonial: {
    nodes: Testimonials
  }
}

interface Props {
  data: WhoWeAreQueryResponse
}

const PhotoGridContainer = styled.div`
  padding-top: ${() => rhythmUnit(5)};
  @media (min-width: 768px) {
    padding-top: ${() => rhythmUnit(7)};
  }
`
const variants: Variants = {
  visible: (i: number) => ({
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: i * 0.252
    }
  }),
  headingHidden: {
    y: -25,
    opacity: 0
  },
  textHidden: {
    x: -25,
    opacity: 0
  }
}

const WhoWeAre = ({ data }: Props) => {
  const aboutPageData = data.contentfulAboutPage
  const animationControls = useAnimation()
  const { nodes: testimonialData } = data.allContentfulTestimonial
  const [ref, inView] = useInView({
    threshold: 0.7,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      animationControls.start('visible')
    }
  }, [animationControls, inView])

  return (
    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <Meta title="Who We Are" />

      <PageIntro document={aboutPageData.heroTitle} maxWidth={860} />
      <PhotoGridContainer>
        <PhotoGrid photos={aboutPageData.photoGrid} />
      </PhotoGridContainer>

      <TeamMap />

      <div
        style={{
          marginBottom: `${rhythmUnit(3)}`
        }}
      >
        <TestimonialSlider testimonials={testimonialData} />
      </div>

      <div
        ref={ref}
        style={{
          backgroundColor: '#F9F9F9',
          padding: `${rhythmUnit(3)} 0`
        }}
      >
        <BioCard>
          <motion.h2
            animate={animationControls}
            custom={0}
            initial="headingHidden"
            variants={variants}
          >
            We've Been There, Too.
          </motion.h2>
          <motion.p
            animate={animationControls}
            custom={1}
            initial="textHidden"
            variants={variants}
          >
            Meet our founder, Evan Shoemaker. He has bootstrapped and co-founded
            multiple companies, all while traveling to 35 countries across 4
            continents.
          </motion.p>
          <motion.p
            animate={animationControls}
            custom={2}
            initial="textHidden"
            variants={variants}
          >
            Given his experience co-founding and growing startups, Evan has
            intimate experience with building products that get results, and
            he’s committed to helping other founders do the same.
          </motion.p>
          <motion.p
            animate={animationControls}
            custom={3}
            initial="textHidden"
            variants={variants}
          >
            You can find him and connect on{' '}
            <OutboundLink
              href="https://www.linkedin.com/in/evanshoemaker/"
              rel="noopener noreferrer"
              style={{ fontWeight: 700 }}
              target="_blank"
            >
              LinkedIn
            </OutboundLink>
          </motion.p>
        </BioCard>
      </div>

      <div
        style={{
          padding: `${rhythmUnit(3)} 0`
        }}
      >
        <JoinUs />
      </div>
      <Footer />
    </motion.div>
  )
}

export const WHO_WE_ARE_QUERY = graphql`
  query whoWeAreQuery {
    contentfulAboutPage(pageTitle: { eq: "Who We Are" }) {
      heroTitle {
        raw
      }
      photoGrid {
        fluid(maxWidth: 625) {
          ...GatsbyContentfulFluid_withWebp_noBase64
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
          fixed(cropFocus: FACE, height: 60, width: 60) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
        }
      }
    }
  }
`

export default WhoWeAre
