import React from 'react'
import { withRouter } from '../../hoc/withRouter'
import { itemTotal } from '../../core/cartHelper'
import { GrCart } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

import {
  MenuContainer,
  MenuBar,
  MenuNav,
  MenuItem,
  LinkMenu,
  BarIconWrapper
} from './style'

const Menu = ({ setDisplay }) => {
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
          <MenuItem>
            <span>
              <Link to="/cart">
                <GrCart size="32px" color="" />
                <span>{itemTotal()}</span>
              </Link>
            </span>
            <BarIconWrapper onClick={() => setDisplay(prevState => !prevState)}>
              <FaBars size="32px" />
            </BarIconWrapper>
          </MenuItem>
        </MenuNav>
      </MenuBar>
    </MenuContainer>
  )
}

export default withRouter(Menu)
