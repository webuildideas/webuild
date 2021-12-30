// Packages
import React, { useEffect } from 'react'
import { graphql, PageProps } from 'gatsby'
import Img from 'gatsby-image'
import { useAnimation, Variants, motion } from 'framer-motion'

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
import { useInView } from 'react-intersection-observer'

interface Props {
  data: {
    contentfulSeo: TypeSEO
    allContentfulTestimonial: {
      nodes: TypeTestimonial[]
    }
    allContentfulService: {
      nodes: TypeService[]
    }
    mobileGallery: TypeGatsbyChildImageSharpFluid
    row11: TypeGatsbyChildImageSharpFluid
    row12: TypeGatsbyChildImageSharpFluid
    row13: TypeGatsbyChildImageSharpFluid
    row21: TypeGatsbyChildImageSharpFluid
    row22: TypeGatsbyChildImageSharpFluid
    row23: TypeGatsbyChildImageSharpFluid
    row24: TypeGatsbyChildImageSharpFluid
    row25: TypeGatsbyChildImageSharpFluid
    row31: TypeGatsbyChildImageSharpFluid
    row32: TypeGatsbyChildImageSharpFluid
  }
  location: PageProps['location']
}

const variants: Variants = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.3
    }
  }),

  image1Hidden: {
    opacity: 0,
    x: -15,
    y: -20
  },

  image2Hidden: {
    opacity: 0,
    y: -35
  },

  image3Hidden: {
    opacity: 0,
    x: 35,
    y: 10
  },

  image4Hidden: {
    opacity: 0,
    x: -25,
    y: 20
  },

  image5Hidden: {
    opacity: 0,
    x: 35,
    y: 20
  },

  image6Hidden: {
    opacity: 0,
    x: -25,
    y: 40
  },

  image7Hidden: {
    opacity: 0,
    y: 40
  },

  image8Hidden: {
    opacity: 0,
    y: 40
  },

  image9Hidden: {
    opacity: 0,
    y: 40
  },

  image10Hidden: {
    opacity: 0,
    y: 40
  }
}

