// Packages
import React from 'react'
import { graphql, PageProps } from 'gatsby'
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
import TestimonialGrid from '@components/TestimonialGrid'
import Footer from '@components/Footer'
import CaseStudy from '@modules/common/components/CaseStudy'

// Styles
import '../common/styles/pages/home.css'

export interface HomePageQueryResponse {
  contentfulHomePage: {
    caseStudies: TypeCaseStudy[]
    testimonials: TypeTestimonial[]
  }
}

interface Props {
  data: HomePageQueryResponse
  location: PageProps['location']
}

const CaseStudiesContainer = styled.div`
  padding-top: ${() => rhythmUnit(5)};
  @media (min-width: 768px) {
    padding-top: ${() => rhythmUnit(6)};
  }
`

const IndexPage = ({ data, location }: Props) => {
  const homeData = data.contentfulHomePage

  return (
    <div className="Home">
      <Meta location={location} title="Home" />
      <h1 className="text-h1">
        Supercharge your business with results-driven strategy & design.
      </h1>
      <h2 className="text-title-subheading">
        We ideate, design, and optimize winning digital products for
        fast-growing Fintech and B2B SaaS startups.
      </h2>
      <div className="Home-learn-how">
        <MotionAniLink
          bgColor="#286AFF"
          className="inline-block"
          direction="top"
          duration={1.25}
          styleType="solid"
          to="/what-we-do"
        >
          What we do
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

      <section className="bg-snow">
        <SiteMaxWidthContainer className="pt-20 pb-24">
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
