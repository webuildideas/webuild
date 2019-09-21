// Packages
import styled from 'styled-components'
import { animated } from 'react-spring'

const OverlayNavContainer = styled(animated.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.darkBlue};
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 0.2px;
  padding: 2.1875rem 2.5rem;
  @media (min-height: 600px) {
    font-size: 32px;
  }

  .CloseIcon {
    cursor: pointer;
    display: none;
  }

  .OverlayNavList {
    padding-top: 90px;

    @media (min-height: 600px) {
      padding-top: 120px;
    }
  }

  .OverlayNavLink {
    display: block;
    margin-bottom: 3rem;
  }

  .OverlayNav__social {
    padding-top: 60px;
    @media (min-height: 600px) {
      padding-top: 100px;
    }
    @media (min-height: 690px) {
      padding-top: 160px;
    }
    p {
      text-transform: uppercase;
      font-size: ${props => props.theme.f6};
      color: ${props => props.theme.grey};
      font-weight: 800;
      margin-bottom: 2rem;
    }
  }
`

export default OverlayNavContainer
