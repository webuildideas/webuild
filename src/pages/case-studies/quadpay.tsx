// Packages
import React from 'react'
import { graphql, PageProps } from 'gatsby'

// Components
import QuadpayIntro from '@modules/case-studies/quadpay/components/QuadpayIntro'
import QuadpayDesignSystems from '@modules/case-studies/quadpay/components/QuadpayDesignSystems'
import QuadpayConclusion from '@modules/case-studies/quadpay/components/QuadpayConclusion'
import Footer from '@components/Footer'
import OtherServices from '@modules/service/components/OtherServices'

// Styles
import '../../common/styles/pages/quadpay.css'
import QuadpayProductDesign from '@modules/case-studies/quadpay/components/QuadpayProductDesign'
import { TypeService } from '@common/types/Service'
import OpportunityForm from '@modules/forms/OpportunityForm'
import QuadpayMarketingDesign from '@modules/case-studies/quadpay/components/QuadpayMarketingDesign'
import QuadpayChallengeSolution from '@modules/case-studies/quadpay/components/QuadpayChallengeSolution'
import Meta from '@components/Meta'

interface QuadpayQueryResponse {
  contentfulCaseStudy: {
    seoTitle: string
    metaDescription: {
      metaDescription: string
    }
  }
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
      <div className="quadpay">
        <main>
          <QuadpayIntro />

          <QuadpayChallengeSolution />

          <QuadpayMarketingDesign />

          <QuadpayDesignSystems />

          <QuadpayProductDesign />

          <QuadpayConclusion />
        </main>
        <OpportunityForm
          buttonText="Let's Meet"
          location={location.href}
          title="Set up a meeting - we'd love to chat"
        />
        <OtherServices services={services} title="How We Got There" />
        <Footer />
      </div>
    </>
  )
}

export const QUADPAY_QUERY = graphql`
  query quadpayQuery {
    contentfulCaseStudy(name: { eq: "Quadpay" }) {
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

export default QuadPay
