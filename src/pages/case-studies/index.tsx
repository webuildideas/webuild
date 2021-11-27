// Styles
import '@common/styles/pages/case-studies.css'

// Packages
import React from 'react'
import { graphql, PageProps } from 'gatsby'

// Components
import Footer from '@components/Footer'
import Meta from '@components/Meta'
import TestimonialSlider from '@modules/common/components/TestimonialSlider'
import CaseStudy from '@modules/common/components/CaseStudy'

// Common
import { TypeCaseStudy } from '@common/types/CaseStudy'
import { TypeTestimonial } from '@common/types/Testimonial'

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

        <div>
          <div className="CaseStudies-items">
            {caseStudies.map((caseStudy, idx: number) => {
              const layout = (idx + 1) % 2 === 0 ? 'right' : 'left'
              return (
                <>
                  <CaseStudy
                    key={caseStudy.slug}
                    buttonStyleType="solid-purple"
                    caseStudy={caseStudy}
                    layout={layout}
                    taglineRichText
                  />
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
