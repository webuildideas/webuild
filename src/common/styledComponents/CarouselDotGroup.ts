// Packages
import styled from 'styled-components'
import { DotGroup } from 'pure-react-carousel'

// Common
import { rhythmUnit } from '@common/utils/typography'

const CarouselDotGroup = styled(DotGroup)`
  display: flex;
  justify-content: center;
  padding: 0 ${() => rhythmUnit(0.5)};
  flex-wrap: wrap;
  margin-top: ${() => rhythmUnit(1)};
  .carousel__dot {
    width: 10px;
    height: 10px;
    padding: 0;
    border-radius: 50%;
    border: none;
    background-color: #e7e7e7;
    margin-bottom: ${() => rhythmUnit(0.5)};
    &.carousel__dot--selected {
      background-color: ${(props) => props.theme.bisonHide};
    }
    &:not(:last-of-type) {
      margin-right: ${() => rhythmUnit(0.6)};
      @media (min-width: 768px) {
        margin-right: ${() => rhythmUnit(0.75)};
      }
    }
  }
`
export default CarouselDotGroup
