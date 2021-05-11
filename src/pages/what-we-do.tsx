import React from 'react'
import { graphql } from 'gatsby'
import { TypeService } from '@common/types/Service'
import { TypeTestimonial } from '@common/types/Testimonial'

import TestimonialSlider from '@modules/common/components/TestimonialSlider'

interface Props {
  data: {
    contentfulServices: {
      testimonials: TypeTestimonial[]
    }
    allContentfulService: {
      nodes: TypeService[]
    }
  }
}

const WhatWeDo = ({
  data: {
    contentfulServices: page,
    allContentfulService: { nodes: services }
  }
}: Props) => {
  console.log('PAge', page.testimonials)
  console.log(services)
  return (
    <>
      <main className="pt-8 px-6">
        <div className="mb-16">
          <h1 className="text-h1 mb-4">
            The only design partner you'll ever need
          </h1>
          <h2 className="text-title-subheading">
            We're more than a team that gets things done. We're a passionate
            group of design pros who strategize, design, test, and rapidly
            iterate digital products to deliver the very best user experience.
          </h2>
        </div>

        <div>
          <div>
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

        <div>
          <TestimonialSlider testimonials={page.testimonials} />
        </div>
      </main>
    </>
  )
}

export const WHAT_WE_DO_QUERY = graphql`
  query whatWeDoQuery {
    contentfulServices(title: { eq: "What we do" }) {
      testimonials {
        company
        name
        role
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
        quote {
          raw
        }
      }
    }
    allContentfulService {
      nodes {
        title
        subtitle
        tagline
      }
    }
  }
`

export default WhatWeDo
