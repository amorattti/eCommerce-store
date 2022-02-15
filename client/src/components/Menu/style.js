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
  padding: 1.6rem;
  padding-left: 0;

  a {
    position: relative
  }

  &:last-child {
    display: none;
    margin-left: auto;
    cursor: pointer;

    > span {
      padding-right: 4rem;

      span {
        border-radius: 5rem;
        position: absolute;
        top: -12px;
        right: -14px;
        background: #ffc107;
        padding: 1px 6px;
        font-weight: 600;
        font-size: 11px;
      }
    }

    @media screen and (max-width: ${({ theme }) => theme.spacing.sm}) {
      display: flex;
    }
  }
`
export const LinkMenu = styled(Link)`
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  transition: box-shadow .2s;
  font-weight: 500;
`

export const BarIconWrapper = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.spacing.sm}) {
    display: block;
  }
`