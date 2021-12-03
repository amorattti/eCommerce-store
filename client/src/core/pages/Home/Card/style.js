import { Link } from "react-router-dom"
import styled from "styled-components"

export const ProductCart = styled.div`
  text-align: center;
`

export const ProductImage = styled(Link)`
  span {
    display: inline-block;
    padding: 20px;
  }
`

export const ProductInfo = styled.div`
  height: 90px;
  display: flex;
    flex-direction: column;
    justify-content: space-around;
  
 a {
  text-decoration: none;
  color: #202020;
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
  transition: all 0.3s;

  &:hover {
    color: #fff;
    background: #000;
  }
`
