import styled from 'styled-components'

const NavDesktopLinks = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  width: 300px;
  align-self: center;
  li a {
    text-transform: uppercase;
    font-size: ${props => props.theme.f7};
    font-weight: 800;
  }
`

export default NavDesktopLinks
