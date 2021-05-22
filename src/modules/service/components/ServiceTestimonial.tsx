// Packages
import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Img from 'gatsby-image'

// Common
import { TypeTestimonial } from '@common/types/Testimonial'

// Style
import './styles/ServiceTestimonial.css'

interface Props {
  testimonial: TypeTestimonial
}

const ServiceTestimonial = ({ testimonial }: Props) => {
  return (
    <div className="ServiceTestimonial">
      <blockquote className="ServiceTestimonial-quote text-h3">
        {renderRichText(testimonial.quote)}
      </blockquote>
      <div className="ServiceTestimonial-cite">
        <div className="ServiceTestimonial-cite-copy">
          <h5 className="text-caption font-extrabold">{testimonial.name}</h5>
          <p className="text-caption">
            {testimonial.role}, <span>{testimonial.company}</span>
          </p>
        </div>
        {testimonial.featuredHeadshot?.fluid ? (
          <div className="ServiceTestimonial-cite-image">
            <Img
              alt={`${testimonial.name} Headshot`}
              durationFadeIn={100}
              fadeIn
              fluid={testimonial.featuredHeadshot?.fluid}
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ServiceTestimonial
