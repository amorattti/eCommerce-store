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
  padding: 0 30px;
  color: #000000;
  background-color: #ffffff;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1) 0 1px 2px 0 rgba(0,0,0, 0.06);
`

export const NavbarContainer = styled.section`
  display:flex;
  justify-content: space-between;
  margin-top: 20px;

`


export const NavItemLink = styled(Link)`
  position:relative;
  text-decoration: none;
  color: inherit;
  margin-left: 16px;
  margin-left: 35px;

  ${props => props.$fill && css`
    padding: 8px 16px;
    border-radius: 4px;
    border:${({ theme }) => `2px solid ${theme.colors.yellow.light}`} ;
    transition: background-color 0.2s, color 0.2s;
    &:hover {
      background-color: ${({ theme }) => theme.colors.yellow.light} ;;
      color: #fff;
    }
  `}

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

  &:hover {
    ${props => props.$fill ? css`
      text-decoration: none;
    `  : css`
      text-decoration: underline;
      color: #000000;
    `
  }}
`

