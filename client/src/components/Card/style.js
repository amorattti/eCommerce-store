import { Link } from "react-router-dom"
import styled from "styled-components"

export const ProductCart = styled.div`
  text-align: center;
  transition: all 0.4;
  /* border: 1px solid #ffffff; */
  /* border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%); */
  /* box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px; */
  margin: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 385px;
  width: 240px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 8px rgb(0 0 0 / 10%);

  &:hover {
    box-shadow: 1px 1px 6px 5px #e9e9e9fa;
    border-bottom: none;
  }

  @media screen and (max-width: 768px) {
    margin: 20px auto;
  }

`

export const ProductImage = styled(Link)`
  display: inline-block;
  height: 273px;
`

export const ProductInfo = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0px 10px;
  line-height: 18px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  margin-top: 5px;

 a {
  height: 200%;
  text-decoration: none;
  color: #0F1111;
  font-size: 14px;
  font-weight: 600;
  transition: color 00.2s;

  &:hover {
    color: #ffc107;
  }
}

`

export const LinkProduct = styled(Link)`
  text-decoration: 'none';
  color: '#000000';
`


export const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 10px 20px;

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
