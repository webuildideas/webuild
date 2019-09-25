// Packages
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { rhythmUnit } from '../../utils/typography'

const Button = styled(props => <Link {...props} />)`
  display: inline-block;
  font-size: ${props => props.theme.f6};
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.darkBlue};
  text-transform: uppercase;
  line-height: 0;
  padding: ${() => ` ${rhythmUnit(0.75)} ${rhythmUnit(1)}`};
  border-radius: 4px;
  max-width: 14rem;
  letter-spacing: 0.05em;
  transition: background-color ease 250ms;
  &:hover {
    background-color: ${props => props.theme.darkBlueHover};
  }
`

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
}

export default Button
