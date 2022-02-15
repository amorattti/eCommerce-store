import styled, { css } from "styled-components";
import { Link } from 'react-router-dom'
import { Wrapper } from "..";

export const StyledNavbarExtend = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 0 3rem;
  background-color: ${props => props.theme.color.white}
  font-weight: 500;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1) 0 1px 2px 0 rgba(0,0,0, 0.06);
`

export const NavbarContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  align-items: center;

  @media screen and (max-width: ${props => props.theme.spacing.sm}) {
    display: none;
  }
`

export const NavItemLink = styled(Link)`
  position:relative;
  text-decoration: none;
  color: inherit;


  ${props => props.$fill && css`
    padding: 0.8rem 1.6rem;
    border-radius: 0.4rem;
    border:${({ theme }) => `2px solid ${theme.colors.yellow.light}`};
    transition: background-color 0.2s, color 0.2s;
    &:hover {
      background-color: ${({ theme }) => theme.colors.yellow.light};
      color: ${({ theme }) => theme.colors.white}; 
    }
  `}

    span {
      border-radius: 5rem;
      position: absolute;
      top: -12px;
      right: -14px;
      background: #ffc107;
      padding: 0.1rem 0.6rem;
      font-weight: 600;
      font-size: 1.1rem;
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

export const Logo = styled.div`
  font-weight: 600;
  font-size: 1.8rem;

  a {
    text-decoration: none;
    color: inherit;

    span {
      color: ${props => props.theme.colors.orange.light};
    }
  }

`

export const NavSection = styled.div`
  display: flex;
  align-items: center;
  width: 23.5rem;
  justify-content: space-between;
  font-weight: 500;

  &:last-child {
    cursor: pointer;
  }
`
