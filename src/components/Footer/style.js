// Packages
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../../utils/typography'

export const Footer = styled.footer`
  background-color: ${props => props.theme.vulcan};
  color: #fff;
  padding: ${() => `${rhythmUnit(2.75)} 0 ${rhythmUnit(1.25)}`};

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
    @media (max-width: 500px) {
      flex-wrap: wrap;
    }
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
    @media (max-width: 500px) {
      width: 100%;
      order: 2;
    }
  }

  .Footer__social {
    @media (max-width: 500px) {
      width: 100%;
      order: 1;
      margin-bottom: ${() => rhythmUnit(0.5)};
    }
    color: ${props => props.theme.comet};
    a {
      color: #fff;
    }
  }
`
