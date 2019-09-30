import styled from 'styled-components'

const NavContainer = styled.div`
  position: relative;
  box-shadow: ${props =>
    props.isPinned ? '0px 4px 8px rgba(0, 0, 0, 0.1)' : ''};
  background-color: ${props =>
    props.isPinned ? props.theme.white : 'rgba(0,0,0,0)'};
  /* transition: background-color 400ms ease-out; */
  padding: 1.875rem 2.5rem;

  .SiteMaxWidthContainer {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .Logo {
    position: relative;
    z-index: 10;
  }

  .MenuIcon {
    position: relative;
    z-index: 10;
    cursor: pointer;
    font-size: ${props => props.theme.f2};
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  // Themes
  &.nav-theme--dark {
    background: ${props => props.theme.white};
    @media screen and (min-width: 768px) {
      background: ${props => props.theme.darkBlue};
      color: ${props => props.theme.white};
      .Logo {
        fill: ${props => props.theme.white};
      }
    }
  }
`

export default NavContainer
