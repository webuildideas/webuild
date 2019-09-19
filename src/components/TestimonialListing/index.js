// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Styled Components
import TestimonialGrid from './TestimonialGrid'

// Components
import Testimonial from '../Testimonial'

const TestimonialListing = ({ testimonials }) => (
  <TestimonialGrid>
    {testimonials.map(({ node: testimonial }) => (
      <Testimonial
        key={testimonial.name}
        name={testimonial.name}
        headshotSrc={testimonial.headshot.fixed.src}
        headshotSrcSet={testimonial.headshot.fixed.srcset}
        companyRole={testimonial.role}
        company={testimonial.company}
        testimonial={testimonial.testimonial.testimonial}
      />
    ))}
  </TestimonialGrid>
)

TestimonialListing.propTypes = {
  testimonials: PropTypes.array.isRequired,
}

export default TestimonialListing
