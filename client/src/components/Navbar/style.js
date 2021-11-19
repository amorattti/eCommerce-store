import styled, { css } from "styled-components";
import { Link } from 'react-router-dom'
import { Wrapper } from "..";

// export const StyledNavbar = styled.nav`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   width: 100%;
//   height: 70px;
//   padding: 0 30px;
//   color: #000000;
//   background-color: #ffffff;
//   font-weight: 500;
//   box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1) 0 1px 2px 0 rgba(0,0,0, 0.06);
// `

export const StyledNavbarExtend = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 70px;
  padding: 0 30px;
  color: #000000;
  background-color: #ffffff;
  font-weight: 500;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1) 0 1px 2px 0 rgba(0,0,0, 0.06);
`

export const NavItemLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-left: 16px;
  ${props => props.fill && css`
    padding: 8px 16px;
    border-radius: 4px;
    /* background-color: #055160; */
    border:${({theme}) => `2px solid ${theme.colors.yellow.light}`} ;
    transition: background-color 0.2s, color 0.2s;
    &:hover {
      background-color: ${({theme}) => theme.colors.yellow.light} ;;
      color: #fff;
    }
  `}
  &:hover {
    ${props => props.fill ? css`
      text-decoration: none;
    `  : css`
      text-decoration: underline;
      color: #000000;
    `
  }
  }

`