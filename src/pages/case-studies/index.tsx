// Styles
import '@common/styles/pages/case-studies.css'

// Packages
import React from 'react'
import { graphql, PageProps } from 'gatsby'

// Components
import Footer from '@components/Footer'
import Meta from '@components/Meta'
import TestimonialSlider from '@modules/common/components/TestimonialSlider'
import ProcessSteps from '@modules/common/components/ProcessSteps'
import CaseStudy from '@modules/common/components/CaseStudy'

// Common
import { TypeCaseStudy } from '@common/types/CaseStudy'
import { TypeTestimonial } from '@common/types/Testimonial'
import OpportunityForm from '@modules/forms/OpportunityForm'
import MotionAniLink from '@modules/common/components/MotionAniLink'

interface Props {
  data: {
    contentfulCaseStudies: {
      caseStudies: TypeCaseStudy[]
      testimonials: TypeTestimonial[]
    }
  }
  location: PageProps['location']
}

const CaseStudies = ({
  data: {
    contentfulCaseStudies: { caseStudies, testimonials }
  },
  location
}: Props) => {
  return (
    <>
      <Meta location={location} title="Case Studies" />
      <main className="CaseStudies">
        <div className="CaseStudies-title">
          <h1 className="text-h1 mb-4 lg:mb-6">
            No smoke and mirrors. Design that makes magic for Fintech and B2B
            startups.
          </h1>
          <h3 className="text-title-subheading">
            When your business hinges on the quality of your digital product,
            you need to have confidence it's the best it can be. We've helped
            businesses big and small transform their products into powerhouses,
            send startups to acquisitions, and scale to new heights.
          </h3>
        </div>

        <div className="CaseStudies-items">
          {caseStudies.map((caseStudy, idx: number) => {
            const layout = (idx + 1) % 2 === 0 ? 'right' : 'left'
            return (
              <>
                <div className={`CaseStudy-item CaseStudy-item-${idx + 1}`}>
                  <CaseStudy
                    key={caseStudy.slug}
                    buttonStyleType="solid-purple"
                    caseStudy={caseStudy}
                    layout={layout}
                    taglineRichText
                  />
                </div>
                {idx === 1 ? (
                  <div className="CaseStudies-testimonials">
                    <div className="CaseStudies-testimonials-inner">
                      <TestimonialSlider testimonials={testimonials} />
                    </div>
                  </div>
                ) : null}
              </>
            )
          })}
        </div>

        <div className="CaseStudies-process">
          <h3 className="text-h3 font-extrabold mb-4">
            A Tried & True Approach
          </h3>
          <p className="text-body mb-12 lg:mb-14 xl:mb-16">
            Our powerful three-step process allows us to get to market
            efficiently, allowing us to iterate & optimize quickly to deliver
            optimal results.
          </p>
          <ProcessSteps />

          <div className="CaseStudies-process-button">
            <MotionAniLink
              className="inline-block"
              styleType="solid-purple"
              to="/what-we-do/"
            >
              Discover What We Do
            </MotionAniLink>
          </div>
        </div>

        <div className="CaseStudies-opportunity-form">
          <OpportunityForm
            buttonText="Let's Meet"
            location={location.href}
            title="Set up a meeting — we’d love to chat"
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export const CASE_STUDIES_PAGE_QUERY = graphql`
  query caseStudiesPageQuery {
    contentfulCaseStudies(pageTitle: { eq: "Case Studies" }) {
      title {
        title
      }
      subtitle {
        subtitle
      }
      caseStudies {
        name
        slug
        tagline
        successSummary {
          successSummary
        }
        logo {
          file {
            url
          }
        }
        listingImage {
          fluid(maxWidth: 625) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
      testimonials {
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

export default CaseStudies
