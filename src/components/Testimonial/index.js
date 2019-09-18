// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Utils

// Styled Components
import TestimonialContainer from './TestimonialContainer'

const Testimonial = ({
  name,
  headshotSrc,
  headshotSrcSet,
  companyRole,
  company,
  testimonial,
}) => (
  <TestimonialContainer>
    <p className="testimonial">{testimonial}</p>
    <div className="client">
      <div className="client-img">
        <img
          src={headshotSrc}
          srcSet={headshotSrcSet}
          alt={`${name} Headshot`}
        />
      </div>
      <div className="client-details">
        <p className="client-name">{name}</p>
        <p className="client-company">{`${companyRole}, ${company}`}</p>
      </div>
    </div>
  </TestimonialContainer>
)

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  headshotSrc: PropTypes.string.isRequired,
  headshotSrcSet: PropTypes.string.isRequired,
  companyRole: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
}
export default Testimonial
