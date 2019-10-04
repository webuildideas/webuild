// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

// Icons
import Arrow from '../../static/svgs/arrow.inline.svg'

const StyledLink = styled(props => <Link {...props} />)`
  color: ${props => props.theme.blue};
  text-transform: uppercase;
  font-weight: 800;
  font-size: ${props => props.theme.f6};
  &:hover {
    text-decoration: underline;
  }
  .Icon {
    display: inline-block;
    margin-left: 5px;
    fill: ${props => props.theme.blue};
    font-size: ${props => props.theme.f7};
  }
`

const InlineLink = ({ children, withArrow, ...rest }) => (
  <StyledLink {...rest}>
    {children}
    {withArrow && <Arrow className="Icon Icon--align-baseline" />}
  </StyledLink>
)

InlineLink.propTypes = {
  children: PropTypes.node.isRequired,
  withArrow: PropTypes.bool,
}

export default InlineLink
