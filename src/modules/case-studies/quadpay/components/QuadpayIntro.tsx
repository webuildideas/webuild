import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'

// SVGs
import HeroIllustration from '@static/svgs/case-studies/quadpay/quadpay-hero.inline.svg'

// Styles
import './styles/QuadpayIntro.css'

const QuadpayIntro = () => {
  const { logo, introImg } = useStaticQuery(
    graphql`
      query {
        logo: file(
          relativePath: { eq: "case-studies/quadpay/quadpay-logo.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }

        introImg: file(
          relativePath: { eq: "case-studies/quadpay/quadpay-intro.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )

  return (
    <>
      <div className="quadpay-hero">
        <HeroIllustration className="quadpay-hero-illustration" />
      </div>
      <div className="quadpay-intro">
        <Img className="quadpay-logo" fluid={logo.childImageSharp.fluid} />
        <h1 className="text-h1 mb-4 md:mb-6">
          How UX/UI Upgrades & Brand Strategy Took This FinTech App From Startup
          to Acquisition
        </h1>
        <h2 className="text-h3 font-extrabold">
          4.8 App Star rating & 2+ million users thanks to stand-alone strategy
          and design
        </h2>
      </div>

      <Img
        className="quadpay-intro-img"
        fluid={introImg.childImageSharp.fluid}
      />
    </>
  )
}

export default QuadpayIntro
