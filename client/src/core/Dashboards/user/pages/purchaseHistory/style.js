import { Link } from "react-router-dom"
import styled from "styled-components"

export const MainCard = styled.div`

`
export const CardHeader = styled.h3`
  margin-bottom: 2rem;
`

export const ListGroup = styled.ul`

`

export const ListGroupItem = styled.li`
  margin-bottom: 2rem;
  background-color: rgb(255,255,255);
  box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
  padding: 2rem;
`


/*
 ----- Purchase history -----
*/
export const HeadSection = styled.section`
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
`

export const BodySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  >div {
    margin-bottom: 1rem;
    width: 100%;
  }
`

export const ListContainer = styled.div``

export const DetailProduct = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: flex-start;
 
  div:first-child {
    max-width: 550px;
  }

`

export const Photo = styled.div`
  width: 6rem;
  min-width: 60px;
`

export const DetailsProducts = styled.div`
 margin-top: 2rem;
 padding-top: 2rem;
 border-top: 1px solid ${({theme}) => theme.colors.border.normal};
 display: flex;
 justify-content: space-between;
 font-weight: 500;
`


export const DetailInfo = styled.div`
  margin-left: 25px;
  width: 100%;
  
  &:last-child {
   
  }

`

export const Count = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  div:first-child {
    color: ${({theme}) => theme.colors.gray.normal}
  }

`
export const Name = styled(Link)`
  color: #00a790; // normal green
  text-decoration: none;

  &:hover {
    color: #04d0b4; //light
  };
  &:focus {
    color: #067b6b; //dark
  };

`

export const LoaderWrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
`