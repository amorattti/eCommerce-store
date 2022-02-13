import styled from 'styled-components'
import { AiOutlineDown } from 'react-icons/ai'

export const SearchContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center; // sidebar 
`

export const Form = styled.form`
  display: flex;
  height: 3.9rem;

  div:nth-child(2) {
    position: relative;
  }
  `

export const Select = styled.select`
  appearance: none;
  background-color: transparent;
  margin: 0;
  border: 0.1rem solid ${props => props.theme.colors.border.light};
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  background: transparent;
  background-repeat: no-repeat;
  background-position-x: 105%;
  background-position-y: 5px;
  color: #484848;
  font-weight: 400;
  height: 100%;
  padding: 0px 3rem 0px 1rem;

  &:focus-visible {
    border: 0.1rem solid ${props => props.theme.colors.border.light};
    outline: none;
  }

`

export const Input = styled.input`
  font-family: inherit;
  text-indent: 8px;
  border:none;
  border: 0.1rem solid ${props => props.theme.colors.border.light};
  border-right: none;
  border-radius: 1.1rem 0 0 1.1rem;
  height: 100%;
  padding: 0.8rem 2.4rem;

  &:focus-visible {
    border: 0.1rem solid ${props => props.theme.colors.border.light};
    outline: none;
    border-right: none;
  }
`

export const ButtonSearch = styled.button`
  border-left: none;
  background:  ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  font-weight: 600;
  border: none;
  border-radius: 0px 11px 11px 0;
  height: 100%;
  padding: 0.8rem;

  img, svg {
    vertical-align: unset;
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 8rem;

  h2 {
    width: 100%;
  }
`

export const ArrowIcon = styled(AiOutlineDown)`
  position: absolute;
  right: 7px;
  top: 13px;
  color: #7b7575;

  @media (max-width: ${props => props.theme.spacing.sm}) {
    display: none;
  }

`