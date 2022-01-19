import { Link } from "react-router-dom"
import styled from "styled-components"

export const Card = styled.div`
  border: 1px solid #ede9e9;
  margin-bottom: 20px;
  box-shadow: -2px 4px 9px 0px #efeeee;
  width: ${props => props.width ? props.width : 'auto'};
`
export const CardHeader = styled.h3`
  border-bottom: 1px solid #ede9e9;
  background-color: #222d3a;
  font-weight: 400;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
`

export const ListGroup = styled.ul``

export const ListGroupItem = styled.li`
  padding: 8px 16px;
  font-weight: 600;
  border-bottom: 1px solid #f3f0f0; 
  &:last-child  {
    border-bottom: none;
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }
`

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const BoxItem = styled.div`
  display: inherit;
  justify-content: space-between;
  flex-wrap: wrap;
`


/*
 ----- Purchase history -----
*/
export const HeadSection = styled.section`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  color: #008000c7;
`

export const BodySection = styled.section`
  display: flex;

  div {
    flex: 1
  }
`

export const ListContainer = styled.div``

export const DetailProduct = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    flex: 4;
    line-height: 30px;
  }
`

export const Photo = styled.div`
 flex: 2!important;
`

export const DetailsProducts = styled.div`
  display: flex;
  flex-direction: column;

  & span:nth-child(3) {
    inline-size: 300px;
  }

  & span:nth-child(3) p {
    font-size: 14px;
    color: #444444;
    letter-spacing: 0.4px;
  }
`
