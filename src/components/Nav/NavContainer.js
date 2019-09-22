import styled from 'styled-components'

const NavContainer = styled.div`
  position: relative;
  box-shadow: ${props =>
    props.isSticky ? '0px 4px 8px rgba(0, 0, 0, 0.1)' : ''};
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
`

export default NavContainer
