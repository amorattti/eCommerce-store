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
            <SideBarItem>
              <div>
                <Link to="/signin">Sign in</Link>
                <Link to="/signup">Sign in</Link>
              </div>
            </SideBarItem>
          )}
          <SideBarItem>
            <Link to="/cart">
              <GrCart size="1.5em" color="" /><span>My Cart</span>
            </Link>
          </SideBarItem>
          {isAuthenticated() && (
            <>
              <SideBarItem>
                {isAuthenticated().user.role === 0 ? (
                  <Link to="/user/dashboard">
                    <FaUserCircle size="1.5em" color="" /><span>Dashboard</span>
                  </Link>) :
                  (<Link to="/admin/dashboard">
                    <FaUserCircle size="1.5em" /><span>Dashboard</span>
                  </Link>)}
              </SideBarItem>
              <hr />
              <SideBarItem>
                <BiExit size="1.5em" />
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