const Fintech = ({
  data: {
    contentfulSeo,
    allContentfulTestimonial: { nodes: testimonials },
    allContentfulService: { nodes: services },
    mobileGallery,
    row11,
    row12,
    row13,
    row21,
    row22,
    row23,
    row24,
    row25,
    row31,
    row32
  },
  location
}: Props) => {
  const animationControls = useAnimation()
  const { showModal } = useOpportunityFormModal()
  const { showModal: showBookACallModal } = useBookACallFormModal()
  const [ref, inView] = useInView({
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      animationControls.start('visible')
    }
  })
  return (
    <>
      <Meta
        description={contentfulSeo.seoDescription?.seoDescription}
        location={location}
        shareImage={contentfulSeo.seoShareImage?.file.url}
        shareTitle={contentfulSeo.seoTitle}
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
              successButtonText="Go Home"
              successButtonTo="/"
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

          <div className="Fintech-mobile-gallery">
            <div
              className="Fintech-mobile-gallery-sliding"
              style={{
                backgroundImage: `url(${mobileGallery.childImageSharp.fluid.src})`
              }}
            />
          </div>
          <div ref={ref} className="Fintech-latest-work-gallery">
            <motion.div
              key="photo-0"
              animate={animationControls}
              className="Fintech-gallery-img row11"
              custom={2}
              data-photo={1}
              initial="image1Hidden"
              variants={variants}
            >
              <Img
                durationFadeIn={150}
                fadeIn
                fluid={row11.childImageSharp.fluid}
                imgStyle={{ objectFit: 'cover' }}
              />
            </motion.div>

            <motion.div
              key="photo-1"
              animate={animationControls}
              className="Fintech-gallery-img row12"
              custom={3}
              data-photo={2}
              initial="image2Hidden"
              variants={variants}
            >
              <Img
                durationFadeIn={150}
                fadeIn
                fluid={row12.childImageSharp.fluid}
                imgStyle={{ objectFit: 'cover' }}
              />
            </motion.div>

            <motion.div
              key="photo-2"
              animate={animationControls}
              className="Fintech-gallery-img row13"
              custom={4}
              data-photo={3}
              initial="image3Hidden"
              variants={variants}
            >
              <Img
                durationFadeIn={150}
                fadeIn
                fluid={row13.childImageSharp.fluid}
                imgStyle={{ objectFit: 'cover' }}
              />
            </motion.div>

            <motion.div
              key="photo-3"
              animate={animationControls}
              className="Fintech-gallery-img row21"
              custom={5}
              data-photo={4}
              initial="image4Hidden"
              variants={variants}
            >
              <Img
                durationFadeIn={150}
                fadeIn
                fluid={row21.childImageSharp.fluid}
                imgStyle={{ objectFit: 'cover' }}
              />
            </motion.div>

            <motion.div
              key="photo-4"
              animate={animationControls}
              className="Fintech-gallery-img row22"
              custom={6}
              data-photo={5}
              initial="image5Hidden"
              variants={variants}
            >
              <Img
                durationFadeIn={150}
                fadeIn
                fluid={row22.childImageSharp.fluid}
                imgStyle={{ objectFit: 'cover' }}
              />
            </motion.div>

            <motion.div
              key="photo-5"
              animate={animationControls}
              className="Fintech-gallery-img row23"
              custom={7}
              data-photo={6}
              initial="image6Hidden"
              variants={variants}
            >
              <Img
                durationFadeIn={150}
                fadeIn
                fluid={row23.childImageSharp.fluid}
                imgStyle={{ objectFit: 'cover' }}
              />
            </motion.div>

            <motion.div
              key="photo-6"
              animate={animationControls}
              className="Fintech-gallery-img row24"
              custom={8}
              data-photo={7}
              initial="image7Hidden"
              variants={variants}
            >
              <Img
                durationFadeIn={150}
                fadeIn
                fluid={row24.childImageSharp.fluid}
                imgStyle={{ objectFit: 'cover' }}
              />
            </motion.div>

            <motion.div
              key="photo-7"
              animate={animationControls}
              className="Fintech-gallery-img row25"
              custom={9}
              data-photo={8}
              initial="image8Hidden"
              variants={variants}
            >
              <Img
                durationFadeIn={150}
                fadeIn
                fluid={row25.childImageSharp.fluid}
                imgStyle={{ objectFit: 'cover' }}
              />
            </motion.div>

            <motion.div
              key="photo-8"
              animate={animationControls}
              className="Fintech-gallery-img row31"
              custom={10}
              data-photo={9}
              initial="image9Hidden"
              variants={variants}
            >
              <Img
                durationFadeIn={150}
                fadeIn
                fluid={row31.childImageSharp.fluid}
                imgStyle={{ objectFit: 'cover' }}
              />
            </motion.div>

            <motion.div
              key="photo-9"
              animate={animationControls}
              className="Fintech-gallery-img row32"
              custom={11}
              data-photo={20}
              initial="image10Hidden"
              variants={variants}
            >
              <Img
                durationFadeIn={150}
                fadeIn
                fluid={row32.childImageSharp.fluid}
                imgStyle={{ objectFit: 'cover' }}
              />
            </motion.div>
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

    mobileGallery: file(
      relativePath: { eq: "landing-pages/fintech/mobile-gallery.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    row11: file(relativePath: { eq: "landing-pages/fintech/row-1-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    row12: file(relativePath: { eq: "landing-pages/fintech/row-1-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    row13: file(relativePath: { eq: "landing-pages/fintech/row-1-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    row21: file(relativePath: { eq: "landing-pages/fintech/row-2-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    row22: file(relativePath: { eq: "landing-pages/fintech/row-2-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    row23: file(relativePath: { eq: "landing-pages/fintech/row-2-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    row24: file(relativePath: { eq: "landing-pages/fintech/row-2-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    row25: file(relativePath: { eq: "landing-pages/fintech/row-2-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    row31: file(relativePath: { eq: "landing-pages/fintech/row-3-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    row32: file(relativePath: { eq: "landing-pages/fintech/row-3-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
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
