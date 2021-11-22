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
      <Wrapper>
        <MenuBar>
          <MenuNav>
            <MenuItem>
              <LinkMenu
                to={`/`}
              >
                Home
              </LinkMenu>
            </MenuItem>

            <MenuItem>
              <LinkMenu
                to={`/`}
              >
                Shop
              </LinkMenu>
            </MenuItem>
          </MenuNav>
        </MenuBar>
      </Wrapper>
    </MenuContainer>
  )
}

export default withRouter(Menu)
