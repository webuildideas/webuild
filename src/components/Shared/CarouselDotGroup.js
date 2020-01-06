// Packages
import styled from 'styled-components'
import { DotGroup } from 'pure-react-carousel'

// Utils
import { rhythmUnit } from '../../utils/typography'

const CarouselDotGroup = styled(DotGroup)`
  display: flex;
  justify-content: center;
  .carousel__dot {
    width: 10px;
    height: 10px;
    padding: 0;
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.snow};
    &.carousel__dot--selected {
      background-color: ${props => props.theme.bisonHide};
    }
    &:not(:last-of-type) {
      margin-right: ${() => rhythmUnit(0.75)};
    }
  }
`
export default CarouselDotGroup
