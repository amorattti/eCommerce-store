import React from 'react'
import { NavItemLink, StyledNavbarExtend } from './style'
import { signout } from '../../auth'
import { useNavigate } from "react-router-dom"
import { isAuthenticated } from '../../auth'

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <StyledNavbarExtend>
      <NavItemLink to="/cart">Cart</NavItemLink>
      {!isAuthenticated() && (
        <>
          <NavItemLink to="/signin">Sign in</NavItemLink>
          <NavItemLink to="/signup" $fill>Sign up</NavItemLink>
        </>

      )}
      {isAuthenticated() && (
        <>
          <NavItemLink to="/dashboard">Dashboard</NavItemLink>
          <NavItemLink
            as="span"
            onClick={() => signout(() => {
              navigate('./')
            })}
          > Sign out
          </NavItemLink>
        </>

      )}

    </StyledNavbarExtend>
  )
}

export default Navbar
