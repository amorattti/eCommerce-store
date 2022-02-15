import React, { useEffect } from 'react';
import Portal from '../../hoc/Portal';
import { SidebarContainer, Fog, SidebarMenu, CloseButton, SideBarItem } from './style'
import Search from '../Search'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated } from '../../auth'
import { signout } from '../../auth'
import { FaUserCircle } from 'react-icons/fa'
import { withRouter } from '../../hoc/withRouter';
import { GrCart } from 'react-icons/gr'
import { BiExit } from 'react-icons/bi'
import { BiLogIn, BiLogOut } from 'react-icons/bi'

const sidebarId = document.getElementById('portal-sidebar-mobile')

const SidebarMobilePortal = ({ display, setDisplay, location }) => {
  const navigate = useNavigate()

  useEffect(() => {
    setDisplay(false)
  }, [location.pathname])

  return (
    <Portal container={sidebarId}>
      <SidebarContainer display={display}>
        <Fog display={display} onClick={() => setDisplay(prevState => !prevState)}></Fog>
        <SidebarMenu>
          <SideBarItem>
            <CloseButton onClick={() => setDisplay(prevState => !prevState)} />
          </SideBarItem>
          <SideBarItem>
            <Search />
          </SideBarItem>
          <hr />
          {!isAuthenticated() && (
            <>
              <SideBarItem>
                <Link to="/signin">
                  <BiLogIn size="20px" /><span>Sign in</span>
                </Link>
              </SideBarItem>
              <SideBarItem>
                <Link to="/signup">
                <BiLogOut size="20px" /><span>Sign up</span>
                </Link>
              </SideBarItem>
              <hr />
            </>
          )}
          <SideBarItem>
            <Link to="/cart">
              <GrCart size="20px" color="" /><span>My Cart</span>
            </Link>
          </SideBarItem>
          {isAuthenticated() && (
            <>
              <SideBarItem>
                {isAuthenticated().user.role === 0 ? (
                  <Link to="/user/dashboard">
                    <FaUserCircle size="20px" color="" /><span>Dashboard</span>
                  </Link>) :
                  (<Link to="/admin/dashboard">
                    <FaUserCircle size="20px" /><span>Dashboard</span>
                  </Link>)}
              </SideBarItem>
              <hr />
              <SideBarItem>
                <BiExit size="20px" />
                <span
                  onClick={() => signout(() => {
                    navigate('./')
                  })}
                >Sign out
                </span>
              </SideBarItem>
            </>
          )}
        </SidebarMenu>
      </SidebarContainer>
    </Portal>
  )

};

export default withRouter(SidebarMobilePortal);


