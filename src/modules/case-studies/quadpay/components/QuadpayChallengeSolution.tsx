import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

// SVGs
import ChallengeIcon from '@static/svgs/case-studies/quadpay/quadpay-challenge.inline.svg'
import SolutionIcon from '@static/svgs/case-studies/quadpay/quadpay-solution.inline.svg'

// Styles
import './styles/QuadpayChallengeSolution.css'

const QuadpayChallengeSolution = () => {
  const { metrics, metricsMobile, metricsTablet } = useStaticQuery(graphql`
    query {
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
      metricsTablet: file(
        relativePath: {
          eq: "case-studies/quadpay/quadpay-intro-metrics-tablet.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      metrics: file(
        relativePath: { eq: "case-studies/quadpay/quadpay-intro-metrics.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <div className="QuadpayChallengeSolution">
      <div className="QuadpayChallengeSolution-summary">
        <div className="QuadpayChallengeSolution-summary-content">
          <h3 className="text-h3 font-extrabold mb-4">
            The “Buy now, pay later” movement.
          </h3>
          <Img
            className="QuadpayChallengeSolution-metrics-img-mobile"
            fluid={metricsMobile.childImageSharp.fluid}
          />
          <p className="text-body mb-4 md:mb-6 lg:mb-8">
            Quadpay is a Fintech app that allows payments to be split into four
            installments. They're part of a larger "buy now, pay later" movement
            (BNPL) that's an alternative to credit cards.
          </p>

          <p className="text-body">
            No credit impact, no interest as long as you pay your installments
            on time. As recently as 2020, 37% of consumers report using a BNPL
            service. As economic concerns loom, the number grows.{' '}
          </p>
        </div>

        <Img
          className="QuadpayChallengeSolution-metrics-img-tablet"
          fluid={metricsTablet.childImageSharp.fluid}
        />

        <Img
          className="QuadpayChallengeSolution-metrics-img"
          fluid={metrics.childImageSharp.fluid}
        />
      </div>

      <div className="QuadpayChallengeSolution-container">
        <div className="QuadpayChallengeSolution-container-inner">
          <div className="QuadpayChallengeSolution-challenge">
            <ChallengeIcon className="QuadpayChallengeSolution-challenge-icon" />
            <h3 className="text-h3 font-extrabold mb-4">The Challenge</h3>
            <p className="text-body">
              Quadpay came to us for help with their product and marketing
              design. They specifically requested UX/UI upgrades that would help
              them stand out against competitors like Afterpay, Affirm, Klarna,
              and Sezzle. As we worked together, it became apparent that we got
              along pretty great, and what started as a singular, specific ask
              morphed into more opportunities to iterate and optimize, well,
              everything.
            </p>
          </div>

          <div className="QuadpayChallengeSolution-solution">
            <SolutionIcon className="QuadpayChallengeSolution-solution-icon" />
            <h3 className="text-h3 font-extrabold mb-4">The Solution</h3>
            <p className="text-body">
              After combining their vision and existing product with our design
              and brand strategy expertise, Quadpay has seen tremendous growth.
              Over two million users have downloaded their apps and use their
              consumer products. They have a 4.8 App Star rating. Not to
              mention, they’ve been acquired by Zip, an Australian-based fintech
              company of the same nature.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuadpayChallengeSolution
