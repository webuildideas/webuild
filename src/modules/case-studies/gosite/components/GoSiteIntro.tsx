import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
import { GatsbyImage } from 'gatsby-plugin-image'

// Styles
import '@modules/case-studies/gosite/components/styles/GoSiteIntro.css'

// SVGs
import GoSiteHeroIllustration from '@static/svgs/case-studies/gosite/gosite-hero.inline.svg'
import GoSiteLogo from '@static/svgs/case-studies/gosite/gosite-logo.inline.svg'

const GoSiteIntro = () => {
  const {
    // bannerMobile,
    // bannerMd,
    // bannerLg,
    // bannerXl,
    banner2xl
  } = useStaticQuery(
    graphql`
      query {
        # bannerMobile: file(
        #   relativePath: {
        #     eq: "case-studies/gosite/gosite-intro-banner-mobile.png"
        #   }
        # ) {
        #   childImageSharp {
        #     fluid(maxWidth: 600, quality: 100) {
        #       ...GatsbyImageSharpFluid_withWebp_noBase64
        #     }
        #   }
        # }

        # bannerMd: file(
        #   relativePath: { eq: "case-studies/gosite/gosite-intro-banner-md.png" }
        # ) {
        #   childImageSharp {
        #     fluid(maxWidth: 1500, quality: 100) {
        #       ...GatsbyImageSharpFluid_withWebp_noBase64
        #     }
        #   }
        # }

        # bannerLg: file(
        #   relativePath: { eq: "case-studies/gosite/gosite-intro-banner-lg.png" }
        # ) {
        #   childImageSharp {
        #     fluid(maxWidth: 2000, quality: 100) {
        #       ...GatsbyImageSharpFluid_withWebp_noBase64
        #     }
        #   }
        # }

        # bannerXl: file(
        #   relativePath: {
        #     eq: "case-studies/gosite/gosite-intro-banner-desktop.png"
        #   }
        # ) {
        #   childImageSharp {
        #     fluid(maxWidth: 2800, quality: 100) {
        #       ...GatsbyImageSharpFluid_withWebp_noBase64
        #     }
        #   }
        # }

        banner2xl: file(
          relativePath: {
            eq: "case-studies/gosite/gosite-intro-banner-2xl.png"
          }
        ) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `
  )

  // const bannerSources = [
  //   bannerMobile.childImageSharp.fluid,
  //   {
  //     ...banner2xl.childImageSharp.fluid,
  //     media: `(min-width: 2560px)`
  //   },
  //   {
  //     ...bannerXl.childImageSharp.fluid,
  //     media: `(min-width: 1280px)`
  //   },
  //   {
  //     ...bannerLg.childImageSharp.fluid,
  //     media: `(min-width: 1024px)`
  //   },
  //   {
  //     ...bannerMd.childImageSharp.fluid,
  //     media: `(min-width: 768px)`
  //   }
  // ]

  return (
    <>
      <div className="gosite-hero">
        <GoSiteHeroIllustration className="gosite-hero-illustration" />
      </div>
      <div className="gosite-intro">
        <GoSiteLogo className="gosite-logo" />
        <h1 className="text-h1 mb-4 md:mb-6">
          10X Revenue & $60M Raised For All-In-One Small Biz Platform Thanks to
          a Robust Digital Product Strategy & Design
        </h1>
        <h2 className="text-h3 font-extrabold">
          10x revenue growth, 6x employee growth, 5+ properties overhauled & $60
          million raised. From brand design to primary feature optimization and
          more, this app designed to support small businesses has experienced
          massive growth in several areas — and gained massive investor
          attention.
        </h2>
      </div>
      <GatsbyImage
        alt="Design System"
        className="gosite-intro-img"
        image={banner2xl}
      />
      {/* <Img
        className="gosite-intro-img"
        durationFadeIn={150}
        fadeIn
        fluid={bannerSources}
      /> */}
    </>
  )
}

export default GoSiteIntro
