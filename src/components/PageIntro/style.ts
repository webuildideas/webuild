// Packages
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../../common/utils/typography'

interface StyleProps {
  maxWidth: number
}

export const PageIntro = styled.section<StyleProps>`
  font-size: ${(props) => props.theme.f1};
  line-height: 1.2;
  padding: ${() => `${rhythmUnit(2.75)} 0 0`};

  @media (min-width: 1100px) {
    padding-left: 0;
    padding-right: 0;
  }

  h1 {
    font-weight: 400;
  }

  .PageIntro__inner {
    max-width: ${(props) => props.maxWidth}px;
  }

  span {
    font-weight: 900;
  }
`
