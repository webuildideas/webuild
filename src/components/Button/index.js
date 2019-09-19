// Packages
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Button = styled(props => <Link {...props} />)`
  display: inline-block;
  font-size: ${props => props.theme.f6};
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.darkBlue};
  text-transform: uppercase;
  line-height: 1;
  padding: 1.75rem 2.825rem;
  border-radius: 4px;
  margin: 2rem auto;
`

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
}

export default Button
