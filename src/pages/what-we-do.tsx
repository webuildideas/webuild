// Packages
import React from 'react'
import { graphql, Link, PageProps } from 'gatsby'

// Common
import { TypeTestimonial } from '@common/types/Testimonial'
import { TypeService } from '@common/types/Service'

// Components
import TestimonialSlider from '@modules/common/components/TestimonialSlider'
import ServiceListing from '@modules/service/components/ServiceListing'
import ProcessSteps from '@modules/common/components/ProcessSteps'
import OpportunityForm from '@modules/forms/OpportunityForm'

// styles
import '@common/styles/pages/what-we-do.css'
import Footer from '@components/Footer'

interface Props {
  data: {
    contentfulServicesPage: {
      services: TypeService[]
      testimonials: TypeTestimonial[]
    }
  }
  location: PageProps['location']
}

const WhatWeDo = ({
  data: { contentfulServicesPage: page },
  location
}: Props) => {
  return (
    <>
      <main className="ServicesPage">
        <div className="ServicesPage-intro">
          <div className="ServicesPage-intro-inner">
            <h1 className="text-h1 mb-4 lg:mb-6">
              The only design partner you'll ever need
            </h1>
            <h2 className="text-title-subheading">
              We're more than a team that gets things done. We're a passionate
              group of design pros who strategize, design, test, and rapidly
              iterate digital products to deliver the very best user experience.
            </h2>
          </div>
        </div>

        <div className="ServicesPage-content">
          <div className="ServicesPage-sticky-links">
            <div className="ServicePages-sticky-links-inner">
              <h4 className="text-button text-left mb-3">All Services</h4>
              {page.services.map((service) => (
                <Link
                  key={service.slug}
                  className="block mb-3 text-page-navigation hover:text-electricViolet"
                  to={`/what-we-do/${service.slug}`}
                >
                  {service.shortTitle}
                </Link>
              ))}
            </div>
          </div>
          <div className="ServicesPage-content-body">
            <h3 className="text-h3 font-extrabold mb-4">
              Are you winning the game when it comes to your digital product? Or
              are you in need of a boost?
            </h3>
            <p className="text-body mb-5">
              We know building a digital product — or any business — takes guts.
              Because we’ve been there.
            </p>

            <p className="text-body mb-5">
              You not only need to reach your target audience, you need to make
              an impression, convert, retain, and grow as much as possible as
              quickly as possible. And in today’s crowded digital space,
              everyone’s jockeying for first place.
            </p>

            <p className="text-body mb-5">
              But that doesn’t scare us. Our expertise in and obsession with
              strategy, design, and optimization make us a triple threat.
            </p>

            <p className="text-body mb-5">
              With webuild on your side, you can focus on scaling your business
              and trust us to knock out the bigger design challenges that stand
              in your way.
            </p>

            <p className="text-body font-black mb-5">
              No long term contracts. No contractors to manage. No limits on
              scope. No stress.
            </p>

            <p className="text-body">
              Don’t worry. We’ve got this. And so do you.
            </p>
          </div>
        </div>

        <div className="ServicesPage-testimonials">
          <TestimonialSlider testimonials={page.testimonials} />
        </div>

        <div className="ServicesPage-services">
          <h3 className="text-h3 ServicesPage-services-title">What We Do</h3>
          {page.services.map((service) => (
            <ServiceListing key={service.slug} service={service} />
          ))}
        </div>

        <div className="ServicesPage-process">
          <div className="ServicesPage-process-copy">
            <h3 className="text-h3 ServicesPage-process-title">
              A Tried & True Approach
            </h3>
            <p className="ServicesPage-process-description text-body">
              Our powerful three-step process allows us to get to market
              efficiently, allowing us to iterate & optimize quickly to deliver
              optimal results.
            </p>
          </div>
          <div className="ServicesPage-process-steps">
            <ProcessSteps />
          </div>
        </div>
      </main>
      <div className="ServicesPage-opportunity-form">
        <OpportunityForm
          buttonText="Let's Meet"
          location={location.href}
          title="Are you with us? Let's talk."
        />
      </div>
      <Footer />
    </>
  )
}

export const WHAT_WE_DO_QUERY = graphql`
  query whatWeDoQuery {
    contentfulServicesPage(title: { eq: "What we do" }) {
      services {
        title
        shortTitle
        subtitle
        tagline
        slug
        listingIllustration {
          file {
            url
          }
        }
        listingIllustrationGif {
          file {
            url
          }
        }
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
        headshot {
          fixed(cropFocus: FACE, height: 50, width: 50) {
            ...GatsbyContentfulFixed_withWebp_noBase64
          }
        }
      }
    }
  }
`

export default WhatWeDo
