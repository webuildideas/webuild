import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

// SVGs
import ProductDesign from '@static/svgs/service/circle/product-strategy-circle.inline.svg'

// styles
import './styles/QuadpayProductDesign.css'

const QuadpayProductDesign = () => {
  const {
    prodDesignMobileImg,
    prodDesignImg,
    prodDesignXlImg,
    bradHeadshot,
    iosMobile,
    iosMd,
    iosLg,
    iosXl,
    ios2xl
  } = useStaticQuery(graphql`{
  prodDesignMobileImg: file(
    relativePath: {eq: "case-studies/quadpay/quadpay-product-design-mobile.jpg"}
  ) {
    childImageSharp {
      gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  prodDesignImg: file(
    relativePath: {eq: "case-studies/quadpay/quadpay-product-design.png"}
  ) {
    childImageSharp {
      gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  prodDesignXlImg: file(
    relativePath: {eq: "case-studies/quadpay/quadpay-product-design-2xl.png"}
  ) {
    childImageSharp {
      gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  bradHeadshot: file(
    relativePath: {eq: "case-studies/quadpay/brad-l-headshot.png"}
  ) {
    childImageSharp {
      gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  iosMobile: file(
    relativePath: {eq: "case-studies/quadpay/quadpay-ios-app-mobile.jpg"}
  ) {
    childImageSharp {
      gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  iosMd: file(relativePath: {eq: "case-studies/quadpay/quadpay-ios-app-md.jpg"}) {
    childImageSharp {
      gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  iosLg: file(relativePath: {eq: "case-studies/quadpay/quadpay-ios-app-lg.jpg"}) {
    childImageSharp {
      gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  iosXl: file(relativePath: {eq: "case-studies/quadpay/quadpay-ios-app-xl.jpg"}) {
    childImageSharp {
      gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  ios2xl: file(relativePath: {eq: "case-studies/quadpay/quadpay-ios-app-2xl.jpg"}) {
    childImageSharp {
      gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
    }
  }
}
`)

  const iosAppSources = [
    iosMobile.childImageSharp.gatsbyImageData,
    {
      ...ios2xl.childImageSharp.gatsbyImageData,
      media: `(min-width: 2560px)`
    },
    {
      ...iosXl.childImageSharp.gatsbyImageData,
      media: `(min-width: 1280px)`
    },
    {
      ...iosLg.childImageSharp.gatsbyImageData,
      media: `(min-width: 1024px)`
    },
    {
      ...iosMd.childImageSharp.gatsbyImageData,
      media: `(min-width: 768px)`
    }
  ]
  return <>
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
      <GatsbyImage
        image={prodDesignMobileImg.childImageSharp.gatsbyImageData}
        className="QuadpayProductDesign-img mobile md:hidden"
        durationFadeIn={150}
        fadeIn />
      <GatsbyImage
        image={prodDesignImg.childImageSharp.gatsbyImageData}
        className="QuadpayProductDesign-img hidden md:block 2xl:hidden"
        durationFadeIn={150}
        fadeIn />
      <GatsbyImage
        image={prodDesignXlImg.childImageSharp.gatsbyImageData}
        className="QuadpayProductDesign-img xl hidden 2xl:block"
        durationFadeIn={150}
        fadeIn />
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
            <GatsbyImage
              image={bradHeadshot.childImageSharp.gatsbyImageData}
              className="headshot"
              durationFadeIn={150}
              fadeIn />
          </div>
          <div className="ServiceTestimonial-cite-image md:hidden">
            <GatsbyImage
              image={bradHeadshot.childImageSharp.gatsbyImageData}
              className="headshot"
              durationFadeIn={150}
              fadeIn />
          </div>
        </div>
      </div>
    </div>

    <div className="Quadpay-ios-app">
      <GatsbyImage
        image={iosAppSources}
        className="Quadpay-ios-app-img"
        durationFadeIn={150}
        fadeIn />
    </div>

    <p className="text-body Quadpay-product-design-copy">
      We utilized and leveraged data to help them shape and define what these
      new features would do, then helped release them into the world. Our
      tried-and-true method was applied: test, learn, and rapidly iterate and
      optimize. <span>And we had fun doing it. 💪</span>
    </p>
  </>;
}

export default QuadpayProductDesign
