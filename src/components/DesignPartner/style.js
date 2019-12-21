// Packages
import styled from 'styled-components'

// Utils
import { rhythmUnit } from '../../utils/typography'

export const DesignPartner = styled.section`
  padding-top: ${() => rhythmUnit(3.5)};
  padding-bottom: ${() => rhythmUnit(3.25)};

  h1 {
    max-width: 530px;
    margin-bottom: ${() => rhythmUnit(0.75)};
  }

  p {
    max-width: 800px;
    line-height: 1.6;
  }

  .DesignPartner__intro {
    p {
      margin-bottom: ${() => rhythmUnit(2.75)};
    }
  }
`

export const DesignPartnerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${() => rhythmUnit(1)};
  svg {
    margin-bottom: ${() => rhythmUnit(1)};
    width: 60px;
  }

  h3 {
    text-transform: uppercase;
    font-weight: 800;
    margin-bottom: ${() => rhythmUnit(0.25)};
  }

  @media (min-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
    svg {
      width: 50px;
    }
    p {
      font-size: ${props => props.theme.f4};
    }
  }
  @media (min-width: 1024px) {
    grid-gap: ${() => rhythmUnit(2)};
    svg {
      width: 60px;
    }
    p {
      font-size: ${props => props.theme.f3};
    }
  }
  @media (min-width: 1200px) {
    grid-gap: ${() => rhythmUnit(2.75)};
  }
`
