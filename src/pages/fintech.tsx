// Packages
import React from 'react'
import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'

// Components
import Meta from '@components/Meta'
import MotionAniLink from '@modules/common/components/MotionAniLink'
import Button from '@modules/common/components/Button'
import BookACallForm from '@modules/forms/BookACallForm'
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
import HeroIllustration from '@static/svgs/landing-pages/fintech/fintech-hero.inline.svg'
import DreamBig from '@static/svgs/landing-pages/fintech/fintech-dream-big.inline.svg'
import ExpandResources from '@static/svgs/landing-pages/fintech/fintech-expand-resources.inline.svg'
import IncreaseVelocity from '@static/svgs/landing-pages/fintech/fintech-velocity.inline.svg'
import Reliability from '@static/svgs/landing-pages/fintech/fintech-reliability.inline.svg'
import Logo from '@static/svgs/logo.inline.svg'
import Dribbble from '@static/svgs/common/social/dribbble.inline.svg'
import Instagram from '@static/svgs/common/social/instagram.inline.svg'
import LinkedIn from '@static/svgs/common/social/linkedin.inline.svg'

// Styles
import '@common/styles/pages/fintech.css'
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
    galleryMobile: TypeGatsbyChildImageSharpFluid
    galleryMd: TypeGatsbyChildImageSharpFluid
    galleryLg: TypeGatsbyChildImageSharpFluid
  }
  location: PageProps['location']
}

const Fintech = ({
  data: {
    contentfulSeo,
    allContentfulTestimonial: { nodes: testimonials },
    allContentfulService: { nodes: services },
    galleryMobile,
    galleryMd,
    galleryLg
  },
  location
}: Props) => {
  const { showModal } = useOpportunityFormModal()
  const { showModal: showBookACallModal } = useBookACallFormModal()

  const gallerySources = [
    galleryMobile.childImageSharp.fluid,
    {
      ...galleryLg.childImageSharp.fluid,
      media: `(min-width: 1024px)`
    },
    {
      ...galleryMd.childImageSharp.fluid,
      media: `(min-width: 768px)`
    }
  ]

  return (
    <>
      <Meta
        description={contentfulSeo.seoDescription?.seoDescription}
        location={location}
        title={contentfulSeo.seoTitle}
      />
      <main className="Fintech">
        <div className="Fintech-hero">
          <div className="Fintech-hero-illustration-container">
            <HeroIllustration className="Fintech-hero-illustration" />
          </div>
          <div className="Fintech-hero-inner">
            <div className="Fintech-title-container">
              <h1 className="Fintech-title text-h1">
                Boost your fintech startup with thoughtful & informed design.
              </h1>
            </div>
            <BookACallForm
              className="Fintech-hero-form"
              location={location.href}
            />
          </div>
        </div>

        <div className="Fintech-call-cta">
          <h3 className="Fintech-call-cta-title text-h3">
            <span className="regular">
              We combine our deep expertise in product design and strategy to
            </span>
            <span className="highlight">
              accelerate business growth for fast-growing Fintech startups.
            </span>
          </h3>
          <Button onClick={showBookACallModal}>Book a call</Button>
        </div>

        <div className="Fintech-latest-work">
          <h2 className="Fintech-latest-work-title text-h2">
            Our Latest Work in Fintech
          </h2>
          <div className="Fintech-latest-work-gallery">
            <Img
              className="GoSiteDesignSystems-img"
              durationFadeIn={150}
              fadeIn
              fluid={gallerySources}
            />
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

        <div className="Fintech-testimonials">
          <div className="Fintech-testimonials-inner">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>

        <div className="Fintech-services">
          <OtherServices
            services={services}
            showButton={false}
            title="What we do (very) well"
          />
        </div>

        <div className="Fintech-footer">
          <div className="Fintech-footer-content">
            <h3 className="text-h3 Fintech-footer-title">
              Let's do something <span className="text-lilac">bold</span>{' '}
              together!
            </h3>
            <Button
              className="Fintech-footer-button"
              onClick={showModal}
              styleType="outline"
            >
              Let's Meet
            </Button>
          </div>

          <div className="Fintech-footer-contact">
            <div className="Fintech-footer-social">
              <a
                href="https://www.dribbble.com/webuild/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Dribbble className="Fintech-footer-social-icon" />
              </a>
              <a
                href="https://www.instagram.com/wearewebuild/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Instagram className="Fintech-footer-social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/company/wearewebuild/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <LinkedIn className="Fintech-footer-social-icon" />
              </a>
            </div>
            <div className="Fintech-footer-logo">
              <Logo />
            </div>
            <div className="Fintech-footer-copyright">
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

export const FINTECH_PAGE_QUERY = graphql`
  query FintechPageQuery {
    contentfulSeo(title: { eq: "Landing Page - Fintech" }) {
      seoTitle
      seoDescription {
        seoDescription
      }
    }

    galleryMobile: file(
      relativePath: { eq: "landing-pages/fintech/fintech-gallery-mobile.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1500) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryMd: file(
      relativePath: { eq: "landing-pages/fintech/fintech-gallery-md.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    galleryLg: file(
      relativePath: { eq: "landing-pages/fintech/fintech-gallery-lg.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2700) {
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
      }
    }
  }
`

export default Fintech
