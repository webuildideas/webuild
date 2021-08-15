import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

// SVGs
import DesignSystems from '@static/svgs/service/circle/design-systems-circle.inline.svg'
import BrandDesign from '@static/svgs/service/circle/brand-design-circle.inline.svg'

// Styles
import './styles/QuadpayDesignSystems.css'

const QuadpayDesignSystems = () => {
  const { designSystemMobileImg, designSystemImg } = useStaticQuery(graphql`
    query {
      designSystemMobileImg: file(
        relativePath: {
          eq: "case-studies/quadpay/quadpay-design-systems-mobile.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      designSystemImg: file(
        relativePath: { eq: "case-studies/quadpay/quadpay-design-systems.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="QuadpayDesignSystems">
        <div className="quadpay-service-buttons">
          <div className="quadpay-service-button">
            <DesignSystems className="quadpay-service-icon" />
            <span className="text-tag">Design Systems</span>
          </div>
          <div className="quadpay-service-button">
            <BrandDesign className="quadpay-service-icon" />
            <span className="text-tag">Brand Design</span>
          </div>
        </div>
        <div className="QuadpayDesignSystems-content">
          <h3 className="text-h2 font-extrabold mb-8 md:mb-6">
            How Combining UX/UI Expertise & Brand Strategy Made This Product
            Acquisition-Ready
          </h3>

          <p className="text-body mb-4 md:mb-6 lg:mb-8">
            To get to that point, Quadpay not only needed to up their UX/UI
            game. But they quickly realized they needed to totally adapt their
            brand, too. They knew it was crucial they started speaking more
            directly to their two core audiences: “lifestyle optimizers”
            (consumers) and “momentum brands” (retailers). They didn’t know
            where to start.
          </p>

          <p className="text-body">
            We gladly jumped in and implemented our specialized marketing
            strategies to help them elevate and adapt their brand. It was
            important that the brand better fit their target audiences, so we
            helped them explore a wide range of branding options that would help
            them achieve that goal. From typography to color palettes, brand
            voice to icons and graphics, nothing was off the table.
          </p>
        </div>
      </div>

      <Img
        className="QuadpayDesignSystems-img mobile md:hidden"
        fluid={designSystemMobileImg.childImageSharp.fluid}
      />

      <Img
        className="QuadpayDesignSystems-img hidden md:block"
        fluid={designSystemImg.childImageSharp.fluid}
      />
    </>
  )
}

export default QuadpayDesignSystems
