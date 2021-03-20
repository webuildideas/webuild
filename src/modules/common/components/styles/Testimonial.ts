// Packages
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Common
import { rhythmUnit } from '@common/utils/typography'

export const Testimonial = styled(motion.div)`
  background-color: ${(props) => props.theme.white};
  min-width: 100%;
  max-width: 26.75rem;
  padding: ${() => rhythmUnit(1)};

  @media (min-width: 425px) {
    padding: ${() => rhythmUnit(1.25)};
  }

  .Testimonial {
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
`

// Modifier for the large featured Testimonial
export const FeaturedTestimonial = styled(Testimonial)`
  margin-left: auto;
  margin-right: auto;
  padding: 0;

  @media (min-width: 850px) {
    display: grid;
    grid-template-columns: 1fr 0.75fr;
    max-width: 1100px;
    .Testimonial {
      letter-spacing: 0.5px;
    }
    .Testimonial__client-img {
      display: none;
    }
  }

  .Testimonial__content {
    padding: ${() => rhythmUnit(1)};

    @media (min-width: 425px) {
      padding: ${() => rhythmUnit(1.25)};
    }
  }

  .Testimonial__client-img {
    border-radius: 50%;
    .img-container {
      border-radius: 50%;
      img {
        border-radius: 50%;
      }
    }
  }

  .Testimonial__client-featured-img {
    position: relative;
    display: none;
    overflow-y: visible;
    @media (min-width: 850px) {
      display: block;
    }

    .overflow-container {
      overflow-y: hidden;
      position: relative;
      height: 150%;
      bottom: 50%;
    }

    .img-container {
      display: block;
      position: absolute;
      width: 100%;
      bottom: 0;
    }

    .gatsby-image-wrapper {
      width: 100%;
      overflow: visible !important;
    }
  }
`
