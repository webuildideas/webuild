// Packages
import styled from 'styled-components'
import { animated } from 'react-spring'

// utils
import { rhythmUnit } from '../../common/utils/typography'

export const OverlayNavContainer = styled(animated.nav)`
  position: fixed;
  z-index: 3;
  top: 0;
  width: 100%;
  height: 100%;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.vulcan};
  font-size: ${(props) => props.theme.f2};
  font-weight: 800;
  letter-spacing: ${(props) => props.theme.tracked};
  padding: 2.1875rem 2.5rem;
  @media (min-height: 600px) {
    font-size: 2rem;
  }

  .CloseIcon {
    cursor: pointer;
    display: none;
  }

  .OverlayNavList {
    padding-top: ${() => rhythmUnit(2.75)};

    @media (min-height: 600px) {
      padding-top: ${() => rhythmUnit(4.75)};
    }
  }

  .OverlayNavLink {
    display: block;
    margin-bottom: ${() => rhythmUnit(1.5)};
    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .OverlayNav__social {
    padding-top: ${() => rhythmUnit(1.5)};

    @media (min-height: 600px) {
      padding-top: ${() => rhythmUnit(3)};
    }

    @media (min-height: 690px) {
      padding-top: ${() => rhythmUnit(4)};
    }

    .OverlayNavLink {
      font-size: ${(props) => props.theme.f2};
      margin-bottom: ${() => rhythmUnit(1.25)};
    }

    p {
      text-transform: uppercase;
      font-size: ${(props) => props.theme.f6};
      color: ${(props) => props.theme.grey};
      font-weight: 800;
      margin-bottom: ${() => rhythmUnit(0.75)};
    }
  }
`
