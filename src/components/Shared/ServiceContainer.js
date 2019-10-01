// Packages
import styled from 'styled-components'

// utils
import { rhythmUnit } from '../../utils/typography'

const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  padding: ${() => `0 ${rhythmUnit(1)}`};
  max-width: 1030px;
  @media (min-width: 768px) {
    grid-template-columns: 1.5fr 0.75fr;
    grid-gap: ${() => rhythmUnit(1)};
  }

  @media (min-width: 1100px) {
    padding: 0;
  }

  .ServiceCopy {
    order: 2;
    @media (min-width: 768px) {
      order: 1;
    }
  }

  .ServiceIcon {
    order: 1;
    margin-bottom: ${() => rhythmUnit(1)};
    max-width: 300px;
    justify-self: center;

    svg {
      width: 110%;
      height: 100%;
    }
    @media (min-width: 768px) {
      order: 2;
      margin-bottom: 0;
      justify-self: auto;
    }
  }

  h3 {
    font-size: ${props => props.theme.f1};
    margin-bottom: ${() => rhythmUnit(1)};
    line-height: 1.1;
  }

  p {
    color: ${props => props.theme.grey};
    line-height: 1.6;
    letter-spacing: 0.02em;
  }

  .ServiceLinks {
    margin-top: ${() => rhythmUnit(1)};
  }
`

export default ServiceContainer
