import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

// Svgs
import Marketing from '@static/svgs/service/circle/marketing-circle.inline.svg'

// Styles
import './styles/QuadpayMarketingDesign.css'

const QuadpayMarketingDesign = () => {
  const {
    marketingPhoneTabDesktop,
    marketingSketch,
    marketingDesign
  } = useStaticQuery(graphql`{
  marketingPhoneTabDesktop: file(
    relativePath: {eq: "case-studies/quadpay/quadpay-marketing-phone-tab-desk.jpg"}
  ) {
    childImageSharp {
      gatsbyImageData(width: 600, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  marketingSketch: file(
    relativePath: {eq: "case-studies/quadpay/quadpay-marketing-sketch.jpg"}
  ) {
    childImageSharp {
      gatsbyImageData(width: 600, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  marketingDesign: file(
    relativePath: {eq: "case-studies/quadpay/quadpay-marketing-design.png"}
  ) {
    childImageSharp {
      gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
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
          <GatsbyImage
            image={marketingPhoneTabDesktop.childImageSharp.gatsbyImageData}
            className="QuadpayMarektingDesign-ptd"
            durationFadeIn={150}
            fadeIn />

          <GatsbyImage
            image={marketingSketch.childImageSharp.gatsbyImageData}
            className="QuadpayMarektingDesign-sketch"
            durationFadeIn={150}
            fadeIn />
        </div>
      </div>

      <div className="QuadpayMarektingDesign-banner">
        <div className="QuadpayMarektingDesign-container">
          <GatsbyImage
            image={marketingDesign.childImageSharp.gatsbyImageData}
            className="QuadpayMarektingDesign-img block"
            durationFadeIn={150}
            fadeIn />
        </div>

        <div className="QuadpayMarektingDesign-caption">
          <p className="QuadpayMarektingDesign-copy text-caption text-gray-600 mt-2 ">
            Marketing website homepage and satellite pages.
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuadpayMarketingDesign
