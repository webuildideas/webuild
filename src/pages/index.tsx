// Packages
import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'

// Common
import { TypeCaseStudy } from '@common/types/CaseStudy'
import { TypeTestimonial } from '@common/types/Testimonial'

// Components
import TestimonialSlider from '@modules/common/components/TestimonialSlider'
import Meta from '@components/Meta'
import MotionAniLink from '@modules/common/components/MotionAniLink'
import Footer from '@components/Footer'

// Styles
import '../common/styles/pages/home.css'

export interface HomePageQueryResponse {
  contentfulHomePage: {
    caseStudies: TypeCaseStudy[]
    testimonials: TypeTestimonial[]
  }
  file: {
    childImageSharp: {
      fluid: any
    }
  }
}

interface Props {
  data: HomePageQueryResponse
  location: PageProps['location']
}

const IndexPage = ({ data, location }: Props) => {
  const homeData = data.contentfulHomePage
  const howWeWorkImage = data.file.childImageSharp.fluid

  return (
    <div className="Home">
      <Meta location={location} title="Home" />
      <div className="Home-hero">
        <div className="Home-hero-text">
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
        </div>
      </div>

      <div className="Home-testimonials">
        <TestimonialSlider testimonials={homeData.testimonials} />
      </div>

      <div className="Home-work">
        <div className="Home-work-img">
          <Img fluid={howWeWorkImage} />
        </div>
        <div className="Home-work-content">
          <h2 className="Home-work-title text-h2 font-extrabold">
            How we work
          </h2>
          <p className="Home-work-copy text-body">
            From the infancy of your product to its series B round, we’re ready
            to seamlessly get to work designing the best product for your
            company — and everything that comes along with it. When we put our
            heads together, good gets better.
          </p>
          <MotionAniLink
            bgColor="#286AFF"
            className="inline-block"
            direction="top"
            duration={1.25}
            styleType="solid"
            to="/what-we-do"
          >
            Learn More
          </MotionAniLink>
        </div>
      </div>
      <hr className="Home-work-border" />

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
        quoteShort {
          raw
        }
        mainHeadshot {
          fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        headshot {
          fixed(cropFocus: FACE, height: 150, width: 150) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
        }
        purpleHeadshot {
          fixed(cropFocus: FACE, height: 150, width: 150) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
        }
      }
    }
    file(
      relativePath: { eq: "home/how-we-work.png" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default IndexPage
