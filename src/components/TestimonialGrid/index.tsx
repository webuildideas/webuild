// Packages
import React from 'react'
import Masonry from 'react-masonry-css'

// Common
import { TypeTestimonial } from '@common/types/Testimonial'

// Components
import Testimonial from '@modules/common/components/Testimonial'

// Styles
import * as S from './style'

interface Props {
  testimonials: TypeTestimonial[]
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
