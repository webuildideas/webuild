// Packages
import styled from 'styled-components'

import { rhythmUnit } from '../../utils/typography'

export const Testimonial = styled.div`
  background-color: ${props => props.theme.white};
  max-width: 26.75rem;
  padding: ${() => rhythmUnit(1)};

  @media (min-width: 425px) {
    padding: ${() => rhythmUnit(1.25)};
  }

  .Testimonial {
    font-size: ${props => props.theme.f3};
    line-height: 1.6;
    margin-bottom: ${() => rhythmUnit(1)};
    span {
      font-weight: 700;
    }
  }

  .Testimonial__client {
    display: flex;
    align-items: center;
  }

  .Testimonial__client-img {
    min-width: 50px;
    min-height: 50px;
    width: 50px;
    height: 50px;
    margin-right: ${() => rhythmUnit(0.5)};
    border-radius: 50%;
    overflow: hidden;
  }

  .Testimonial__client-name {
    font-size: ${props => props.theme.f4};
    font-weight: 700;
    margin-bottom: ${() => rhythmUnit(0.25)};
  }

  .Testimonial__client-company {
    font-size: ${props => props.theme.f4};
    font-weight: 400;
    line-height: 1.3;
  }
`

// Modifier for the large featured Testimonial
export const FeaturedTestimonial = styled(Testimonial)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1100px;

  .Testimonial__client-featured-img {
    position: relative;
    img {
      display: block;
      position: absolute;
      right: -25px;
      bottom: -40px;
    }
  }
`
