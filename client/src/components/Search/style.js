import styled from 'styled-components'
import { AiOutlineDown } from 'react-icons/ai'

export const SearchContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center; // sidebar
  
  & span {
    background: #f4f4f4;
    display: inline-block;
  }
`

export const Form = styled.form`
  display: flex;
  height: 39px;

  div:nth-child(2) {
    position: relative;
  }
  
  `

export const Select = styled.select`
  appearance: none;
  background-color: transparent;
  margin: 0;
  border: 1px solid #aaa;
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
  padding: 0px 30px 0px 10px;

  &:focus-visible {
    border: 1px solid #aaa;
    outline: none;
  }

`

export const Input = styled.input`
  font-family: inherit;
  text-indent: 8px;
  border:none;
  border: 1px solid #aaa;
  border-right: none;
  border-radius: 11px 0 0 11px;
  height: 100%;
  padding: 8px 24px;

  &:focus-visible {
    border: 1px solid #aaa;
    outline: none;
    border-right: none;
  }
`

export const ButtonSearch = styled.button`
  border-left: none;
  background: #000000;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 0px 11px 11px 0;
  height: 100%;
  padding: 8px;

  img, svg {
    vertical-align: unset;
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 80px;

  h2 {
    width: 100%;
  }
`

export const ArrowIcon = styled(AiOutlineDown)`
  position: absolute;
  right: 7px;
  top: 13px;
  color: #7b7575;
`