import styled from 'styled-components'

export const SearchContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;

`

export const Form = styled.form`

`

export const Select = styled.select`
  appearance: none;
  background-color: transparent;
  padding: 0 1em 0 0;
  margin: 0;
  border: 1px solid #d7d7d7;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  padding: 5px 24px;
  border-left: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;


  &:focus-visible {
    border: 1px solid #d7d7d7;
    outline: none;
    border-left: none;
  }
`

export const Input = styled.input`
  font-family: inherit;
  padding: 8px 0;
  text-indent: 8px;
  border:none;
  border: 1px solid #d7d7d7;
  border-right: none;

  &:focus-visible {
    border: 1px solid #d7d7d7;
    outline: none;
    border-right: none;
  }
`

export const ButtonSearch = styled.button`
  padding: 8px 16px;
  border-left: none;
  background: #ffc107;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 0px 20px 20px 0;
  padding: 9px 24px;
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