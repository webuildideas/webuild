import '@common/styles/pages/fintech-2.css'

// Packages
import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'

// Components
import Meta from '@components/Meta'
import MotionAniLink from '@modules/common/components/MotionAniLink'
import Button from '@modules/common/components/Button'
import TestimonialSlider from '@modules/common/components/TestimonialSlider'
import OtherServices from '@modules/service/components/OtherServices'

// Common
import { TypeSEO } from '@common/types/SEO'
import { TypeService } from '@common/types/Service'
import { TypeTestimonial } from '@common/types/Testimonial'

// Hooks
import useOpportunityFormModal from '@modules/forms/hooks/useOpportunityFormModal'
import useBookACallFormModal from '@modules/forms/hooks/useBookACallFormModal'

// Svgs
import DreamBig from '@static/svgs/landing-pages/fintech/fintech-dream-big.inline.svg'
import ExpandResources from '@static/svgs/landing-pages/fintech/fintech-expand-resources.inline.svg'
import IncreaseVelocity from '@static/svgs/landing-pages/fintech/fintech-velocity.inline.svg'
import Reliability from '@static/svgs/landing-pages/fintech/fintech-reliability.inline.svg'
import Logo from '@static/svgs/logo.inline.svg'
import Dribbble from '@static/svgs/common/social/dribbble.inline.svg'
import Instagram from '@static/svgs/common/social/instagram.inline.svg'
import LinkedIn from '@static/svgs/common/social/linkedin.inline.svg'
import SlhLogo from '@static/svgs/logos/clients/slh-logo.inline.svg'
import YottaLogo from '@static/svgs/logos/clients/yotta-logo.inline.svg'
import ZipLogo from '@static/svgs/logos/clients/zip-logo.inline.svg'

// Styles
import { TypeGatsbyChildImageSharpFluid } from '@common/types/GatsbyImage'

interface Props {
  data: {
    contentfulSeo: TypeSEO
    allContentfulTestimonial: {
      nodes: TypeTestimonial[]
    }
    allContentfulService: {
      nodes: TypeService[]
    }
    heroMobile: TypeGatsbyChildImageSharpFluid
    heroMd: TypeGatsbyChildImageSharpFluid
    heroLg: TypeGatsbyChildImageSharpFluid
    heroXl: TypeGatsbyChildImageSharpFluid
    hero2Xl: TypeGatsbyChildImageSharpFluid
  }
  location: PageProps['location']
}

