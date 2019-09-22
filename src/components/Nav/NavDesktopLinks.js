import styled from 'styled-components'

const NavDesktopLinks = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 120px);
  width: 360px;
  align-self: center;

  @media screen and (max-width: 768px) {
    display: none;
  }

  li a {
    text-transform: uppercase;
    font-size: ${props => props.theme.f7};
    letter-spacing: ${props => props.theme.tracked};
    font-weight: 800;
  }
`

export default NavDesktopLinks
