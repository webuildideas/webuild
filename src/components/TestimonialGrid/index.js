// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Styled Components
import TestimonialGridContainer from './TestimonialGridContainer'

// Components
import Testimonial from '../Testimonial'

const TestimonialGrid = ({ testimonials }) => (
  <TestimonialGridContainer>
    {/**
     * We check to see if node exists because this component needs
     * to handle different responses from Contentful
     * When node is present that means we are on the listing page
     * when it is not present we are dealing with realtional field
     * data from contentful that is currently used on the HomePage
     * of the webuild site.
     */}
    {testimonials.map(t =>
      t.node ? (
        <Testimonial
          key={t.node.name}
          name={t.node.name}
          headshotSrc={t.node.headshot.fixed.src}
          headshotSrcSet={t.node.headshot.fixed.srcset}
          headshot={t.node.headshot.fixed}
          companyRole={t.node.role}
          company={t.node.company}
          testimonial={t.node.testimonial.testimonial}
        />
      ) : (
        <Testimonial
          key={t.name}
          name={t.name}
          headshot={t.headshot.fixed}
          headshotSrc={t.headshot.fixed.src}
          headshotSrcSet={t.headshot.fixed.srcset}
          companyRole={t.role}
          company={t.company}
          testimonial={t.testimonial.testimonial}
        />
      )
    )}
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
