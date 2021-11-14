import React from 'react'
import { NavItemLink, StyledNavbarExtend } from './style'

const Navbar = () => {
  return (
    <StyledNavbarExtend>
      <NavItemLink to="/signin">Sign in</NavItemLink>
      <NavItemLink to="/signup" fill>Sign up</NavItemLink>
    </StyledNavbarExtend>
  )
}

export default Navbar
