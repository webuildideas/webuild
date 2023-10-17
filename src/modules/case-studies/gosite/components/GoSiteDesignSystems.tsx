// Packages
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

// SVGs
import DesignSystems from '@static/svgs/service/circle/design-systems-circle.inline.svg'

// Styles
import '@modules/case-studies/gosite/components/styles/GoSiteDesignSystems.css'
import MotionAniLink from '@modules/common/components/MotionAniLink'

const GoSiteDesignSystems = () => {
  const {
    dsMobile,
    dsMd,
    dsLg,
    dsXl,
    ds2xl,
    ddMobile,
    ddMd,
    ddLg,
    ddXl,
    dd2xl,
    webAppMobile,
    webAppMd,
    webAppLg,
    webAppXl,
    webApp2xl
  } = useStaticQuery(
    graphql`{
  dsMobile: file(
    relativePath: {eq: "case-studies/gosite/gosite-design-system-mobile.png"}
  ) {
    childImageSharp {
      gatsbyImageData(
        width: 600
        quality: 100
        placeholder: NONE
        layout: CONSTRAINED
      )
    }
  }
  dsMd: file(
    relativePath: {eq: "case-studies/gosite/gosite-design-system-md.png"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  dsLg: file(
    relativePath: {eq: "case-studies/gosite/gosite-design-system-lg.png"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  dsXl: file(
    relativePath: {eq: "case-studies/gosite/gosite-design-system-xl.png"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  ds2xl: file(
    relativePath: {eq: "case-studies/gosite/gosite-design-system-2xl.png"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  ddMobile: file(
    relativePath: {eq: "case-studies/gosite/gosite-design-decisions-mobile.png"}
  ) {
    childImageSharp {
      gatsbyImageData(
        width: 600
        quality: 100
        placeholder: NONE
        layout: CONSTRAINED
      )
    }
  }
  ddMd: file(
    relativePath: {eq: "case-studies/gosite/gosite-design-decisions-md.png"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  ddLg: file(
    relativePath: {eq: "case-studies/gosite/gosite-design-decisions-lg.png"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  ddXl: file(
    relativePath: {eq: "case-studies/gosite/gosite-design-decisions-xl.png"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  dd2xl: file(
    relativePath: {eq: "case-studies/gosite/gosite-design-decisions-2xl.png"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  webAppMobile: file(
    relativePath: {eq: "case-studies/gosite/gosite-web-app-mobile.jpg"}
  ) {
    childImageSharp {
      gatsbyImageData(
        width: 600
        quality: 100
        placeholder: NONE
        layout: CONSTRAINED
      )
    }
  }
  webAppMd: file(relativePath: {eq: "case-studies/gosite/gosite-web-app-md.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  webAppLg: file(relativePath: {eq: "case-studies/gosite/gosite-web-app-lg.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  webAppXl: file(relativePath: {eq: "case-studies/gosite/gosite-web-app-xl.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  webApp2xl: file(
    relativePath: {eq: "case-studies/gosite/gosite-web-app-2xl.jpg"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
}
`
  )

  const designSystemSources = [
    dsMobile.childImageSharp.gatsbyImageData,
    {
      ...ds2xl.childImageSharp.gatsbyImageData,
      media: `(min-width: 2560px)`
    },
    {
      ...dsXl.childImageSharp.gatsbyImageData,
      media: `(min-width: 1280px)`
    },
    {
      ...dsLg.childImageSharp.gatsbyImageData,
      media: `(min-width: 1024px)`
    },
    {
      ...dsMd.childImageSharp.gatsbyImageData,
      media: `(min-width: 768px)`
    }
  ]

  const designDecisionsSources = [
    ddMobile.childImageSharp.gatsbyImageData,
    {
      ...dd2xl.childImageSharp.gatsbyImageData,
      media: `(min-width: 2560px)`
    },
    {
      ...ddXl.childImageSharp.gatsbyImageData,
      media: `(min-width: 1280px)`
    },
    {
      ...ddLg.childImageSharp.gatsbyImageData,
      media: `(min-width: 1024px)`
    },
    {
      ...ddMd.childImageSharp.gatsbyImageData,
      media: `(min-width: 768px)`
    }
  ]

  const webAppSources = [
    webAppMobile.childImageSharp.gatsbyImageData,
    {
      ...webApp2xl.childImageSharp.gatsbyImageData,
      media: `(min-width: 2560px)`
    },
    {
      ...webAppXl.childImageSharp.gatsbyImageData,
      media: `(min-width: 1280px)`
    },
    {
      ...webAppLg.childImageSharp.gatsbyImageData,
      media: `(min-width: 1024px)`
    },
    {
      ...webAppMd.childImageSharp.gatsbyImageData,
      media: `(min-width: 768px)`
    }
  ]

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
        image={designSystemSources}
        className="GoSiteDesignSystems-img"
        durationFadeIn={150}
        fadeIn />
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
        image={designDecisionsSources}
        className="GoSiteDesignSystems-decisions-img"
        durationFadeIn={150}
        fadeIn />
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
        image={webAppSources}
        className="GoSiteDesignSystems-webApp-img"
        durationFadeIn={150}
        fadeIn />
    </div>
  );
}

export default GoSiteDesignSystems
