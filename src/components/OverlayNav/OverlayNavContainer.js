// Packages
import styled from 'styled-components'

const OverlayNavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.blue};
  font-size: ${props => props.theme.f2};
  font-weight: 800;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`

export default OverlayNavContainer
