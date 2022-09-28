// Packages
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
import { GatsbyImage } from 'gatsby-plugin-image'

// SVGs
import DesignSystems from '@static/svgs/service/circle/design-systems-circle.inline.svg'

// Styles
import '@modules/case-studies/gosite/components/styles/GoSiteDesignSystems.css'
import MotionAniLink from '@modules/common/components/MotionAniLink'

const GoSiteDesignSystems = () => {
  const {
    // dsMobile,
    // dsMd,
    // dsLg,
    // dsXl,
    ds2xl,
    // ddMobile,
    // ddMd,
    // ddLg,
    // ddXl,
    dd2xl,
    // webAppMobile,
    // webAppMd,
    // webAppLg,
    // webAppXl,
    webApp2xl
  } = useStaticQuery(
    graphql`
      query {
        # dsMobile: file(
        #   relativePath: {
        #     eq: "case-studies/gosite/gosite-design-system-mobile.png"
        #   }
        # ) {
        #   childImageSharp {
        #     fluid(maxWidth: 600, quality: 100) {
        #       ...GatsbyImageSharpFluid_withWebp_noBase64
        #     }
        #   }
        # }

        # dsMd: file(
        #   relativePath: {
        #     eq: "case-studies/gosite/gosite-design-system-md.png"
        #   }
        # ) {
        #   childImageSharp {
        #     fluid(maxWidth: 1500, quality: 100) {
        #       ...GatsbyImageSharpFluid_withWebp_noBase64
        #     }
        #   }
        # }

        # dsLg: file(
        #   relativePath: {
        #     eq: "case-studies/gosite/gosite-design-system-lg.png"
        #   }
        # ) {
        #   childImageSharp {
        #     fluid(maxWidth: 2000, quality: 100) {
        #       ...GatsbyImageSharpFluid_withWebp_noBase64
        #     }
        #   }
        # }

        # dsXl: file(
        #   relativePath: {
        #     eq: "case-studies/gosite/gosite-design-system-xl.png"
        #   }
        # ) {
        #   childImageSharp {
        #     fluid(maxWidth: 2800, quality: 100) {
        #       ...GatsbyImageSharpFluid_withWebp_noBase64
        #     }
        #   }
        # }

        ds2xl: file(
          relativePath: {
            eq: "case-studies/gosite/gosite-design-system-2xl.png"
          }
        ) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }

        # ddMobile: file(
        #   relativePath: {
        #     eq: "case-studies/gosite/gosite-design-decisions-mobile.png"
        #   }
        # ) {
        #   childImageSharp {
        #     fluid(maxWidth: 600, quality: 100) {
        #       ...GatsbyImageSharpFluid_withWebp_noBase64
        #     }
        #   }
        # }

        # ddMd: file(
        #   relativePath: {
        #     eq: "case-studies/gosite/gosite-design-decisions-md.png"
        #   }
        # ) {
        #   childImageSharp {
        #     fluid(maxWidth: 1500, quality: 100) {
        #       ...GatsbyImageSharpFluid_withWebp_noBase64
        #     }
        #   }
        # }

        # ddLg: file(
        #   relativePath: {
        #     eq: "case-studies/gosite/gosite-design-decisions-lg.png"
        #   }
        # ) {
        #   childImageSharp {
        #     fluid(maxWidth: 2000, quality: 100) {
        #       ...GatsbyImageSharpFluid_withWebp_noBase64
        #     }
        #   }
        # }

        # ddXl: file(
        #   relativePath: {
        #     eq: "case-studies/gosite/gosite-design-decisions-xl.png"
        #   }
        # ) {
        #   childImageSharp {
        #     fluid(maxWidth: 2800, quality: 100) {
        #       ...GatsbyImageSharpFluid_withWebp_noBase64
        #     }
        #   }
        # }

        dd2xl: file(
          relativePath: {
            eq: "case-studies/gosite/gosite-design-decisions-2xl.png"
          }
        ) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }

        # webAppMobile: file(
        #   relativePath: { eq: "case-studies/gosite/gosite-web-app-mobile.jpg" }
        # ) {
        #   childImageSharp {
        #     fluid(maxWidth: 600, quality: 100) {
        #       ...GatsbyImageSharpFluid_withWebp_noBase64
        #     }
        #   }
        # }

        # webAppMd: file(
        #   relativePath: { eq: "case-studies/gosite/gosite-web-app-md.jpg" }
        # ) {
        #   childImageSharp {
        #     fluid(maxWidth: 1500, quality: 100) {
        #       ...GatsbyImageSharpFluid_withWebp_noBase64
        #     }
        #   }
        # }

        # webAppLg: file(
        #   relativePath: { eq: "case-studies/gosite/gosite-web-app-lg.jpg" }
        # ) {
        #   childImageSharp {
        #     fluid(maxWidth: 2000, quality: 100) {
        #       ...GatsbyImageSharpFluid_withWebp_noBase64
        #     }
        #   }
        # }

        # webAppXl: file(
        #   relativePath: { eq: "case-studies/gosite/gosite-web-app-xl.jpg" }
        # ) {
        #   childImageSharp {
        #     fluid(maxWidth: 2800, quality: 100) {
        #       ...GatsbyImageSharpFluid_withWebp_noBase64
        #     }
        #   }
        # }

        webApp2xl: file(
          relativePath: { eq: "case-studies/gosite/gosite-web-app-2xl.jpg" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `
  )

  // const designSystemSources = [
  //   dsMobile.childImageSharp.fluid,
  //   {
  //     ...ds2xl.childImageSharp.fluid,
  //     media: `(min-width: 2560px)`
  //   },
  //   {
  //     ...dsXl.childImageSharp.fluid,
  //     media: `(min-width: 1280px)`
  //   },
  //   {
  //     ...dsLg.childImageSharp.fluid,
  //     media: `(min-width: 1024px)`
  //   },
  //   {
  //     ...dsMd.childImageSharp.fluid,
  //     media: `(min-width: 768px)`
  //   }
  // ]

  // const designDecisionsSources = [
  //   ddMobile.childImageSharp.fluid,
  //   {
  //     ...dd2xl.childImageSharp.fluid,
  //     media: `(min-width: 2560px)`
  //   },
  //   {
  //     ...ddXl.childImageSharp.fluid,
  //     media: `(min-width: 1280px)`
  //   },
  //   {
  //     ...ddLg.childImageSharp.fluid,
  //     media: `(min-width: 1024px)`
  //   },
  //   {
  //     ...ddMd.childImageSharp.fluid,
  //     media: `(min-width: 768px)`
  //   }
  // ]

  // const webAppSources = [
  //   webAppMobile.childImageSharp.fluid,
  //   {
  //     ...webApp2xl.childImageSharp.fluid,
  //     media: `(min-width: 2560px)`
  //   },
  //   {
  //     ...webAppXl.childImageSharp.fluid,
  //     media: `(min-width: 1280px)`
  //   },
  //   {
  //     ...webAppLg.childImageSharp.fluid,
  //     media: `(min-width: 1024px)`
  //   },
  //   {
  //     ...webAppMd.childImageSharp.fluid,
  //     media: `(min-width: 768px)`
  //   }
  // ]

  return (
    <div className="GoSiteDesignSystems">
      <div className="GoSiteDesignSystems-content">
        <div className="GoSiteDesignSystems-service-buttons">
          <div className="GoSiteDesignSystems-service-button">
            <DesignSystems className="GoSiteDesignSystems-service-icon" />
            <span className="text-tag">Design Systems</span>
          </div>
        </div>
        <div>
          <h2 className="text-h2 font-extrabold mb-8 md:mb-6">
            A Unified Design System + Optimized Product Features and UX =
            Massive Scale
          </h2>
          <p className="text-body mb-4 md:mb-6 lg:mb-8">
            Our first order of business was conducting significant upfront
            discovery to unpack who they were as a business, meeting with key
            stakeholders to get a handle on their main pain points and
            opportunities. Then we explored and researched their competition.
            All of this helped us get familiar with the product, the team, and
            the challenges they were up against.
          </p>
          <p className="text-body">
            We discovered that there was a jarring disconnect between the
            website and the product in terms of design. That disconnect was not
            an asset to their brand — so we tackled all things branding first.
            We{' '}
            <MotionAniLink
              className="text-electricViolet"
              styleType="link"
              to="/design-system-digital-brand-benefits/"
            >
              created a robust design system
            </MotionAniLink>{' '}
            that could be repeated, reused, and optimized across all channels.
            The end result was a cohesive brand aesthetic that caught the eye of
            investors.
          </p>
        </div>
      </div>
      <GatsbyImage
        alt="Design System"
        className="GoSiteDesignSystems-img"
        image={ds2xl}
      />
      {/* <Img
        className="GoSiteDesignSystems-img"
        durationFadeIn={150}
        fadeIn
        fluid={designSystemSources}
      /> */}
      <p className="GoSiteDesignSystems-copy text-body">
        Next, we worked on{' '}
        <MotionAniLink
          className="text-electricViolet"
          styleType="link"
          to="/reduce-customer-churn-rate-for-saas-startups/"
        >
          decreasing churn
        </MotionAniLink>{' '}
        by making enhancements and optimizations to their UX based on continuous
        user testing. After all, it’s hard to know what’s working and what’s not
        — and why — until you get down to the nitty-gritty. Armed with user
        feedback, we tackled GoSite's free trial onboarding, improved first-time
        user experience, and launched a new instant website builder. We're
        relentlessly and rapidly enhancing core features product-by-product as
        we continue to listen to user observations.
      </p>
      <GatsbyImage
        alt="Design System"
        className="GoSiteDesignSystems-decisions-img"
        image={dd2xl}
      />
      {/* <Img
        className="GoSiteDesignSystems-decisions-img"
        durationFadeIn={150}
        fadeIn
        fluid={designDecisionsSources}
      /> */}
      <p className="GoSiteDesignSystems-copy text-body mb-4 md:mb-6 lg:mb-8">
        Since small business owners are often on the go, GoSite needed a more
        mobile-friendly app. What they had before worked, but it wasn’t the
        go-to tool that their users would turn to. We iterated on the existing
        app and turned it into a beefed-up, reliable — and most importantly
        user-friendly — tool for small business owners who don’t have time for
        hassle.
      </p>
      <p className="GoSiteDesignSystems-copy text-body mb-4 md:mb-6 lg:mb-8">
        The app currently has a 4.4 out of 5-star rating in the app store with
        thousands of downloads.
      </p>
      <p className="GoSiteDesignSystems-copy text-body">
        As our partnership with GoSite blazes on through strategic support and
        product optimization, we are excited to see what’s ahead for the app
        that champions the service-based small business owner.
      </p>
      <GatsbyImage
        alt="Design System Web App"
        className="GoSiteDesignSystems-webApp-img"
        image={webApp2xl}
      />
      {/* <Img
        className="GoSiteDesignSystems-webApp-img"
        durationFadeIn={150}
        fadeIn
        fluid={webAppSources}
      /> */}
    </div>
  )
}

export default GoSiteDesignSystems
