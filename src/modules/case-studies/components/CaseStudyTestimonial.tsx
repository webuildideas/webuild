// Packages
import React from 'react'
import Img from 'gatsby-image'

// Styles
import { TypeGatsbyImageFluid } from '@common/types/GatsbyImage'

interface Props {
  testimonial: {
    quote: string
    personInfo: {
      name: string
      title: string
      company: string
    }
    image: TypeGatsbyImageFluid
  }
}

const CaseStudyTestimonial = ({ testimonial }: Props) => {
  return (
    <div className="QuadpayProductDesign-testimonial pb-12">
      <div className="ServiceTestimonial">
        <blockquote
          className="ServiceTestimonial-quote text-h3"
          dangerouslySetInnerHTML={{ __html: testimonial.quote }}
        />
        <div className="ServiceTestimonial-cite">
          <div className="ServiceTestimonial-cite-copy">
            <h5 className="text-caption text-base font-extrabold">
              {testimonial.personInfo.name}
            </h5>
            <p className="text-caption text-base">
              {testimonial.personInfo.title},{' '}
              <span className="block">{testimonial.personInfo.company}</span>
            </p>
          </div>
          <div className="ServiceTestimonial-cite-image hidden md:block">
            <Img
              className="headshot"
              durationFadeIn={150}
              fadeIn
              fluid={testimonial.image.childImageSharp.fluid}
            />
          </div>
          <div className="ServiceTestimonial-cite-image md:hidden">
            <Img
              className="headshot"
              durationFadeIn={150}
              fadeIn
              fluid={testimonial.image.childImageSharp.fluid}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyTestimonial
