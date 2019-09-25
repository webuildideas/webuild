// Packages
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../../utils/typography'

const ContactContainer = styled.div`
  text-align: center;
  padding-top: ${() => rhythmUnit(3.25)};
  padding-bottom: ${() => rhythmUnit(3.5)};
  padding-left: ${() => rhythmUnit(1)};
  padding-right: ${() => rhythmUnit(1)};
  font-size: ${props => props.theme.f5};
  max-width: 37rem;
  margin: 0 auto;
  @media (min-width: 700px) {
    padding-left: 0;
    padding-right: 0;
  }

  h5 {
    text-transform: uppercase;
    margin-bottom: ${() => rhythmUnit(0.75)};
  }
  p {
    color: ${props => props.theme.grey};
    margin-bottom: ${() => rhythmUnit(1.25)};
    font-weight: 400;
    line-height: 1.6;
  }

  a {
    font-weight: 900;
    text-transform: uppercase;
    font-size: ${props => props.theme.f2};
    transition: color ease-in 250ms;
    &:hover {
      color: ${props => props.theme.blue};
    }
  }
  .wave-emoji {
    display: inline-block;
    margin-right: ${() => rhythmUnit(0.5)};
  }

  .email {
    position: relative;
    display: inline-block;
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      bottom: -6px;
      left: 0;
      background-color: ${props => props.theme.blackHover};
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out 0s;
    }
    &:hover:before {
      visibility: visible;
      transform: scaleX(1);
      background-color: ${props => props.theme.blueHover};
    }
  }
`

export default ContactContainer
