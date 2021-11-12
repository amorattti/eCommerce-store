import React from 'react'
import { NavItemLink, StyledNavbar } from './style'

const Navbar = ({ children }) => {
  return (
    <StyledNavbar>
      <NavItemLink to="/signin">Sign in</NavItemLink>
      <NavItemLink to="/signup" fill>Sign up</NavItemLink>
    </StyledNavbar>
  )
}

export default Navbar
