// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

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

const WhoWeAre = ({ data }) => {
  const aboutPageData = data.contentfulAboutPage
  const { nodes: testimonialData } = data.allContentfulTestimonial
  console.log(testimonialData)
  return (
    <>
      <Meta title="Who We Are" />

      <PageIntro maxWidth={860}>{aboutPageData.heroCopy.heroCopy}</PageIntro>

      <div
        style={{
          marginTop: `${rhythmUnit(7)}`,
          marginBottom: `${rhythmUnit(3)}`,
        }}
      >
        <PhotoGrid photos={aboutPageData.photoGrid} />
      </div>

      <TeamMap />

      <div
        style={{
          marginBottom: `${rhythmUnit(3)}`,
        }}
      >
        <TestimonialSlider testimonials={testimonialData} />
      </div>

      <div
        style={{
          backgroundColor: '#F9F9F9',
          padding: `${rhythmUnit(3)} 0`,
        }}
      >
        <BioCard>
          <h2>We've Been There, Too.</h2>
          <p>
            Meet our founder, Evan Shoemaker. He has bootstrapped and co-founded
            multiple companies, all while traveling to 35 countries across 4
            continents.
          </p>
          <p>
            Given his experience co-founding and growing startups, Evan has
            intimate experience with building products that get results, and
            he’s committed to helping other founders do the same.
          </p>
          <p>
            You can find him and connect on{' '}
            <a
              href="https://www.linkedin.com/in/evanshoemaker/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
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
    </>
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
