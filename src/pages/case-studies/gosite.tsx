// Packages
import React from 'react'
import { graphql, PageProps } from 'gatsby'

// Commons
import { TypeCaseStudy } from '@common/types/CaseStudy'
import { TypeService } from '@common/types/Service'

// Components
import GoSiteIntro from '@modules/case-studies/gosite/components/GoSiteIntro'
import GoSiteSummary from '@modules/case-studies/gosite/components/GoSiteSummary'
import GoSiteChallengeSolution from '@modules/case-studies/gosite/components/GoSiteChallengeSolution'
import RelatedCaseStudies from '@modules/case-studies/components/NextCaseStudies'
import Footer from '@components/Footer'
import OtherServices from '@modules/service/components/OtherServices'
import OpportunityForm from '@modules/forms/OpportunityForm'
import GoSiteDesignSystems from '@modules/case-studies/gosite/components/GoSiteDesignSystems'
import GoSiteConclusion from '@modules/case-studies/gosite/components/GoSiteConclusion'
import Meta from '@components/Meta'

// Styles
import '@common/styles/pages/gosite.css'

interface GoSiteQueryResponse {
  contentfulCaseStudy: TypeCaseStudy
  allContentfulService: {
    nodes: TypeService[]
  }
}
interface Props {
  data: GoSiteQueryResponse
  location: PageProps['location']
}

const GoSite = ({
  data: { allContentfulService, contentfulCaseStudy },
  location
}: Props) => {
  const {
    nextCaseStudies,
    featuredTestimonial,
    seoTitle,
    metaDescription: { metaDescription }
  } = contentfulCaseStudy
  const { nodes: services } = allContentfulService
  return (
    <>
      <Meta
        description={metaDescription}
        location={location}
        title={seoTitle}
      />
      <div className="GoSite" id="gosite-container">
        <main>
          <GoSiteIntro />

          <GoSiteSummary />

          <GoSiteChallengeSolution />

          <GoSiteDesignSystems />

          <GoSiteConclusion testimonial={featuredTestimonial} />
        </main>
        <div className="GoSite-opportunity-form">
          <OpportunityForm
            buttonText="Let's Meet"
            location={location.href}
            title="Set up a meeting - we'd love to chat"
          />
        </div>
        <OtherServices services={services} title="How We Got There" />
        <RelatedCaseStudies caseStudies={nextCaseStudies} />
        <Footer />
      </div>
    </>
  )
}

export const GOSITE_QUERY = graphql`
  query gositeQuery {
    contentfulCaseStudy(name: { eq: "GoSite" }) {
      featuredTestimonial {
        company
        name
        role
        quote {
          raw
        }
        mainHeadshot {
          fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        featuredHeadshot {
          fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
      nextCaseStudies {
        logo {
          file {
            url
          }
        }
        name
        slug
        tagline
      }

      metaDescription {
        metaDescription
      }
      seoTitle
    }

    allContentfulService {
      nodes {
        shortTitle
        slug
        otherServicesIllustration {
          file {
            url
          }
        }
      }
    }
  }
`

export default GoSite
