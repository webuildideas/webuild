// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Styled Components
import MaxWidthContainer from '../components/Shared/MaxWidthContainer'
import GradientBackground from '../components/Shared/GradientBackground'

// Components
import Page from '../components/Page'
import Meta from '../components/Meta'
import PageIntro from '../components/PageIntro'
import TestimonialListing from '../components/TestimonialListing'
import StyledButton from '../components/Button'

const IndexPage = ({ data }) => (
  <Page>
    <Meta title="Home" />
    <PageIntro
      heading="Scaling startups <br />through user-driven design"
      blurb="We’re a digital product design studio. We partner with inspiring entrepreneurs and growth-minded startups to achieve ambitious business goals through design."
    />
    <GradientBackground gradient="linear-gradient(161.81deg, #F5F5FF -26.24%, rgba(250, 250, 251, 0) 85.41%);">
      <MaxWidthContainer padding="5.625rem 0">
        <h5>Why our partners love us</h5>
        <TestimonialListing
          testimonials={data.allContentfulTestimonial.edges}
        />
        <StyledButton to="/testimonials">See More Kind Words </StyledButton>
      </MaxWidthContainer>
    </GradientBackground>
  </Page>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const SAMPLE_TESTIMONIAL_QUERY = graphql`
  query SampleTestimonialQuery {
    allContentfulTestimonial(
      limit: 4
      sort: { order: ASC, fields: createdAt }
    ) {
      edges {
        node {
          company
          name
          role
          testimonial {
            testimonial
          }
          headshot {
            fixed(cropFocus: FACE, height: 100, width: 100) {
              src
              srcSet
            }
          }
        }
      }
    }
  }
`

export default IndexPage