const Fintech = ({
  data: {
    contentfulSeo,
    heroMobile,
    heroMd,
    heroLg,
    heroXl,
    hero2Xl,
    allContentfulTestimonial: { nodes: testimonials },
    allContentfulService: { nodes: services }
  },
  location
}: Props) => {
  const { showModal } = useOpportunityFormModal()
  const { showModal: showBookACallModal } = useBookACallFormModal()

  const heroImgSrcs = [
    heroMobile.childImageSharp.fluid,
    {
      ...hero2Xl.childImageSharp.fluid,
      media: `(min-width: 2560px)`
    },
    {
      ...heroXl.childImageSharp.fluid,
      media: `(min-width: 1280px)`
    },
    {
      ...heroLg.childImageSharp.fluid,
      media: `(min-width: 1024px)`
    },
    {
      ...heroMd.childImageSharp.fluid,
      media: `(min-width: 768px)`
    }
  ]

  return (
    <>
      <Meta
        description={contentfulSeo.seoDescription?.seoDescription}
        location={location}
        shareImage={contentfulSeo.seoShareImage?.file.url}
        shareTitle={contentfulSeo.seoTitle}
        title={contentfulSeo.seoTitle}
      />

      <main className="Fintech Fintech-alt">
        <div className="Fintech__hero">
          <div className="Fintech__hero-inner">
            <div className="Fintech__hero-title-container">
              <h1 className="Fintech__hero-title text-h1">
                Boost your fintech startup with thoughtful &amp; informed
                design.
              </h1>
              <h3 className="Fintech__hero-subtitle text-h3">
                We combine our deep expertise in product design and strategy to
                accelerate business growth for fast-growing Fintech startups.
              </h3>
              <Button
                className="Fintech__hero-button"
                onClick={showBookACallModal}
                styleType="solid-blueRibbon"
              >
                Book a call
              </Button>
            </div>
          </div>
          <Img
            className="Fintech__hero-image"
            durationFadeIn={150}
            fadeIn
            fluid={heroImgSrcs}
          />
        </div>

        <div className="Fintech__clients">
          <div className="Fintech__clients-items">
            <div className="Fintech__clients-item">
              <div className="Fintech__clients-logo-container">
                <ZipLogo className="Fintech__clients-logo" />
              </div>
              <p className="Fintech__clients-copy text-body">
                4.8 App Star rating, 2+ million users &amp; an acquisition
              </p>
            </div>
            <div className="Fintech__clients-item">
              <div className="Fintech__clients-logo-container">
                <YottaLogo className="Fintech__clients-logo" />
              </div>
              <p className="Fintech__clients-copy text-body">
                250% growth driven by a robust design system
              </p>
            </div>
            <div className="Fintech__clients-item">
              <div className="Fintech__clients-logo-container">
                <SlhLogo className="Fintech__clients-logo" />
              </div>
              <p className="Fintech__clients-copy text-body">
                5x revenue through obsessive optimization
              </p>
            </div>
          </div>
        </div>

        <div className="Fintech__testimonials">
          <div className="Fintech__testimonials-inner">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>

        <div className="Fintech-works">
          <h2 className="Fintech-works-title text-h2">Why webuild works</h2>
          <div className="Fintech-work">
            <ExpandResources className="Fintech-work-illustration resources" />
            <div className="Fintech-work-content">
              <h3 className="text-h3 font-extrabold">Expand Resources</h3>
              <p className="text-body">
                We help you solve your resourcing challenges in a fraction of
                the time at a reasonable cost. We plug in and get to work
                immediately.
              </p>
              <Button onClick={showBookACallModal} styleType="solid-purple">
                Schedule A Call
              </Button>
            </div>
          </div>

          <div className="Fintech-work illustration-right">
            <IncreaseVelocity className="Fintech-work-illustration velocity" />
            <div className="Fintech-work-content">
              <h3 className="text-h3 font-extrabold">Increase Velocity</h3>
              <p className="text-body">
                We work fast, iterate often, and gather informed feedback along
                the way to deliver effective solutions.
              </p>
              <MotionAniLink styleType="solid-purple" to="/what-we-do/">
                Learn More
              </MotionAniLink>
            </div>
          </div>

          <div className="Fintech-work">
            <Reliability className="Fintech-work-illustration reliability" />
            <div className="Fintech-work-content">
              <h3 className="text-h3 font-extrabold">Experience Reliability</h3>
              <p className="text-body">
                We have deep expertise in our field, leveraging a ton of Fintech
                experience with product. We deliver results with minimal
                oversight.
              </p>
              <Button onClick={showBookACallModal} styleType="solid-purple">
                Schedule A Call
              </Button>
            </div>
          </div>

          <div className="Fintech-work illustration-right">
            <DreamBig className="Fintech-work-illustration dream" />
            <div className="Fintech-work-content">
              <h3 className="text-h3 font-extrabold">Dream Big</h3>
              <p className="text-body">
                We’re strategically minded and hyper-focused on helping you get
                your business to the next level.
              </p>
              <MotionAniLink styleType="solid-purple" to="/what-we-do/">
                Learn More
              </MotionAniLink>
            </div>
          </div>
        </div>

        <div className="Fintech-services">
          <OtherServices
            services={services}
            showButton={false}
            title="What we do (very) well"
          />
        </div>

        <div className="Fintech__footer">
          <div className="Fintech__footer-content">
            <h3 className="text-h3 Fintech__footer-title">
              Let's do something <span className="text-lilac">bold</span>{' '}
              together!
            </h3>
            <Button
              className="Fintech__footer-button"
              onClick={showModal}
              styleType="outline"
            >
              Let's Meet
            </Button>
          </div>

          <div className="Fintech__footer-contact">
            <div className="Fintech__footer-social">
              <a
                href="https://www.dribbble.com/webuild/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Dribbble className="Fintech__footer-social-icon" />
              </a>
              <a
                href="https://www.instagram.com/wearewebuild/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Instagram className="Fintech__footer-social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/wearewebuild/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <LinkedIn className="Fintech__footer-social-icon" />
              </a>
            </div>
            <div className="Fintech__footer-logo">
              <Logo />
            </div>
            <div className="Fintech__footer-copyright">
              <p className="text-caption">
                All rights reserved &copy; webuild {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export const FINTECH_ALT_PAGE_QUERY = graphql`
  query FintechAltPageQuery {
    contentfulSeo(title: { eq: "Landing Page - Fintech" }) {
      seoTitle
      seoDescription {
        seoDescription
      }
    }

    heroMobile: file(
      relativePath: { eq: "landing-pages/fintech-2/fintech-2-hero-mobile.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    heroMd: file(
      relativePath: { eq: "landing-pages/fintech-2/fintech-2-hero-md.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    heroLg: file(
      relativePath: { eq: "landing-pages/fintech-2/fintech-2-hero-lg.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 3100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    heroXl: file(
      relativePath: { eq: "landing-pages/fintech-2/fintech-2-hero-xl.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 4200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    hero2Xl: file(
      relativePath: { eq: "landing-pages/fintech-2/fintech-2-hero-2xl.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 6000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    allContentfulTestimonial(
      filter: {
        name: {
          in: [
            "Alex Goode"
            "Brad Lindenberg"
            "Brian Johnson"
            "Ian Yamey"
            "Andrew Josuweit"
          ]
        }
      }
    ) {
      nodes {
        company
        name
        role
        quoteShort {
          raw
        }
        mainHeadshot {
          fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        headshot {
          fixed(cropFocus: FACE, height: 150, width: 150) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
        }
        purpleHeadshot {
          fixed(cropFocus: FACE, height: 150, width: 150) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
        }
      }
    }

    allContentfulService {
      nodes {
        shortTitle
        slug
        otherServicesIllustration {
          file {
            url
          }
        }
        otherServicesGif {
          file {
            url
          }
        }
      }
    }
  }
`

export default Fintech
