import React from 'react'
import { withRouter } from '../../hoc/withRouter'
import { Wrapper } from '..'

import { FaUserCircle, FaBars } from 'react-icons/fa'


import {
  MenuContainer,
  MenuBar,
  MenuNav,
  MenuItem,
  LinkMenu,
  BarIconWrapper
} from './style'

const Menu = ({setDisplay}) => {
  return (
    <MenuContainer>
      <MenuBar>
        <MenuNav>
          <MenuItem>
            <LinkMenu
              to={`/`}
            > Home
            </LinkMenu>
          </MenuItem>

          <MenuItem>
            <LinkMenu
              to={`/shop`}
            > Shop
            </LinkMenu>
          </MenuItem>

          <MenuItem onClick={() => setDisplay(prevState => !prevState)}>
            <BarIconWrapper>
              <FaBars size="1.8rem"/>
            </BarIconWrapper>         
          </MenuItem>

        </MenuNav>
      </MenuBar>
    </MenuContainer>
  )
}

export default withRouter(Menu)
