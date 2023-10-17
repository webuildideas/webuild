// Package
import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// Common
import { TypeService } from '@common/types/Service'

// Components
import OtherServices from '@modules/service/components/OtherServices'
import ServicesStickyNav from '@modules/service/components/ServicesStickyNav'
import NewFooter from '@modules/common/components/NewFooter'
import OpportunityForm from '@modules/forms/OpportunityForm'
import ServiceTestimonial from '@modules/service/components/ServiceTestimonial'
import CaseStudy from '@modules/common/components/CaseStudy'
import SimpleArrowLeft from '@static/svgs/common/arrows/arrow-simple-left.inline.svg'

// Styles
import '@common/styles/templates/service.css'
import Meta from '@components/Meta'

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
  return (
    <>
      <Meta
        bodyAttributes={{ class: 'new-nav-padding' }}
        description={service.seo?.seoDescription?.seoDescription}
        location={location}
        title={service.seo?.seoTitle}
      />
      <main className="Service">
        <div className="Service-header">
          <AniLink
            bg="#286AFF"
            className="Service-header-all block mb-8 hover:text-electricViolet"
            cover={true}
            direction="left"
            duration={1.25}
            to="/what-we-do/"
          >
            <SimpleArrowLeft className="Service-header-icon" />
            <span>All Services</span>
          </AniLink>
          <h1 className="text-h1 mb-4">{service.title}</h1>
          <h2 className="text-h2 font-extrabold">{service.subtitle}</h2>
        </div>

        <div className="Service-intro">
          <div className="Service-intro-img">
            <img
              alt={`${service.title} illustration`}
              src={service.illustration.file.url}
            />
          </div>
          <div className="Service-intro-copy">
            {renderRichText(service?.intro, introRichTextOptions)}
          </div>
        </div>

        <div className="Service-content-block first-content-block">
          <ServicesStickyNav services={otherServices} />
          <div className="content">
            {renderRichText(service?.firstContentBlock, contentBlockOptions)}
          </div>
        </div>

        {service.testimonials
          ? service?.testimonials.map((testimonial) => {
              return (
                <ServiceTestimonial
                  key={testimonial?.name}
                  testimonial={testimonial}
                />
              )
            })
          : null}

        {service?.secondContentBlock ? (
          <div className="Service-content-block">
            {renderRichText(service.secondContentBlock, contentBlockOptions)}
          </div>
        ) : null}

        {service?.caseStudies?.length > 0 ? (
          <div className="Service-case-studies">
            {service?.caseStudies.map((study, idx: number) => {
              const layout = (idx + 1) % 2 === 0 ? 'right' : 'left'
              return (
                <CaseStudy
                  key={study?.slug}
                  buttonStyleType="solid-purple"
                  caseStudy={study}
                  layout={layout}
                  taglineRichText
                />
              )
            })}
          </div>
        ) : null}

        <div className="Service-opportunity-form">
          <OpportunityForm buttonText="Let's Meet" location={location.href} />
        </div>
        <OtherServices services={otherServices} />
      </main>
      <NewFooter />
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
        mainHeadshot {
          gatsbyImageData(width: 500)
        }
        featuredHeadshot {
          gatsbyImageData(width: 500)
        }
      }
      caseStudies {
        name
        tagline
        taglineRichText {
          raw
        }
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
          gatsbyImageData(width: 625)
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
      seo {
        seoTitle
        seoDescription {
          seoDescription
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
        otherServicesGif {
          file {
            url
          }
        }
      }
    }
  }
`

export default Service
