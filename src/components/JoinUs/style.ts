// Packages
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-gtag'

// Utils
import { rhythmUnit } from '../../common/utils/typography'

export const JoinUs = styled.section`
  background: white;

  .peace-sign {
    margin-right: 4px;
  }
`

export const JoinUsJobs = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${() => rhythmUnit(0.5)};
  justify-content: space-between;
  margin-top: ${() => rhythmUnit(2)};
  margin-bottom: ${() => rhythmUnit(2)};
  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const JoinUsJob = styled(OutboundLink)`
  &:not(:last-of-type) {
    margin-bottom: ${() => rhythmUnit(1)};
  }
  h3 {
    text-transform: uppercase;
    margin-bottom: ${() => rhythmUnit(0.5)};
  }
  @media (min-width: 650px) {
    margin-bottom: 0;
  }
`
