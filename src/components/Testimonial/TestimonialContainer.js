// Packages
import styled from 'styled-components'

import { rhythmUnit } from '../../utils/typography'

const TestimonialContainer = styled.div`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  background-color: ${props => props.theme.white};
  max-width: 26.75rem;
  padding: ${() => rhythmUnit(1)};
  @media (min-width: 425px) {
    padding: ${() => rhythmUnit(1.25)};
  }
  @media (min-width: 800px) {
    /* padding: ${() => rhythmUnit(1.5)}; */
  }

  .testimonial {
    font-size: ${props => props.theme.f4};
    line-height: 1.6;
    margin-bottom: ${() => rhythmUnit(1)};
  }

  .client {
    display: flex;
    align-items: center;
  }

  .client-img {
    min-width: 50px;
    min-height: 50px;
    width: 50px;
    height: 50px;
    margin-right: ${() => rhythmUnit(0.5)};
    border-radius: 50%;
    overflow: hidden;
  }

  .client-name {
    font-size: ${props => props.theme.f6};
    font-weight: 800;
    margin-bottom: ${() => rhythmUnit(0.25)};
  }

  .client-company {
    font-size: ${props => props.theme.f6};
    color: ${props => props.theme.grey};
    font-weight: 400;
    line-height: 1.3;
  }
`

export default TestimonialContainer
