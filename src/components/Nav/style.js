// Packages
import styled from 'styled-components'

export const NavContainer = styled.header`
  position: relative;
  width: 100%;
  box-shadow: ${props =>
    props.isPinned ? '0px 4px 8px rgba(0, 0, 0, 0.1)' : ''};
  background-color: ${props =>
    props.isPinned ? props.theme.white : 'rgba(0,0,0,0)'};
  padding-top: ${props => (props.isPinned ? '0.875rem' : '1.875rem')};
  padding-bottom: ${props => (props.isPinned ? '0.875rem' : '1.875rem')};

  .SiteMaxWidthContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .MenuIcon {
    cursor: pointer;
    font-size: ${props => props.theme.f2};
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`

export const NavDesktopLinks = styled.nav`
  ul {
    display: none;
    width: 100%;
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr 190px;
      align-items: center;
      grid-gap: 2rem;
    }
  }

  .Button {
    display: block;
    text-align: center;
    font-size: ${props => props.theme.f7};
  }

  li a:not(.Button) {
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
