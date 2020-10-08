// Packages
import styled from 'styled-components'
import { Slide, Slider, Dot, DotGroup, DotProps } from 'pure-react-carousel'

// Utils
import { rhythmUnit } from '../../common/utils/typography'

/**
 * The Slides Container
 */
export const TestimonialSlider = styled(Slider)`
  max-height: 380px;
  @media (min-width: 350px) {
    max-height: 360px;
  }
  @media (min-width: 400px) {
    max-height: 275px;
  }
  @media (min-width: 768px) {
    max-height: 200px;
  }
  @media (min-width: 1024px) {
    max-height: 200px;
  }
`

/**
 * The Carousel Slide container
 */
export const TestimonialSlide = styled(Slide)`
  cursor: grab;
`

/**
 * The Actual Testimonial Copy
 */
export const Testimonial = styled.blockquote`
  font-size: ${(props) => props.theme.f2};
  line-height: 1.4;
  text-align: center;
  @media (min-width: 1090px) {
    text-align: left;
  }
`

/**
 * The Container for Large Testimonial Dots
 */
export const TestimonialDots = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 1090px) {
    justify-content: flex-start;
  }
`

/**
 * The Actual Large Testimonial dots containing headshot, name, role
 */
export const TestimonialDot = styled(Dot)<DotProps>`
  display: none;
  align-items: center;
  text-align: left;
  border: none;
  background: none;
  opacity: 0.25;
  transition: opacity 500ms ease;
  padding: 0;

  &:not(:last-of-type) {
    @media (min-width: 1090px) {
      margin-right: ${() => rhythmUnit(1.25)};
    }
  }

  &.carousel__dot--selected {
    display: inline-flex;
    opacity: 1;
  }

  &:disabled {
    color: inherit;
  }

  @media (min-width: 1090px) {
    display: inline-flex;
  }

  .Testimonial__client-details {
    h5 {
      font-size: ${(props) => props.theme.f3};
      line-height: 1.2;
    }
    p {
      font-size: ${(props) => props.theme.f3};
      letter-spacing: 0.5px;
      @media (min-width: 860px) {
        ${(props) => props.theme.f4};
      }
    }
  }

  .Testimonial__client-headshot {
    width: 60px;
    height: 60px;
    margin-right: ${() => rhythmUnit(0.5)};
    border-radius: 50%;
    overflow: hidden;
    img,
    picture {
      border-radius: 50%;
      overflow: hidden;
    }
  }
`

/**
 * The Dots Group that shows on mobile.
 */
export const TestimonialDotGroup = styled(DotGroup)`
  display: flex;
  justify-content: center;
  margin-top: ${() => rhythmUnit(1.5)};
  @media (min-width: 1090px) {
    display: none;
  }
  .carousel__dot {
    width: 10px;
    height: 10px;
    padding: 0;
    border-radius: 50%;
    border: none;
    background-color: ${(props) => props.theme.snow};
    &.carousel__dot--selected {
      background-color: ${(props) => props.theme.bisonHide};
    }
    &:not(:last-of-type) {
      margin-right: ${() => rhythmUnit(0.75)};
    }
  }
`
