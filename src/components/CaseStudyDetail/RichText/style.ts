// Packages
import styled from 'styled-components'

// Common
import { rhythmUnit } from '@common/utils/typography'

export const CaseStudyRichText = styled.section`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${() => rhythmUnit(4)};
  h2 {
    /* font-size: ${(props) => props.theme.f1};
    font-weight: 900; */
    max-width: 840px;
    margin-bottom: ${() => rhythmUnit(1)};
    padding-left: ${() => rhythmUnit(1)};
    padding-right: ${() => rhythmUnit(1)};
    @media (min-width: 904px) {
      padding-right: 0px;
    }
    @media (min-width: 1164px) {
      padding-left: 0;
    }
  }
  p {
    /* font-size: ${(props) => props.theme.f3}; */
    padding-left: ${() => rhythmUnit(1)};
    padding-right: ${() => rhythmUnit(1)};
    /* line-height: 1.6; */
    max-width: 840px;
    @media (min-width: 904px) {
      padding-right: 0px;
    }
    @media (min-width: 1164px) {
      padding-left: 0;
    }
  }

  p + p {
    margin-top: ${() => rhythmUnit(0.75)};
  }

  p + div {
    margin-top: ${() => rhythmUnit(2.5)};
  }

  div + p {
    margin-top: ${() => rhythmUnit(3)};
  }

  p + img {
    margin-top: ${() => rhythmUnit(3)};
  }

  img + p {
    margin-top: ${() => rhythmUnit(3)};
  }
`
