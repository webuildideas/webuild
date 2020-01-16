// Packages
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../../utils/typography'

export const Footer = styled.footer`
  background-color: ${props => props.theme.vulcan};
  color: #fff;
  padding: ${() => `${rhythmUnit(3.75)} 0 ${rhythmUnit(2)}`};

  .Footer__btn {
    transition: 500ms all ease;
    /* margin-bottom: ${() => rhythmUnit(1)}; */
    &:hover {
      span.border {
        border: 1px solid #fff;
      }
    }
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
    padding-top: ${() => rhythmUnit(2)};
    margin-top: ${() => rhythmUnit(2.75)};
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
      margin-bottom: ${() => rhythmUnit(1.25)};
    }
    color: ${props => props.theme.comet};
    a {
      color: #fff;
    }
  }
`
