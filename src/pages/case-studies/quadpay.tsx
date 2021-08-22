// Packages
import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'
import { TypeGatsbyChildImageSharpFluid } from '@common/types/GatsbyImage'

// Components
import QuadpayIntro from '@modules/case-studies/quadpay/components/QuadpayIntro'
import QuadpayDesignSystems from '@modules/case-studies/quadpay/components/QuadpayDesignSystems'
import QuadpayConclusion from '@modules/case-studies/quadpay/components/QuadpayConclusion'
import Footer from '@components/Footer'
import OtherServices from '@modules/service/components/OtherServices'

// SVGs
import ChallengeIcon from '@static/svgs/case-studies/quadpay/quadpay-challenge.inline.svg'
import SolutionIcon from '@static/svgs/case-studies/quadpay/quadpay-solution.inline.svg'

// Styles
import '../../common/styles/pages/quadpay.css'
import QuadpayProductDesign from '@modules/case-studies/quadpay/components/QuadpayProductDesign'
import { TypeService } from '@common/types/Service'
import OpportunityForm from '@modules/forms/OpportunityForm'
import QuadpayMarketingDesign from '@modules/case-studies/quadpay/components/QuadpayMarketingDesign'

interface QuadpayQueryResponse {
  introImg: TypeGatsbyChildImageSharpFluid
  logo: TypeGatsbyChildImageSharpFluid
  metricsMobile: TypeGatsbyChildImageSharpFluid
  metrics: TypeGatsbyChildImageSharpFluid
  allContentfulService: {
    nodes: TypeService[]
  }
}

interface Props {
  data: QuadpayQueryResponse
  location: PageProps['location']
}

const QuadPay = ({
  data: { metricsMobile, metrics, allContentfulService },
  location
}: Props) => {
  const { nodes: services } = allContentfulService
  return (
    <div className="quadpay">
      <main>
        <QuadpayIntro />

        <div className="quadpay-challenge-solution">
          <div className="quadpay-challenge-solution-summary">
            <div className="quadpay-challenge-solution-summary-content">
              <h3 className="text-h3 font-extrabold mb-4">
                The “Buy now, pay later” movement.
              </h3>
              <Img
                className="quadpay-metrics-img-mobile"
                fluid={metricsMobile.childImageSharp.fluid}
              />
              <p className="text-body mb-4 md:mb-6 lg:mb-8">
                Quadpay is a Fintech app that allows payments to be split into
                four installments. They're part of a larger "buy now, pay later"
                movement (BNPL) that's an alternative to credit cards.
              </p>

              <p className="text-body">
                No credit impact, no interest as long as you pay your
                installments on time. As recently as 2020, 37% of consumers
                report using a BNPL service. As economic concerns loom, the
                number grows.{' '}
              </p>
            </div>

            <Img
              className="quadpay-metrics-img"
              fluid={metrics.childImageSharp.fluid}
            />
          </div>

          <div className="quadpay-challenge-solution-container">
            <div className="quadpay-challenge-solution-container-inner">
              <div className="quadpay-challenge">
                <ChallengeIcon className="quadpay-challenge-icon" />
                <h3 className="text-h3 font-extrabold mb-4">The Challenge</h3>
                <p className="text-body">
                  Quadpay came to us for help with their product and marketing
                  design. They specifically requested UX/UI upgrades that would
                  help them stand out against competitors like Afterpay, Affirm,
                  Klarna, and Sezzle. As we worked together, it became apparent
                  that we got along pretty great, and what started as a
                  singular, specific ask morphed into more opportunities to
                  iterate and optimize, well, everything.
                </p>
              </div>

              <div className="quadpay-solution">
                <SolutionIcon className="quadpay-solution-icon" />
                <h3 className="text-h3 font-extrabold mb-4">The Solution</h3>
                <p className="text-body">
                  After combining their vision and existing product with our
                  design and brand strategy expertise, Quadpay has seen
                  tremendous growth. Over two million users have downloaded
                  their apps and use their consumer products. They have a 4.8
                  App Star rating. Not to mention, they’ve been acquired by Zip,
                  an Australian-based fintech company of the same nature.
                </p>
              </div>
            </div>
          </div>
        </div>

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
    metrics: file(
      relativePath: { eq: "case-studies/quadpay/quadpay-intro-metrics.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    metricsMobile: file(
      relativePath: {
        eq: "case-studies/quadpay/quadpay-intro-metrics-mobile.png"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
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
