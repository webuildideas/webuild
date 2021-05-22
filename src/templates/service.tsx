// Package
import React from 'react'
import { graphql, Link, PageProps } from 'gatsby'
import { TypeService } from '@common/types/Service'

// Styles
import '@common/styles/templates/service.css'
import OtherServices from '@modules/service/components/OtherServices'
import Footer from '@components/Footer'
import OpportunityForm from '@modules/forms/OpportunityForm'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import ServiceTestimonial from '@modules/service/components/ServiceTestimonial'

interface Props {
  data: {
    contentfulService: TypeService
    allContentfulService: {
      nodes: TypeService[]
    }
  }
  location: PageProps['location']
}

const introRichTextOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="text-title-subheading">{children}</p>
    )
  },
  renderMark: {
    [MARKS.BOLD]: (text) => <span className="font-extrabold">{text}</span>
  }
}

const contentBlockOptions: Options = {
  renderNode: {
    [BLOCKS.HEADING_3]: (_, children) => (
      <h3 className="Service-h3 text-h3 font-extrabold">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (_, children) => (
      <h4 className="Service-h4 text-h4">{children}</h4>
    ),
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="Service-copy text-body">{children}</p>
    )
  },
  renderMark: {
    [MARKS.BOLD]: (text) => <span className="font-extrabold">{text}</span>
  }
}

const Service = ({
  data: {
    contentfulService: service,
    allContentfulService: { nodes: otherServices }
  },
  location
}: Props) => {
  // eslint-disable-next-line no-console
  console.log(service.illustration)
  return (
    <>
      <main>
        <div className="Service-header">
          <Link className="block mb-8" to="/what-we-do">
            All Services
          </Link>
          <h1 className="text-h1 mb-4">{service.title}</h1>
          <h2 className="text-h2 font-extrabold">{service.subtitle}</h2>
        </div>

        <div className="Service-intro">
          <div className="Service-intro-img mb-13">
            <img
              alt={`${service.title} illustration`}
              src={service.illustration.file.url}
            />
          </div>
          <div className="Service-intro-copy">
            {renderRichText(service.intro, introRichTextOptions)}
          </div>
        </div>

        <div className="Service-content-block">
          {renderRichText(service.firstContentBlock, contentBlockOptions)}
        </div>

        {service.testimonials
          ? service.testimonials.map((testimonial) => {
              return (
                <ServiceTestimonial
                  key={testimonial.name}
                  testimonial={testimonial}
                />
              )
            })
          : null}

        {service.secondContentBlock ? (
          <div className="Service-content-block">
            {renderRichText(service.secondContentBlock, contentBlockOptions)}
          </div>
        ) : null}

        <div className="Service-opportunity-form">
          <OpportunityForm location={location.href} />
        </div>
        <OtherServices services={otherServices} />
      </main>
      <Footer />
    </>
  )
}

export const SERVICE_PAGE_QUERY = graphql`
  query servicePageQuery($slug: String!) {
    contentfulService(slug: { eq: $slug }) {
      title
      subtitle
      tagline
      intro {
        raw
      }
      firstContentBlock {
        raw
      }
      testimonials {
        company
        name
        role
        quote {
          raw
        }
        featuredHeadshot {
          fluid(maxWidth: 500) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
      caseStudies {
        name
        tagline
        slug
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
      secondContentBlock {
        raw
      }
      illustration {
        file {
          url
        }
      }
      otherServicesIllustration {
        file {
          url
        }
      }
    }
    allContentfulService(filter: { slug: { ne: $slug } }) {
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

export default Service
