import { Link } from "react-router-dom"
import styled from "styled-components"

export const MenuContainer = styled.section`

`
export const MenuBar = styled.div`
  display:flex;
`
export const MenuNav = styled.ul`
  display:flex;
  align-items: center;
  width: 100%;
`
export const MenuItem = styled.li`
  padding: 16px;
  padding-left: 0;

  a {
    position: relative
  }

  &:last-child {
    display: none;
    margin-left: auto;
    cursor: pointer;

    > span {
      padding-right: 40px;

      span {
        border-radius: 50px;
        position: absolute;
        top: -12px;
        right: -14px;
        background: #ffc107;
        padding: 1px 6px;
        font-weight: 600;
        font-size: 11px;
      }
    }

    @media screen and (max-width: 768px) {
      display: flex;
    }
  }
`
export const LinkMenu = styled(Link)`
  color: #484848;
  text-decoration: none;
  font-size: 1rem;
  transition: box-shadow .2s;
  font-weight: 600;


  &:hover {
    box-shadow: 0 2px 10 red;
  }
`

export const BarIconWrapper = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
   font-size: 14px;
  }
`