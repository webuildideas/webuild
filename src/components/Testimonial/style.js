// Packages
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { rhythmUnit } from '../../utils/typography'

export const Testimonial = styled(motion.div)`
  background-color: ${props => props.theme.white};
  min-width: 100%;
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
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 850px) {
    display: grid;
    grid-template-columns: 1fr 0.75fr;
    max-width: 1100px;
    .Testimonial {
      letter-spacing: 0.05em;
    }
    .Testimonial__client-img {
      display: none;
    }
  }

  .Testimonial__client-featured-img {
    position: relative;
    display: none;
    /* overflow-y: hidden; */
    @media (min-width: 850px) {
      display: block;
    }
    .img-container {
      display: block;
      position: absolute;
      right: -25px;
      bottom: -40px;
      overflow-y: hidden;
    }
    img {
      display: block;
      /* position: absolute; */
      right: -25px;
      bottom: -40px;
    }
  }
`
