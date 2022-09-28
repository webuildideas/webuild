// Packages
import React from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
// import Img from 'gatsby-image'
import { GatsbyImage } from 'gatsby-plugin-image'

// Common
import { TypeTestimonial } from '@common/types/Testimonial'

// Style
import './styles/ServiceTestimonial.css'
import { Options } from '@contentful/rich-text-react-renderer'
import { MARKS } from '@contentful/rich-text-types'

interface Props {
  testimonial: TypeTestimonial
}

const richTextOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <span className="font-extrabold">{text}</span>
  }
}

const ServiceTestimonial = ({ testimonial }: Props) => {
  console.log(testimonial)
  return (
    <div className="ServiceTestimonial">
      <blockquote className="ServiceTestimonial-quote text-h3">
        {renderRichText(testimonial.quote, richTextOptions)}
      </blockquote>
      <div className="ServiceTestimonial-cite">
        <div className="ServiceTestimonial-cite-copy">
          <h5 className="text-caption text-base font-extrabold">
            {testimonial.name}
          </h5>
          <p className="text-caption text-base">
            {testimonial.role}, <span>{testimonial.company}</span>
          </p>
        </div>
        {testimonial.mainHeadshot ? (
          <div className="ServiceTestimonial-cite-image hidden md:block">
            <GatsbyImage
              alt={`${testimonial.name} Headshot`}
              image={testimonial.mainHeadshot.gatsbyImageData}
            />
            {/* <Img
              alt={`${testimonial.name} Headshot`}
              durationFadeIn={100}
              fadeIn
              fluid={testimonial.mainHeadshot?.fluid}
            /> */}
          </div>
        ) : null}
        {testimonial.featuredHeadshot ? (
          <div className="ServiceTestimonial-cite-image md:hidden">
            <GatsbyImage
              alt={`${testimonial.name} Headshot`}
              image={testimonial.featuredHeadshot.gatsbyImageData}
            />
            {/* <Img
              alt={`${testimonial.name} Headshot`}
              durationFadeIn={100}
              fadeIn
              fluid={testimonial.featuredHeadshot?.fluid}
            /> */}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ServiceTestimonial
