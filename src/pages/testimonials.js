// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Styled Components
import MaxWidthContainer from '../components/Shared/MaxWidthContainer'

// Components
import Page from '../components/Page'
import PageIntro from '../components/PageIntro'
import Testimonial from '../components/Testimonial'
import SEO from '../components/Seo'

const Testimonials = ({ data }) => (
  <Page>
    <MaxWidthContainer>
      <SEO title="Testimonials" />
      <PageIntro
        heading="Why our partners love us"
        blurb="Collaboration, commitment, and design that delivers results keeps our partners raving about us."
      />
      {data.allContentfulTestimonial.edges.map(edge => (
        <Testimonial
          key={edge.node.name}
          name={edge.node.name}
          headshotSrc={edge.node.headshot.fixed.src}
          headshotSrcSet={edge.node.headshot.fixed.srcset}
          companyRole={edge.node.role}
          company={edge.node.company}
          testimonial={edge.node.testimonial.testimonial}
        />
      ))}
    </MaxWidthContainer>
  </Page>
)

Testimonials.propTypes = {
  data: PropTypes.object.isRequired,
}

export const ALL_TESTIMONIAL_QUERY = graphql`
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
