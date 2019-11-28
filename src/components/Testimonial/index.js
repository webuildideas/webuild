// Packages
import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

// Styled Components
import { TestimonialContainer } from './style'

const Testimonial = ({
  name,
  headshot,
  companyRole,
  company,
  testimonial,
  isStory,
}) => (
  <TestimonialContainer>
    <p className="testimonial">{testimonial}</p>
    <div className="client">
      <div className="client-img">
        {isStory ? (
          <img src={headshot} alt={`${name} Headshot`} />
        ) : (
          <Img
            style={{ width: '100%', height: '100%' }}
            fixed={headshot}
            alt={`${name} Headshot`}
          />
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
  headshot: PropTypes.object,
  companyRole: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
  isStory: PropTypes.bool,
}

Testimonial.defaultProps = {
  isStory: false,
}

export default Testimonial
