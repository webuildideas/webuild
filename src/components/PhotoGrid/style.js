// Packages
import styled from 'styled-components'

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 15vh);
  align-items: start;
  justify-items: center;
  grid-gap: 20px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`

export const PhotoItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  &[data-photo='1'] {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  &[data-photo='2'] {
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  &[data-photo='3'] {
    grid-column-start: 5;
    grid-column-end: 7;
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
    grid-column-start: 5;
    grid-column-end: 7;
    grid-row-start: 2;
    grid-row-end: 4;
  }
  &[data-photo='6'] {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`
