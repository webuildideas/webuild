// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../utils/typography'

// Styled Components
import SiteMaxWidthContainer from '../components/Shared/SiteMaxWidthContainer'
import GradientBackground from '../components/Shared/GradientBackground'

// Components
import Meta from '../components/Meta'
import PageIntro from '../components/PageIntro'
import TestimonialGrid from '../components/TestimonialGrid'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const SectionHeading = styled.h5`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: ${() => rhythmUnit(1.5)};
`

const IndexPage = ({ data }) => (
  <>
    <Meta title="Home" />
    <PageIntro>
      <span>Supercharge your product with results-driven design.</span> We help
      you iterate and optimize without breaking stride to increase retention and
      attract new users.
    </PageIntro>

    <GradientBackground gradient="linear-gradient(161.81deg, #F5F5FF -26.24%, rgba(250, 250, 251, 0) 85.41%);">
      <SiteMaxWidthContainer padding={`${rhythmUnit(3.5)} 0 0`}>
        <SectionHeading>Our Partners Love Us</SectionHeading>
        <TestimonialGrid
          testimonials={data.allContentfulHomePage.edges[0].node.testimonials}
        />
      </SiteMaxWidthContainer>
    </GradientBackground>

    <Contact />
    <Footer />
  </>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const HOMEPAGE_QUERY = graphql`
  query homepageQuery {
    allContentfulHomePage(filter: { pageTitle: { eq: "Home" } }) {
      edges {
        node {
          caseStudies {
            slug
            name
            tagline
            listingImage {
              fluid {
                ...GatsbyContentfulFluid_withWebp
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
    }
  }
`

export default IndexPage
