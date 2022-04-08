import React, { useContext } from 'react'
import { withRouter } from '../../hoc/withRouter'
import { itemTotal } from '../../core/cartHelper'
import { GrCart } from 'react-icons/gr'
import { Link, useLocation } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

import {
  MenuContainer,
  MenuBar,
  MenuNav,
  MenuItem,
  LinkMenu,
  BarIconWrapper
} from './style'
import { ConfigContext } from '../../App'

const Menu = () => {
  const { setDisplay } = useContext(ConfigContext)

  let match = useLocation()

  const activeLink = (name) => {
    const location = match.pathname.split('/').pop()
    if (location === name) {
      return { color: '#e5ab00' }
    } else {
      return { color: 'inherit' }
    }
  }

  return (
    <MenuContainer>
      <MenuBar>
        <MenuNav>
          <MenuItem>
            <LinkMenu
              to={`/`}
              style={activeLink('')}
            > Home
            </LinkMenu>
          </MenuItem>
          <MenuItem>
            <LinkMenu
              to={`/shop`}
              style={activeLink('shop')}
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
