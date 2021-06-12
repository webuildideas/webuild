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

// Components
import Meta from '@components/Meta'
import PhotoGrid from '@components/PhotoGrid'
import Footer from '@components/Footer'

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
    <motion.div animate={animateTo} initial={initial}>
      <Meta location={location} title="Who We Are" />

      <PhotoGridContainer>
        <PhotoGrid photos={aboutPageData.photoGrid} />
      </PhotoGridContainer>

      <Footer />
    </motion.div>
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
