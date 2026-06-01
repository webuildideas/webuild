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
import NewFooter from '@modules/common/components/NewFooter'
import OtherServices from '@modules/service/components/OtherServices'
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
        bodyAttributes={{ class: 'new-nav-padding' }}
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
        <div className="GoSite-opportunity-form" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h2>Set up a meeting &mdash; we&apos;d love to chat</h2>
          <a href="mailto:hello@webuild.io" style={{ display: 'inline-block', marginTop: '1.5rem' }}>Let&apos;s Meet →</a>
        </div>
        <OtherServices services={services} title="How We Got There" />
        <RelatedCaseStudies caseStudies={nextCaseStudies} />
        <NewFooter />
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
        otherServicesGif {
          file {
            url
          }
        }
      }
    }
  }
`

export default GoSite
