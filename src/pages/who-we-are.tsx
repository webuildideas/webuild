// Packages
import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { motion } from 'framer-motion'
import styled from 'styled-components'

// Common
import { rhythmUnit } from '@common/utils/typography'
import { TypeGatsbyImageFluid } from '@common/types/GatsbyImage'
import { TypeTestimonial } from '@common/types/Testimonial'
import { TypeJob } from '@common/types/Job'
import fadeInUpVariants from '@modules/common/animation/variants/fadeInUp'

// Components
import Meta from '@components/Meta'
import PhotoGrid from '@components/PhotoGrid'
import Footer from '@components/Footer'

// Styles
import '@common/styles/pages/who-we-are.css'

interface WhoWeAreQueryResponse {
  contentfulAboutPage: {
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
  location: PageProps['location']
}

const PhotoGridContainer = styled.div`
  padding-top: ${() => rhythmUnit(5)};
  @media (min-width: 768px) {
    padding-top: ${() => rhythmUnit(7)};
  }
`

const WhoWeAre = ({ data, location }: Props) => {
  const aboutPageData = data.contentfulAboutPage

  const initial = { opacity: 0 }
  const animateTo = { opacity: 1 }

  return (
    <>
      <Meta location={location} title="Who We Are" />
      <motion.main animate={animateTo} className="WhoWeAre" initial={initial}>
        <div className="WhoWeAre-intro">
          <motion.h1
            animate="visible"
            className="text-h1 font-black WhoWeAre-title"
            initial="hidden"
            variants={fadeInUpVariants}
          >
            We’re webuild—the design agency that seamlessly becomes a part of
            your team.
          </motion.h1>
          <div>
            <motion.p
              animate="visible"
              className="WhoWeAre-copy text-h3"
              initial="hidden"
              variants={fadeInUpVariants}
            >
              We're a global team of makers and thinkers. We love what we do. We
              nurture growth and champion possibility.
            </motion.p>

            <motion.p
              animate="visible"
              className="WhoWeAre-copy text-h3"
              initial="hidden"
              variants={fadeInUpVariants}
            >
              Driven, but laid back. Confident, but humble. Talented, but not
              pretentious. We’re a friendly group of designers, strategists, and
              product managers. And we are all passionate about product design.
              And tacos. (Extra guac!)
            </motion.p>

            <motion.p
              animate="visible"
              className="WhoWeAre-copy text-h3"
              initial="hidden"
              variants={fadeInUpVariants}
            >
              We’ve worked remotely since before it was cool — and it’s never
              stifled our team spirit. We embrace and celebrate diversity and
              enjoy learning about each other's cultures.
            </motion.p>

            <motion.p
              animate="visible"
              className="WhoWeAre-copy text-h3"
              initial="hidden"
              variants={fadeInUpVariants}
            >
              And while we love what we do at work, we love our lives away from
              the computer, too. We’re all about that work/life balance.
            </motion.p>
          </div>
        </div>

        <PhotoGridContainer>
          <PhotoGrid photos={aboutPageData.photoGrid} />
        </PhotoGridContainer>

        <Footer />
      </motion.main>
    </>
  )
}

export const WHO_WE_ARE_QUERY = graphql`
  query whoWeAreQuery {
    contentfulAboutPage(pageTitle: { eq: "Who We Are" }) {
      photoGrid {
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default WhoWeAre
