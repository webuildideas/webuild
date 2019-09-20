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
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 0.2px;
  padding: 2.1875rem 2.5rem;

  .CloseIcon {
    cursor: pointer;
    display: none;
  }

  .OverlayNavList {
    padding-top: 11rem;
  }

  .OverlayNavLink {
    margin-bottom: 3rem;
    position: relative;
  }
`

export default OverlayNavContainer
