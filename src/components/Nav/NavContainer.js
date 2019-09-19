import styled from 'styled-components'

const NavContainer = styled.div`
  position: relative;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.875rem 2.5rem;
  margin-bottom: 4rem;

  .MaxWidthContainer {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .Logo {
    position: absolute;
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
  }

  .NavIcon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    right: 2.5rem;
    cursor: pointer;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`

export default NavContainer
