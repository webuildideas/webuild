// Packages
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../../utils/typography'

const PageIntroContainer = styled.div`
  padding: ${() => rhythmUnit(2.75)} 0 ${() => rhythmUnit(2.75)};
  text-align: center;
  background-color: ${props => (props.bgColor ? props.bgColor : '')};

  h1 {
    color: ${props => props.theme.black};
    text-align: center;
    margin-bottom: ${() => rhythmUnit(1.25)};
  }

  h2 {
    color: ${props => props.theme.grey};
    text-align: center;
    max-width: 39.375rem;
    margin: 0 auto;
    line-height: 1.6;
    font-weight: 400;
  }
`

export default PageIntroContainer
