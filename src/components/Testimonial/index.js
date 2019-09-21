// Packages
import React from 'react'
import PropTypes from 'prop-types'

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
        {headshotSrcSet ? (
          <img
            src={headshotSrc}
            srcSet={headshotSrcSet}
            alt={`${name} Headshot`}
          />
        ) : (
          <img src={headshotSrc} alt={`${name} Headshot`} />
        )}
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
  headshotSrcSet: PropTypes.string,
  companyRole: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
}
export default Testimonial
