import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";

// SVGs
import HeroIllustration from '@static/svgs/case-studies/quadpay/quadpay-hero.inline.svg'

// Styles
import './styles/QuadpayIntro.css'

const QuadpayIntro = () => {
  const { logo, introImg } = useStaticQuery(
    graphql`{
  logo: file(relativePath: {eq: "case-studies/quadpay/quadpay-logo.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 500, placeholder: NONE, layout: CONSTRAINED)
    }
  }
  introImg: file(relativePath: {eq: "case-studies/quadpay/quadpay-intro.jpg"}) {
    childImageSharp {
      gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH)
    }
  }
}
`
  )

  return <>
    <div className="quadpay-hero">
      <HeroIllustration className="quadpay-hero-illustration" />
    </div>
    <div className="quadpay-intro">
      <GatsbyImage
        image={logo.childImageSharp.gatsbyImageData}
        className="quadpay-logo"
        durationFadeIn={150}
        fadeIn />
      <h1 className="text-h1 mb-4 md:mb-6">
        How UX/UI Upgrades & Brand Strategy Took This FinTech App From Startup
        to Acquisition
      </h1>
      <h2 className="text-h3 font-extrabold">
        4.8 App Star rating & 2+ million users thanks to stand-alone strategy
        and design
      </h2>
    </div>

    <GatsbyImage
      image={introImg.childImageSharp.gatsbyImageData}
      className="quadpay-intro-img"
      durationFadeIn={150}
      fadeIn />
  </>;
}

export default QuadpayIntro
