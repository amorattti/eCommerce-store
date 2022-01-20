import { Link } from "react-router-dom"
import styled from "styled-components"

export const ProductCart = styled.div`
  text-align: center;
  transition: all 0.4;
  /* border: 1px solid #ffffff; */
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  /* box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px; */
  margin: 3px;

  button { // test
    display: none;
  }

  &:hover {
    box-shadow: 1px 1px 6px 5px #e9e9e9fa;
    border-bottom: none;

    button {
      color: #fff;
      background: #000;
    }
  }
`

export const ProductImage = styled(Link)`
 
    display: inline-block;
    padding: 20px;

`

export const ProductInfo = styled.div`
  height: 115px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0px 10px;
  
 a {
  text-decoration: none;
  color: #202020;
  font-size: 14px;
}

  &>span {
    font-weight: 600;
  }
`

export const LinkProduct = styled(Link)`
  text-decoration: 'none';
  color: '#000000';
`

export const ButtonCard = styled.button`
  text-transform: uppercase;
  padding: 7px 14px;
  border: 1px solid #000;
  color: #000;
  background: #fff;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    color: #8d8d8d!important;
  }
`
