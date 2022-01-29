import React from 'react'
import { withRouter } from '../../hoc/withRouter'
import { Wrapper } from '..'

import {
  MenuContainer,
  MenuBar,
  MenuNav,
  MenuItem,
  LinkMenu
} from './style'

const Menu = () => {
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
        </MenuNav>
      </MenuBar>
    </MenuContainer>
  )
}

export default withRouter(Menu)
