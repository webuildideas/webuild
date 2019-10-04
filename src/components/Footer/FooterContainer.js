// Packages
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../../utils/typography'

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: ${() => `0 auto ${rhythmUnit(1.75)}`};
  padding: ${() => `0 ${rhythmUnit(1)}`};
  font-size: ${props => props.theme.f7};
  text-transform: uppercase;
  font-weight: 800;
  color: ${props => props.theme.grey};
  @media (min-width: 768px) {
    justify-content: space-between;
  }
  @media (min-width: 1164px) {
    padding: 0;
  }

  a {
    color: ${props => props.theme.blue};
    &:hover {
      text-decoration: underline;
    }
  }

  .copyright {
    order: 2;
  }

  .back-home {
    order: 1;
    width: 100%;
    text-align: center;
    margin-bottom: ${() => rhythmUnit(1)};
    @media (min-width: 1100px) {
      position: relative;
      left: 80px;
    }
  }

  .follow-social {
    order: 3;
  }

  @media (min-width: 625px) {
    .copyright {
      order: 1;
    }
    .back-home {
      order: 2;
      width: auto;
    }

    .follow-social {
      order: 3;
    }
  }
`

export default FooterContainer
