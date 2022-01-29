import { Link } from "react-router-dom"
import styled from "styled-components"

export const MenuContainer = styled.section`
  /* background-color: ${(props) => props.theme.colors.black.normal}; */


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
  color: #484848;
  text-decoration: none;
  font-size: 1rem;
  transition: box-shadow .2s;
  font-weight: 600;


  &:hover {
    color: #ffffff;
    box-shadow: 0 1px 0 #ffffff;
  }
`