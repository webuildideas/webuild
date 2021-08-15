import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

// SVGs
import ProductDesign from '@static/svgs/service/circle/product-strategy-circle.inline.svg'

// styles
import './styles/QuadpayProductDesign.css'

const QuadpayProductDesign = () => {
  const {
    prodDesignMobileImg,
    prodDesignImg,
    prodDesignXlImg,
    bradHeadshot
  } = useStaticQuery(graphql`
    query {
      prodDesignMobileImg: file(
        relativePath: {
          eq: "case-studies/quadpay/quadpay-product-design-mobile.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      prodDesignImg: file(
        relativePath: { eq: "case-studies/quadpay/quadpay-product-design.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      prodDesignXlImg: file(
        relativePath: {
          eq: "case-studies/quadpay/quadpay-product-design-2xl.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      bradHeadshot: file(
        relativePath: { eq: "case-studies/quadpay/brad-l-headshot.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="QuadpayProductDesign">
        <div className="QuadpayProductDesign-content">
          <div className="quadpay-service-buttons">
            <div className="quadpay-service-button">
              <ProductDesign className="quadpay-service-icon" />
              <span className="text-tag">Product Design</span>
            </div>
          </div>

          <p className="text-body mb-4 md:mb-6 lg:mb-8">
            Ultimately, they ended up needing an entire brand refresh; a
            trendier, fashion-forward, and relevant identity. Working with them
            to get everything just right positioned Quadpay in their area of the
            market where they are now widely recognized. Cohesiveness and
            collaboration settled in place, giving everyone a little more
            stability.
          </p>

          <p className="text-body">
            Next on the list was catapulting their brand recognition. The key to
            turning things around in this area came through product enhancements
            and updating and releasing new features. In order for Quadpay to
            grow, it was critical that they offer new and exciting
            differentiators.
          </p>
        </div>
      </div>
      <div className="QuadpayProductDesign-product-img">
        <Img
          className="QuadpayProductDesign-img mobile md:hidden"
          fluid={prodDesignMobileImg.childImageSharp.fluid}
        />
        <Img
          className="QuadpayProductDesign-img hidden md:block 2xl:hidden"
          fluid={prodDesignImg.childImageSharp.fluid}
        />
        <Img
          className="QuadpayProductDesign-img xl hidden 2xl:block"
          fluid={prodDesignXlImg.childImageSharp.fluid}
        />
      </div>

      <div className="QuadpayProductDesign-testimonial">
        <div className="ServiceTestimonial">
          <blockquote className="ServiceTestimonial-quote text-h3">
            <p>
              We have been blown away by the capability and experience of the
              webuild team. We started off with a small project and over time
              webuild has become an extension of our team taking ownership of
              all product and UX design requirements of Quadpay.
              <span className="font-extrabold">
                They have excellent vision for product design and are reliable,
                attentive, and above all, produce exceptionally high-quality
                work quickly that is immediately usable by our developers.
              </span>
            </p>
          </blockquote>
          <div className="ServiceTestimonial-cite">
            <div className="ServiceTestimonial-cite-copy">
              <h5 className="text-caption text-base font-extrabold">
                Brad Lindenberg
              </h5>
              <p className="text-caption text-base">
                CEO/Co-Founder, <span>Quadpay</span>
              </p>
            </div>
            <div className="ServiceTestimonial-cite-image hidden md:block">
              <Img
                className="headshot"
                fluid={bradHeadshot.childImageSharp.fluid}
              />
            </div>
            <div className="ServiceTestimonial-cite-image md:hidden">
              <Img
                className="headshot"
                fluid={bradHeadshot.childImageSharp.fluid}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuadpayProductDesign
