// Packages
import React from 'react'
import Masonry from 'react-masonry-css'

// Types
import { Testimonials } from '../../types/Testimonial'

// Styled Components
import * as S from './style'

// Components
import Testimonial from '../Testimonial'

interface Props {
  testimonials: Testimonials
}

const TestimonialGrid = ({ testimonials }: Props) => {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    900: 2,
    700: 1,
    500: 1
  }
  return (
    <S.TestimonialGrid>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {testimonials.map((t) => (
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

export default TestimonialGrid
