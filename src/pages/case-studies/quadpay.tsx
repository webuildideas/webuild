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

interface QuadpayQueryResponse {
  allContentfulService: {
    nodes: TypeService[]
  }
}

interface Props {
  data: QuadpayQueryResponse
  location: PageProps['location']
}

const QuadPay = ({ data: { allContentfulService }, location }: Props) => {
  const { nodes: services } = allContentfulService
  return (
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
  )
}

export const QUADPAY_QUERY = graphql`
  query quadpayQuery {
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
