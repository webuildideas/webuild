// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// Styled Components
import SiteMaxWidthContainer from '../components/Shared/SiteMaxWidthContainer'

// Components
import PageIntro from '../components/PageIntro'
import CaseStudyListing from '../components/CaseStudyListing'
import Meta from '../components/Meta'
import Footer from '../components/Footer'

const CaseStudies = ({ data }) => {
  console.log(data)
  return (
    <>
      <Meta title="Case Studies" />
      <PageIntro maxWidth={1000}>
        {data.contentfulCaseStudies.heroCopy.heroCopy}
      </PageIntro>
      <SiteMaxWidthContainer>
        <CaseStudyListing caseStudies={data.allContentfulCaseStudy.edges} />
      </SiteMaxWidthContainer>
      <Footer />
    </>
  )
}

CaseStudies.propTypes = {
  data: PropTypes.object.isRequired,
}

export const CASE_STUDIES_LISTING_QUERY = graphql`
  query caseStudiesListingQuery {
    contentfulCaseStudies(pageTitle: { eq: "Case Studies" }) {
      heroCopy {
        heroCopy
      }
    }
    allContentfulCaseStudy(sort: { order: ASC, fields: createdAt }) {
      edges {
        node {
          slug
          name
          tagline
          logo {
            file {
              url
            }
          }
          successSummary {
            successSummary
          }
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
