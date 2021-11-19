import React from 'react'
import { NavItemLink, StyledNavbarExtend } from './style'
import { signout } from '../../auth'
import { useLocation, useNavigate } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate();

  return (
    <StyledNavbarExtend>
      <NavItemLink to="/signin">Sign in</NavItemLink>
      <NavItemLink to="/signup" $fill>Sign up</NavItemLink>
      <NavItemLink
        as="span"
        onClick={() => signout(() => {
          navigate('./')
        })}
      >Sign out</NavItemLink>
    </StyledNavbarExtend>
  )
}

export default Navbar
