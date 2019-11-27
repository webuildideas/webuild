// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Utils
import { rhythmUnit } from '../utils/typography'

// Styled Components
import GradientBackground from '../components/Shared/GradientBackground'
import SiteMaxWidthContainer from '../components/Shared/SiteMaxWidthContainer'

// Components
import Meta from '../components/Meta'
import PageIntro from '../components/PageIntro'
import TestimonialGrid from '../components/TestimonialGrid'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Testimonials = ({ data }) => (
  <>
    <Meta title="Testimonials" />
    <PageIntro
      heading="Why our partners love us"
      blurb="Collaboration, commitment, and design that delivers results<br/> keeps our partners raving about us."
    />
    <GradientBackground gradient="linear-gradient(161.81deg, #F5F5FF -26.24%, rgba(250, 250, 251, 0) 85.41%);">
      <SiteMaxWidthContainer padding={`${rhythmUnit(3)} 0 0`}>
        <TestimonialGrid testimonials={data.allContentfulTestimonial.edges} />
        <Contact />
      </SiteMaxWidthContainer>
    </GradientBackground>
    <Footer />
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
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  }
`

export default Testimonials
