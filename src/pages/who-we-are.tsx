// Packages
import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-gtag'

// Common
import { rhythmUnit } from '@common/utils/typography'
import { TypeGatsbyImageFluid } from '@common/types/GatsbyImage'
import { TypeTestimonial } from '@common/types/Testimonial'
import { TypeJob } from '@common/types/Job'

// Components
import Meta from '@components/Meta'
import PagerHeroText from '@modules/common/components/PageHeroText'
import TeamMap from '@components/TeamMap'
import BioCard from '@components/BioCard'
import JoinUs from '@components/JoinUs'
import PhotoGrid from '@components/PhotoGrid'
import TestimonialSlider from '@components/TestimonialSlider'
import Footer from '@components/Footer'
import { RenderRichTextData } from 'gatsby-source-contentful/rich-text'

interface WhoWeAreQueryResponse {
  contentfulAboutPage: {
    heroTitle: RenderRichTextData<never>
    photoGrid: TypeGatsbyImageFluid[]
  }
  allContentfulJob: {
    nodes: TypeJob[]
  }
  allContentfulTestimonial: {
    nodes: TypeTestimonial[]
  }
}

interface Props {
  data: WhoWeAreQueryResponse
  location: {
    href: string
  }
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

const WhoWeAre = ({ data, location }: Props) => {
  const aboutPageData = data.contentfulAboutPage
  const animationControls = useAnimation()
  const { nodes: testimonialData } = data.allContentfulTestimonial
  const { nodes: jobs } = data.allContentfulJob
  const [ref, inView] = useInView({
    threshold: 0.7,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      animationControls.start('visible')
    }
  }, [animationControls, inView])

  const initial = { opacity: 0 }
  const animateTo = { opacity: 1 }

  return (
    <motion.div animate={animateTo} initial={initial}>
      <Meta location={location.href} title="Who We Are" />

      <PagerHeroText document={aboutPageData.heroTitle} maxWidth={860} />
      <PhotoGridContainer>
        <PhotoGrid photos={aboutPageData.photoGrid} />
      </PhotoGridContainer>

      <TeamMap />

      <div className="mb-20">
        <TestimonialSlider testimonials={testimonialData} />
      </div>

      <div ref={ref} className="py-20 bg-snow">
        <BioCard>
          <motion.h2
            animate={animationControls}
            className="text-h4"
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
              className="font-bold"
              href="https://www.linkedin.com/in/evanshoemaker/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </OutboundLink>
          </motion.p>
        </BioCard>
      </div>

      <div className="py-20">
        <JoinUs jobs={jobs} />
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
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
    allContentfulJob(filter: { isOpen: { eq: true } }) {
      nodes {
        isOpen
        location
        title
        applicationLink
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
