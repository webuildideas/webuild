// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Styled Components
import SiteMaxWidthContainer from '../components/Shared/SiteMaxWidthContainer'

// Components
import PageIntro from '../components/PageIntro'
import Contact from '../components/Contact'
import Meta from '../components/Meta'
import Footer from '../components/Footer'

const CaseStudies = ({ data }) => (
  <>
    <Meta title="Case Studies" />
    <SiteMaxWidthContainer>
      <PageIntro
        heading="We help our partners solve <br> ambitious design challenges"
        blurb="We partner with inspiring entrepreneurs and values-driven companies to design and create world-class digital products, tools and experiences."
      />
      {data.allContentfulCaseStudy.edges.map(edge => (
        <p>{edge.node.title}</p>
      ))}
      <Contact />
    </SiteMaxWidthContainer>
    <Footer />
  </>
)

CaseStudies.propTypes = {
  data: PropTypes.object.isRequired,
}

export const CASE_STUDIES_LISTING_QUERY = graphql`
  query caseStudiesListingQuery {
    allContentfulCaseStudy(sort: { order: ASC, fields: createdAt }) {
      edges {
        node {
          tagline
          title
          listingImage {
            fluid {
              srcSet
              src
              sizes
            }
          }
        }
      }
    }
  }
`

export default CaseStudies
