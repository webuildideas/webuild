// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Styled Components
import SiteMaxWidthContainer from '../components/Shared/SiteMaxWidthContainer'

// Components
import PageIntro from '../components/PageIntro'
import CaseStudyGrid from '../components/CaseStudyGrid'
import Contact from '../components/Contact'
import Meta from '../components/Meta'
import Footer from '../components/Footer'

const CaseStudies = ({ data }) => (
  <>
    <Meta title="Case Studies" />
    <SiteMaxWidthContainer>
      <PageIntro>
        <span>
          We help our partners solve ambitious challenges through design.
        </span>{' '}
        We partner with inspiring entrepreneurs and growth-stage companies to
        create digital products and experiences.
      </PageIntro>
      <CaseStudyGrid caseStudies={data.allContentfulCaseStudy.edges} />
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
          slug
          name
          tagline
          listingImage {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default CaseStudies
