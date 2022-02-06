import React from 'react'
import { NavItemLink, NavbarContainer, Logo } from './style'
import { signout } from '../../auth'
import { useNavigate } from "react-router-dom"
import { isAuthenticated } from '../../auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { itemTotal } from '../../core/cartHelper'
import { FaUserCircle } from 'react-icons/fa'

import Search from '../Search'

// FaUserCircle

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <NavbarContainer>
      <Logo>
        <span>Prime</span>Books
      </Logo>
      <Search />
   
      <div>
        <NavItemLink to="/cart">
          <FontAwesomeIcon icon={faCartArrowDown} size="lg" />
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
              <NavItemLink to="/user/dashboard">
                <FaUserCircle size="1.5em" color="" />
              </NavItemLink>) :
              (<NavItemLink to="/admin/dashboard">
                <FaUserCircle size="1.5em" />
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
      </div>
    </NavbarContainer>
  )
}

export default Navbar
