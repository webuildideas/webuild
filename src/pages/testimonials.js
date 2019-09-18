// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Components
import Page from '../components/Page'
import PageIntro from '../components/PageIntro'
import Testimonial from '../components/Testimonial'
import SEO from '../components/Seo'

const Testimonials = ({ data }) => (
  <Page>
    <SEO title="Testimonials" />
    <PageIntro
      heading="Why our partners love us"
      blurb="Collaboration, commitment, and design that delivers results keeps our partners raving about us."
    />
    {data.allContentfulTestimonial.edges.map(edge => (
      <Testimonial
        key={edge.node.name}
        name={edge.node.name}
        headshotSrc={edge.node.headshot.fluid.src}
        headshotSrcSet={edge.node.headshot.fluid.srcset}
        companyRole={edge.node.role}
        company={edge.node.company}
        testimonial={edge.node.testimonial.testimonial}
      />
    ))}
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
            fluid {
              srcSet
              src
            }
          }
        }
      }
    }
  }
`

export default Testimonials
