import React from 'react'
import { NavItemLink, StyledNavbarExtend } from './style'
import { signout } from '../../auth'
import { useNavigate } from "react-router-dom"
import { isAuthenticated } from '../../auth'

const Navbar = () => {
  const navigate = useNavigate();
  console.log(isAuthenticated())
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
        {isAuthenticated().user.role === 0 ? (
          <NavItemLink to="/user/dashboard">Dashboard</NavItemLink>) : 
          (<NavItemLink to="/admin/dashboard">Dashboard</NavItemLink>)}
        
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
