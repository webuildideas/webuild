// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Styled Components
import GradientBackground from '../components/Shared/GradientBackground'
import SiteMaxWidthContainer from '../components/Shared/SiteMaxWidthContainer'

// Components
import Meta from '../components/Meta'
import PageIntro from '../components/PageIntro'
import TestimonialListing from '../components/TestimonialListing'

const Testimonials = ({ data }) => (
  <>
    <Meta title="Testimonials" />
    <PageIntro
      heading="Why our partners love us"
      blurb="Collaboration, commitment, and design that delivers results<br/> keeps our partners raving about us."
    />
    <GradientBackground gradient="linear-gradient(161.81deg, #F5F5FF -26.24%, rgba(250, 250, 251, 0) 85.41%);">
      <SiteMaxWidthContainer padding="5.625rem 0">
        <TestimonialListing
          testimonials={data.allContentfulTestimonial.edges}
        />
      </SiteMaxWidthContainer>
    </GradientBackground>
  </>
)

Testimonials.propTypes = {
  data: PropTypes.object.isRequired,
}

export const TESTIMONIAL_LISTING_PAGE_QUERY = graphql`
  query AllTestimonialQuery {
    allContentfulTestimonial(sort: { order: ASC, fields: createdAt }) {
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

export default Testimonials
