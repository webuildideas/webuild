// Packages
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavList = styled.div`
  a {
    font-size: ${props => props.theme.f4};
    margin-right: 8px;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.blue};
    }
  }
`

const Nav = () => (
  <NavList>
    <Link to="/">webuild</Link>
    <Link to="/who-we-are">Who We Are</Link>
    <Link to="/what-we-do">What We Do</Link>
    <Link to="/case-studies">Case Studies</Link>
  </NavList>
)

export default Nav
