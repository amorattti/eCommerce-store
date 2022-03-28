import { Link } from "react-router-dom"
import styled from "styled-components"

export const ProductCart = styled.div`
  text-align: center;
  transition: all 0.4;
  margin: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24rem;
  background: ${({theme}) => theme.colors.white};
  border: 1px solid ${({theme}) => theme.colors.border.gray};

  &:hover {
    box-shadow: 1px 1px 6px 5px ${({theme}) => theme.colors.productCard};
    border-bottom: none;
  }

  @media screen and (max-width: ${({theme}) => theme.spacing.sm}) {
    
  }

`

export const ProductImage = styled(Link)`
  display: inline-block;
  height: 27.3rem;
  padding: 4rem;
`

export const ProductInfo = styled.div`
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 1rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  margin-bottom: 1.8rem;

 a {
  text-decoration: none;
  color: ${({theme}) => theme.colors.black};
  font-size: 1.4rem;
  font-weight: 500;
  transition: color 00.2s;

  &:hover {
    /* color: #ffc107; */
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
  height: 6rem;
  padding: 2rem 2rem 2.5rem 3rem;

  div {
    font-size: 2.3rem;
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
