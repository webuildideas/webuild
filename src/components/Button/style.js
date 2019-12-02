// Packages
import styled from 'styled-components'

// Components
import { Link } from 'gatsby'

// Utils
import { rhythmUnit } from '../../utils/typography'

export const PrimaryButton = styled(Link)`
  display: inline-block;
  font-size: ${props => props.theme.f4};
  font-weight: 800;
  text-transform: uppercase;
  line-height: 1;
  padding: ${() => ` ${rhythmUnit(0.5)} ${rhythmUnit(1.25)}`};
  max-width: 14rem;
  letter-spacing: 0.05em;
  border: 1px solid ${props => props.theme.vulcan};
  color: ${props => props.theme.vulcan};
  background-color: ${props => props.theme.snow};
  transition: background-color ease 250ms;
  &:hover {
    background-color: ${props => props.theme.vulcan};
    color: ${props => props.theme.snow};
  }
`

export const SecondaryButton = styled(PrimaryButton)`
  border: none;
  color: ${props => props.theme.snow};
  background-color: ${props => props.theme.vulcan};
  &:hover {
    background-color: ${props => props.theme.tuna};
  }
`
