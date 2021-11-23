import { Link } from "react-router-dom"
import styled from "styled-components"

export const Card = styled.div`
  border: 1px solid #ede9e9;
  margin-bottom: 20px;
  box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 13%);
  width: ${props => props.width ? props.width : 'auto'};

`
export const CardHeader = styled.h3`
  border-bottom: 1px solid #ede9e9;
  background-color: #222d3a;
  font-weight: 300;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: inherit;
`

export const ListGroup = styled.ul`
 
`

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