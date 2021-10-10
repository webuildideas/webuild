import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

// Svgs
import Marketing from '@static/svgs/service/circle/marketing-circle.inline.svg'

// Styles
import './styles/QuadpayMarketingDesign.css'

const QuadpayMarketingDesign = () => {
  const {
    marketingPhoneTabDesktop,
    marketingSketch,
    marketingDesign
  } = useStaticQuery(graphql`
    query {
      marketingPhoneTabDesktop: file(
        relativePath: {
          eq: "case-studies/quadpay/quadpay-marketing-phone-tab-desk.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      marketingSketch: file(
        relativePath: {
          eq: "case-studies/quadpay/quadpay-marketing-sketch.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      marketingDesign: file(
        relativePath: {
          eq: "case-studies/quadpay/quadpay-marketing-design.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 3500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <div className="QuadpayMarketingDesign">
      <div className="QuadpayMarektingDesign-content">
        <div className="quadpay-service-buttons">
          <div className="quadpay-service-button">
            <Marketing className="quadpay-service-icon" />
            <span className="text-tag">Marketing Design</span>
          </div>
        </div>

        <div className="QuadpayMarektingDesign-copy">
          <h3 className="text-h3 font-extrabold mb-4 md:mb-2 lg:mb-4">
            Lifestyle Optimizers
          </h3>
          <p className="text-body">
            We started working on the brand (inherited from another agency) and
            figuring out the visual style / overall brand aesthetic of the
            website.
          </p>
        </div>

        <div className="QuadpayMarektingDesign-images">
          <Img
            className="QuadpayMarektingDesign-ptd"
            durationFadeIn={150}
            fadeIn
            fluid={marketingPhoneTabDesktop.childImageSharp.fluid}
          />

          <Img
            className="QuadpayMarektingDesign-sketch"
            durationFadeIn={150}
            fadeIn
            fluid={marketingSketch.childImageSharp.fluid}
          />
        </div>
      </div>

      <div className="QuadpayMarektingDesign-banner">
        <div className="QuadpayMarektingDesign-container">
          <Img
            className="QuadpayMarektingDesign-img block"
            durationFadeIn={150}
            fadeIn
            fluid={marketingDesign.childImageSharp.fluid}
          />
        </div>

        <div className="QuadpayMarektingDesign-caption">
          <p className="QuadpayMarektingDesign-copy text-caption text-gray-600 mt-2 ">
            Marketing website homepage and satellite pages.
          </p>
        </div>
      </div>
    </div>
  )
}

export default QuadpayMarketingDesign
