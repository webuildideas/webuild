// Packages
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

// Styles
// import { TypeGatsbyImageFluid } from '@common/types/GatsbyImage'

interface Props {
  testimonial: {
    quote: string
    personInfo: {
      name: string
      title: string
      company: string
    }
    image: any
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
            <GatsbyImage
              className="headshot"
              durationFadeIn={150}
              fadeIn
              image={testimonial.image.childImageSharp.gatsbyImageData}
            />
          </div>
          <div className="ServiceTestimonial-cite-image md:hidden">
            <GatsbyImage
              className="headshot"
              durationFadeIn={150}
              fadeIn
              image={testimonial.image.childImageSharp.gatsbyImageData}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyTestimonial
