// Packages
import React from 'react'
import PropTypes from 'prop-types'
import Masonry from 'react-masonry-css'

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
const TestimonialGrid = ({ testimonials }) => {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    900: 2,
    700: 1,
    500: 1,
  }
  return (
    <S.TestimonialGrid>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {testimonials.map(t => (
          <Testimonial
            key={t.name}
            company={t.company}
            companyRole={t.role}
            headshot={t.headshot.fixed}
            name={t.name}
          >
            {t.testimonial.testimonial}
          </Testimonial>
        ))}
      </Masonry>
    </S.TestimonialGrid>
  )
}

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
