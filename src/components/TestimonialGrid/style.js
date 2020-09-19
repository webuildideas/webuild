// Packages
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../../utils/typography'

export const TestimonialGrid = styled.div`
  /* display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-gap: ${() => rhythmUnit(1)};

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  } */
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    margin-bottom: 30px;
  }
`
