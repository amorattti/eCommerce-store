import React from 'react'
import { NavItemLink, NavbarContainer, Logo, NavSection } from './style'
import { signout } from '../../auth'
import { useNavigate } from "react-router-dom"
import { isAuthenticated } from '../../auth'
import { itemTotal } from '../../core/cartHelper'
import { GrCart } from 'react-icons/gr'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Search from '../Search'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <NavbarContainer>
      <Logo>
        <Link to="/"><span>Tech</span>Books</Link>
      </Logo>
      <Search />

      <NavSection>
        <NavItemLink to="/cart">
          <GrCart size="32px" color="" />
          <span>{itemTotal()}</span>
        </NavItemLink>
        {!isAuthenticated() && (
          <>
            <NavItemLink to="/signin">Sign in</NavItemLink>
            <NavItemLink to="/signup" $fill>Sign up</NavItemLink>
          </>
        )}
        {isAuthenticated() && (
          <>
            {isAuthenticated().user.role === 0 ? (
              <NavItemLink
                title="Dashboard"
                to="/user/dashboard">
                <AiOutlineUser size="32px" color="" />
              </NavItemLink>) :
              (<NavItemLink
                title="Dashboard"
                to="/admin/dashboard">
                <AiOutlineUser size="32px" />
              </NavItemLink>)}
            <NavItemLink
              as="span"
              onClick={() => signout(() => {
                navigate('./')
              })}
            > Sign out
            </NavItemLink>
          </>
        )}
      </NavSection>
    </NavbarContainer>
  )
}

export default Navbar
