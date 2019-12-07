// Packages
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../../utils/typography'

export const FooterContainer = styled.footer`
  background-color: ${props => props.theme.vulcan};
  color: #fff;
  padding: ${() => `${rhythmUnit(2.75)} ${rhythmUnit(1)} ${rhythmUnit(1.25)}`};
  margin-top: ${() => rhythmUnit(3.75)};
  @media (min-width: 1140px) {
    padding-left: 0;
    padding-right: 0;
  }
  .Footer__title {
    font-size: ${props => props.theme.f3};
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: ${props => props.theme.tracked};
    margin-bottom: ${() => rhythmUnit(0.75)};
  }

  .Footer__subtitle {
    font-size: ${props => props.theme.f2};
    font-weight: 400;
    max-width: 520px;
    margin-bottom: ${() => rhythmUnit(1)};
  }

  .Footer__btn {
    display: inline-block;
    font-size: ${props => props.theme.f4};
    font-weight: 800;
    text-transform: uppercase;
    line-height: 1;
    padding: ${() => ` ${rhythmUnit(0.5)} ${rhythmUnit(0.75)}`};
    max-width: 14rem;
    letter-spacing: 0.05em;
    background-color: #fff;
    color: ${props => props.theme.vulcan};
    span {
      margin-right: 4px;
    }
  }

  .Footer__follow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 800;
    text-transform: uppercase;
    border-top: 1px solid ${props => props.theme.tuna};
    padding-top: ${() => rhythmUnit(1.5)};
    margin-top: ${() => rhythmUnit(1.5)};
    font-size: ${props => props.theme.f4};
  }

  .Footer__copyright {
    color: ${props => props.theme.comet};
  }

  .Footer__social {
    color: ${props => props.theme.comet};
    a {
      color: #fff;
    }
  }
`
