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
  grid-gap: ${() => rhythmUnit(2.75)};
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  svg {
    margin-bottom: ${() => rhythmUnit(1)};
  }

  h3 {
    text-transform: uppercase;
    font-weight: 800;
    margin-bottom: ${() => rhythmUnit(0.25)};
  }
`
