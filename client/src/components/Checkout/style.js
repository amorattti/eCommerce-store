import styled from "styled-components";


export const Summary = styled.div`

    margin-left: 30px;
    background: #fff;
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0 1px 8px rgb(0 0 0 / 10%);


  h5 {
    font-size: 1.1em;
  }

  > h5 {
    font-size: 1.6em;
  }
`

export const Total = styled.div`
  font-weight: 500;
  color: #646464;
  margin-bottom: 20px;
  div {
    display: grid;
    grid-template-columns:1fr 1fr;
  }

  div:nth-child(2){
    border-bottom: 1px dashed #d1cdcd;
    margin-bottom: 8px;
    padding-bottom: 8px;
  }

  div:last-child {
    font-weight: 600;
    color: #444343;
  }
`

export const ButtonPay = styled.button`
  width: 100%;
  background: #1ba364;
  color: #ffffff;
  text-align: center;
  border: none;
  padding: 10px 0;
  transition: all 0.2s;
  letter-spacing: 0.4px;
  
  &:hover {
    background: #1cbd72;
  }
`

export const AddresForm = styled.div`
    margin-bottom: 8px;
    border-radius: 8px;
`

export const itemForm = styled.div`
  input {
    all: unset;
    box-sizing: border-box;
    padding: 8px;
    width: 100%;
    margin: 4px 0;
    border: 1px solid #c9c4c4;
    border-radius: 8px;
  } 
`