import styled from "styled-components";


export const Summary = styled.div`
    margin-left: 3rem;
    background: ${({theme}) => theme.colors.white};
    padding: 1.6rem;
    border-radius: 1rem;
    box-shadow: 0 1px 8px rgb(0 0 0 / 10%);
    font-size: 1.4rem;

  h5 {
    font-size: 1.2em;
  }

  > h5 {
    font-size: 1.8em;
  }
`

export const Total = styled.div`
  font-weight: 500;
  color: #646464;
  margin-bottom: 2rem;

  div {
    display: grid;
    grid-template-columns:1fr 1fr;
  }

  div:nth-child(2){
    border-bottom: 1px dashed #d1cdcd;
    margin-bottom: 0.8rem;
    padding-bottom: 0.8rem;
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
  padding: 1rem 0;
  transition: all 0.2s;
  letter-spacing: 0.04rem;
  
  &:hover {
    background: #1cbd72;
  }
`

export const AddresForm = styled.div`
    margin-bottom: 0.8rem;
    border-radius: 0.8rem;
`

export const itemForm = styled.div`
  input {
    all: unset;
    box-sizing: border-box;
    padding: 0.8rem;
    width: 100%;
    margin: 0.4rem 0;
    border: 0.1rem solid #c9c4c4;
    border-radius: 0.8rem;
  } 
`