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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 385px;

  &:hover {
    box-shadow: 1px 1px 6px 5px #e9e9e9fa;
    border-bottom: none;
  }
`

export const ProductImage = styled(Link)`
  display: inline-block;
  padding: 20px;
  height: 273px;
`

export const ProductInfo = styled.div`
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0px 10px;
  line-height: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

 a {
  height: 200%;
  text-decoration: none;
  color: #202020;
  font-size: 14px;
  font-weight: 200;
}

`

export const LinkProduct = styled(Link)`
  text-decoration: 'none';
  color: '#000000';
`


export const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: end;
  margin: 20px -20px;
  margin-top: 0;

  div {
    font-size: 1.3em;
  }

`
export const ButtonCard = styled.button`
  border: none;
  /* color: #ffc107; */
  background: none;
  transition: all 0.2s;

  &:hover {
    color: #ffc107;
  }
`
