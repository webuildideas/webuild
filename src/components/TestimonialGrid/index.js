// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Styled Components
import * as S from './style'

// Components
import Testimonial from '../Testimonial'
/**
 * We check to see if node exists because this component needs
 * to handle different responses from Contentful
 * When node is present that means we are on the listing page
 * when it is not present we are dealing with realtional field
 * data from contentful that is currently used on the HomePage
 * of the webuild site.
 */
const TestimonialGrid = ({ testimonials }) => (
  <S.TestimonialGrid>
    {testimonials.map(t =>
      t.node ? (
        <Testimonial
          key={t.node.name}
          company={t.node.company}
          companyRole={t.node.role}
          headshot={t.node.headshot.fixed}
          name={t.node.name}
        >
          {t.node.testimonial.testimonial}
        </Testimonial>
      ) : (
        <Testimonial
          key={t.name}
          company={t.company}
          companyRole={t.role}
          headshot={t.headshot.fixed}
          name={t.name}
        >
          {t.testimonial.testimonial}
        </Testimonial>
      )
    )}
  </S.TestimonialGrid>
)

TestimonialGrid.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      headShot: PropTypes.shape({
        fixed: PropTypes.shape({
          src: PropTypes.string,
          srcSet: PropTypes.string,
        }),
      }),
      name: PropTypes.string,
      role: PropTypes.string,
      testimonial: PropTypes.shape({
        testimonial: PropTypes.string,
      }),
    })
  ).isRequired,
}

export default TestimonialGrid
