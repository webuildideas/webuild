// Packages
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

// Svgs
import Growth from '@static/svgs/case-studies/gosite/metrics-growth.inline.svg'
import Properties from '@static/svgs/case-studies/gosite/metrics-properties.inline.svg'
import Team from '@static/svgs/case-studies/gosite/metrics-team.inline.svg'

// Styles
import '@modules/case-studies/gosite/components/styles/GoSiteSummary.css'

interface Metric {
  title: string
  subtitle: string
  description: string
  icon: () => React.ReactElement
}

const metrics: Metric[] = [
  {
    title: '10x',
    subtitle: 'Revenue Growth',
    description: 'Supported 10x revenue growth over 12 months.',
    icon: () => <Growth />
  },
  {
    title: '6x',
    subtitle: 'Team Growth',
    description:
      'Enabled GoSite team to scale from 40 to 250 talented employees.',
    icon: () => <Team />
  },
  {
    title: '5+',
    subtitle: 'Products Overhauled',
    description: 'iOS & Android, Enterprise Marketing, and Free-Trial',
    icon: () => <Properties />
  }
]

const GoSiteSummary = () => {
  const {
    productMobile,
    productMd,
    productLg,
    productXl,
    product2xl,
    process
  } = useStaticQuery(
    graphql`{
  productMobile: file(
    relativePath: {eq: "case-studies/gosite/gosite-product-feature-mobile.png"}
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
  productMd: file(
    relativePath: {eq: "case-studies/gosite/gosite-product-feature-md.png"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  productLg: file(
    relativePath: {eq: "case-studies/gosite/gosite-product-feature-lg.png"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  productXl: file(
    relativePath: {eq: "case-studies/gosite/gosite-product-feature-xl.png"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  product2xl: file(
    relativePath: {eq: "case-studies/gosite/gosite-product-feature-2xl.png"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 100, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
  process: file(relativePath: {eq: "case-studies/gosite/gosite-process.png"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, placeholder: NONE, layout: FULL_WIDTH)
    }
  }
}
`
  )

  const productFeatureSources = [
    productMobile.childImageSharp.gatsbyImageData,
    {
      ...product2xl.childImageSharp.gatsbyImageData,
      media: `(min-width: 2560px)`
    },
    {
      ...productXl.childImageSharp.gatsbyImageData,
      media: `(min-width: 1280px)`
    },
    {
      ...productLg.childImageSharp.gatsbyImageData,
      media: `(min-width: 1024px)`
    },
    {
      ...productMd.childImageSharp.gatsbyImageData,
      media: `(min-width: 768px)`
    }
  ]
  return (
    <div className="GoSiteSummary">
      <div className="GoSiteSummary-business-owner">
        <div className="GoSiteSummary-content">
          <h3 className="text-h2 font-extrabold mb-4">
            Long live the small business owner.
          </h3>
          <p className="text-body mb-4 md:mb-6 lg:mb-8">
            They’re the first ones up in the morning and the last to go to bed.
            They work tirelessly to build their business from the ground up. And
            they need all the help they can get.
          </p>

          <p className="text-body">
            Enter:{' '}
            <a
              className="text-electricViolet"
              href="https://gosite.com"
              rel="noreferrer"
              target="_blank"
            >
              GoSite
            </a>
            . An all-in-one platform to help small businesses get more done with
            fewer hurdles. With GoSite, service-based small businesses can
            seamlessly provide a platform for their customers to find, book, and
            pay for appointments online.
          </p>
        </div>
        <div className="GoSiteSummary-metrics grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4 md:gap-6">
          {metrics.map((metric, idx) => (
            <div key={idx} className="GoSiteSummary-metric">
              <div className="GoSiteSummary-metric-icon">{metric.icon()}</div>
              <div className="GoSiteSummary-metric-content ml-4 md:ml-0">
                <h3 className="text-h3 font-extrabold mb-2">{metric.title}</h3>
                <h4 className="text-h4 mb-1">{metric.subtitle}</h4>
                <p className="text-body">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <GatsbyImage
        image={productFeatureSources}
        className="GoSiteSummary-product-img"
        durationFadeIn={150}
        fadeIn />

      <div className="GoSitesummary-summary-content">
        <p className="text-body mb-4 md:mb-6 lg:mb-8">
          When GoSite came to us in 2019, their product was more than a Minimal
          Viable Product (MVP). But to get it to the next level, they needed
          support in digital product strategy and design to achieve their goals.{' '}
        </p>
        <p className="text-body mb-4 md:mb-6 lg:mb-8">
          Since webuild jumped on board, we've touched every single part of
          GoSite — from marketing to product design, investor decks to emails
          and paid ads. We’ve helped them produce ebooks, case studies, blogs,
          and most importantly: optimized the entire product experience.{' '}
        </p>
        <p className="text-body">
          As it stands today, we’ve been by GoSite’s side as they have earned
          10X the revenue, grown their team from 40 to 250 talented employees,
          overhauled 5+ properties, and raised a cool $60 million. And we’re
          just getting started.
        </p>
      </div>

      <GatsbyImage
        image={process.childImageSharp.gatsbyImageData}
        className="GoSiteSummary-process-img"
        durationFadeIn={150}
        fadeIn />
    </div>
  );
}

export default GoSiteSummary
