import { Link } from "react-router-dom"
import styled from "styled-components"

export const MenuContainer = styled.div`
    background-color: #055160;
`
export const MenuBar = styled.div`
  display:flex;
`
export const MenuNav = styled.ul`
  display:flex;
`
export const MenuItem = styled.li`
  padding: 16px;
`
export const LinkMenu = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.5rem;
  transition: box-shadow .2s;

  &:hover {
    color: #ffffff;
    box-shadow: 0 1px 0 #ffffff;
  }
`