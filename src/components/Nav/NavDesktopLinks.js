import styled from 'styled-components'

const NavDesktopLinks = styled.ul`
  display: none;
  width: 360px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 120px);
    align-self: center;
  }

  li a {
    position: relative;
    text-transform: uppercase;
    font-size: ${props => props.theme.f7};
    letter-spacing: ${props => props.theme.tracked};
    font-weight: 800;
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
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
    }
  }
`

export default NavDesktopLinks
