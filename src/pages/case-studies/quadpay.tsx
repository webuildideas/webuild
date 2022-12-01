// Packages
import React from 'react'
import { graphql, PageProps } from 'gatsby'

// Commons
import { TypeService } from '@common/types/Service'
import { TypeCaseStudy } from '@common/types/CaseStudy'

// Components
import QuadpayIntro from '@modules/case-studies/quadpay/components/QuadpayIntro'
import QuadpayDesignSystems from '@modules/case-studies/quadpay/components/QuadpayDesignSystems'
import QuadpayConclusion from '@modules/case-studies/quadpay/components/QuadpayConclusion'
import Footer from '@modules/common/components/Footer'
import OtherServices from '@modules/service/components/OtherServices'
import QuadpayProductDesign from '@modules/case-studies/quadpay/components/QuadpayProductDesign'
import OpportunityForm from '@modules/forms/OpportunityForm'
import QuadpayMarketingDesign from '@modules/case-studies/quadpay/components/QuadpayMarketingDesign'
import QuadpayChallengeSolution from '@modules/case-studies/quadpay/components/QuadpayChallengeSolution'
import Meta from '@components/Meta'
import RelatedCaseStudies from '@modules/case-studies/components/NextCaseStudies'

// Styles
import '../../common/styles/pages/quadpay.css'

interface QuadpayQueryResponse {
  contentfulCaseStudy: TypeCaseStudy
  allContentfulService: {
    nodes: TypeService[]
  }
}

interface Props {
  data: QuadpayQueryResponse
  location: PageProps['location']
}

const QuadPay = ({
  data: { allContentfulService, contentfulCaseStudy },
  location
}: Props) => {
  const {
    nextCaseStudies,
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
      <div className="quadpay" id="quadpay-container">
        <main>
          <QuadpayIntro />

          <QuadpayChallengeSolution />

          <QuadpayMarketingDesign />

          <QuadpayDesignSystems />

          <QuadpayProductDesign />

          <QuadpayConclusion />
        </main>
        <div className="Quadpay-opportunity-form">
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

export const QUADPAY_QUERY = graphql`
  query quadpayQuery {
    contentfulCaseStudy(name: { eq: "Quadpay" }) {
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

export default QuadPay
