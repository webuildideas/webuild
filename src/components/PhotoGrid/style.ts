// Packages
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 17vh);
  @media (min-width: 825px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 20vh);
  }
  align-items: start;
  justify-items: center;
  grid-gap: 20px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`

export const PhotoItem = styled(motion.div)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center center;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  &[data-photo='3'] {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  @media (min-width: 825px) {
    &[data-photo='1'] {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 2;
    }

    &[data-photo='2'] {
      grid-column-start: 2;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 3;
    }

    &[data-photo='3'] {
      grid-column-start: 4;
      grid-column-end: 6;
      grid-row-start: 1;
      grid-row-end: 2;
    }

    &[data-photo='4'] {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 3;
    }

    &[data-photo='5'] {
      grid-column-start: 4;
      grid-column-end: 6;
      grid-row-start: 2;
      grid-row-end: 4;
    }

    &[data-photo='6'] {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 3;
      grid-row-end: 4;
    }
  }
`
