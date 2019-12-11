// Packages
import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

// Styled Components
import * as S from './style'

/**
 * Use the `Testimonial` component to display client testimonials
 * and display either in a grid view or as full width "featured".
 */
const Testimonial = ({
  children,
  name,
  headshot,
  companyRole,
  company,
  isStory,
  isFeatured,
  ...props
}) => {
  /**
   * If isStory is true the component is being rendered in Storybook
   * Storybook currently has errors with gatsby-img due to GraphQL queries
   */
  const renderHeadshot = () => {
    if (isStory || isFeatured) {
      return <img alt={`${name} Headshot`} src={headshot} />
    }

    return (
      <Img
        alt={`${name} Headshot`}
        fixed={headshot}
        style={{ width: '100%', height: '100%' }}
      />
    )
  }

  return isFeatured ? (
    <S.FeaturedTestimonial {...props}>
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
    <S.Testimonial {...props}>
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
  /** The actual copy for testimonial */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /** The company the client represents */
  company: PropTypes.string.isRequired,
  /** The role of the client */
  companyRole: PropTypes.string.isRequired,
  /** The headshot of the client */
  headshot: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** Whether the testimonial is the featured type */
  isFeatured: PropTypes.bool,
  /** Whether it is displaying in storybook (does not use gatsby-image when true) */
  isStory: PropTypes.bool,
  /** The name of the client */
  name: PropTypes.string.isRequired,
}

Testimonial.defaultProps = {
  isFeatured: false,
  isStory: false,
}

export default Testimonial
