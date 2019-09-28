// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Styled Components
import TestimonialGridContainer from './TestimonialGridContainer'

// Components
import Testimonial from '../Testimonial'

const TestimonialGrid = ({ testimonials }) => (
  <TestimonialGridContainer>
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
  </TestimonialGridContainer>
)

TestimonialGrid.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      name: PropTypes.string,
      role: PropTypes.string,
      testimonial: PropTypes.shape({
        testimonial: PropTypes.string,
      }),
      headShot: PropTypes.shape({
        fixed: PropTypes.shape({
          src: PropTypes.string,
          srcSet: PropTypes.string,
        }),
      }),
    })
  ).isRequired,
}

export default TestimonialGrid
