// Packages
import React from 'react'
import { graphql, PageProps } from 'gatsby'

// Components
import Meta from '@components/Meta'
import Button from '@modules/common/components/Button'
import BookACallForm from '@modules/forms/BookACallForm'
import TestimonialSlider from '@modules/common/components/TestimonialSlider'

// Common
import { TypeSEO } from '@common/types/SEO'

// Svgs
import HeroIllustration from '@static/svgs/landing-pages/fintech/fintech-hero.inline.svg'
import DreamBig from '@static/svgs/landing-pages/fintech/fintech-dream-big.inline.svg'
import ExpandResources from '@static/svgs/landing-pages/fintech/fintech-expand-resources.inline.svg'
import IncreaseVelocity from '@static/svgs/landing-pages/fintech/fintech-velocity.inline.svg'
import Reliability from '@static/svgs/landing-pages/fintech/fintech-reliability.inline.svg'

// styles
import '@common/styles/pages/fintech.css'
import { TypeTestimonial } from '@common/types/Testimonial'

interface Props {
  data: {
    contentfulSeo: TypeSEO
    allContentfulTestimonial: {
      nodes: TypeTestimonial[]
    }
  }
  location: PageProps['location']
}

const Fintech = ({
  data: {
    contentfulSeo,
    allContentfulTestimonial: { nodes: testimonials }
  },
  location
}: Props) => {
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
            <h1 className="Fintech-title text-h1">
              Boost your fintech startup with thoughtful & informed design.
            </h1>
            <BookACallForm location={location.href} />
          </div>
        </div>

        <div className="Fintech-call-cta">
          <h3 className="Fintech-call-cta-title text-h3">
            We combine our deep expertise in product design and strategy to
            <span>
              accelerate business growth for fast-growing Fintech startups.
            </span>
          </h3>
          <Button>Book a call</Button>
        </div>

        <div className="Fintech-latest-work">
          <h2 className="Fintech-latest-work-title text-h2">
            Our Latest Work in Fintech
          </h2>
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
              <Button styleType="solid-purple">Schedule A Call</Button>
            </div>
          </div>

          <div className="Fintech-work">
            <div className="Fintech-work-content">
              <h3 className="text-h3 font-extrabold">Increase Velocity</h3>
              <p className="text-body">
                We work fast, iterate often, and gather informed feedback along
                the way to deliver effective solutions.
              </p>
              <Button styleType="solid-purple">Learn More</Button>
            </div>
            <IncreaseVelocity className="Fintech-work-illustration velocity" />
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
              <Button styleType="solid-purple">Schedule A Call</Button>
            </div>
          </div>

          <div className="Fintech-work">
            <div className="Fintech-work-content">
              <h3 className="text-h3 font-extrabold">Dream Big</h3>
              <p className="text-body">
                We’re strategically minded and hyper-focused on helping you get
                your business to the next level.
              </p>
              <Button styleType="solid-purple">Learn More</Button>
            </div>
            <DreamBig className="Fintech-work-illustration dream" />
          </div>
        </div>

        <div className="Fintech-testimonials">
          <div className="Fintech-testimonials-inner">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>

        <div className="Fintech-services">
          <h2>What we do ( very ) well</h2>
        </div>

        <div className="Fintech-footer">
          <h3 className="text-h3 font-extrabold">
            Let's do something <span className="text-electricViolet">bold</span>{' '}
            together!
          </h3>
          <Button>Let's Meet</Button>
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
  }
`

export default Fintech
