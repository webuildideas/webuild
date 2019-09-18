import styled from 'styled-components'

const NavContainer = styled.div`
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.875rem 2.5rem;
  margin-bottom: 4rem;

  .MaxWidthContainer {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .NavDesktopLinks {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .mobile-NavIcon {
    cursor: pointer;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  a {
    font-size: ${props => props.theme.f4};
    margin-right: 8px;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.blue};
    }
  }
`

export default NavContainer
