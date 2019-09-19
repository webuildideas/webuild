// Packages
import styled from 'styled-components'

const OverlayNavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.darkBlue};
  font-size: ${props => props.theme.f2};
  font-weight: 800;
  letter-spacing: 0.2px;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  padding: 2.1875rem 2.5rem;

  .CloseIcon {
    cursor: pointer;
    display: none;
  }

  .OverlayNavList {
    padding-top: 7.5rem;
  }

  .OverlayNavLink {
    margin-bottom: 3rem;
  }
`

export default OverlayNavContainer
