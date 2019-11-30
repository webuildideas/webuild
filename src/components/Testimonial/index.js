// Packages
import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

// Styled Components
import * as S from './style'

const Testimonial = ({
  children,
  name,
  headshot,
  companyRole,
  company,
  isStory,
  isFeatured,
}) => {
  /**
   * If isStory is true the component is being rendered in Storybook
   * Storybook currently has errors with gatsby-img due to GraphQL queries
   */
  const renderHeadshot = () =>
    isStory ? (
      <img alt={`${name} Headshot`} src={headshot} />
    ) : (
      <Img
        alt={`${name} Headshot`}
        fixed={headshot}
        style={{ width: '100%', height: '100%' }}
      />
    )

  return isFeatured ? (
    <S.FeaturedTestimonial>
      <div className="Testimonial__content">
        <p className="Testimonial">{children}</p>
        <div className="Testimonial__client">
          <div className="Testimonial__client-details">
            <p className="Testimonial__client-name">{name}</p>
            <p className="Testimonial__client-company">{`${companyRole}, ${company}`}</p>
          </div>
        </div>
      </div>
      <div className="Testimonial__client-featured-img">{renderHeadshot()}</div>
    </S.FeaturedTestimonial>
  ) : (
    <S.Testimonial>
      <p className="Testimonial">{children}</p>
      <div className="Testimonial__client">
        <div className="Testimonial__client-img">{renderHeadshot()}</div>
        <div className="Testimonial__client-details">
          <p className="Testimonial__client-name">{name}</p>
          <p className="Testimonial__client-company">{`${companyRole}, ${company}`}</p>
        </div>
      </div>
    </S.Testimonial>
  )
}

Testimonial.propTypes = {
  children: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  companyRole: PropTypes.string.isRequired,
  headshot: PropTypes.object,
  isFeatured: PropTypes.bool,
  isStory: PropTypes.bool,
  name: PropTypes.string.isRequired,
}

Testimonial.defaultProps = {
  isFeatured: false,
  isStory: false,
}

export default Testimonial
