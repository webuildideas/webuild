// Packages
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavLink = styled.a`
  font-size: ${props => props.theme.f4};
  margin-right: 8px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.blue};
  }
`

const Nav = () => (
  <div>
    <Link to="/">
      <NavLink>webuild</NavLink>
    </Link>
    <Link to="/who-we-are">
      <NavLink>Who We Are</NavLink>
    </Link>
    <Link to="/what-we-do">
      <NavLink>What We Do</NavLink>
    </Link>
    <Link to="/case-studies">
      <NavLink>Case Studies</NavLink>
    </Link>
  </div>
)

export default Nav
