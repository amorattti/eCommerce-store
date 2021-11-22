import styled from "styled-components"

export const Card = styled.div`
  border: 1px solid #ede9e9;
  border-radius: 4px;
  padding: 7px;
  margin-bottom: 20px;
`
export const CardHeader = styled.h3`
  border-bottom: 1px solid #ede9e9;
  padding: 8px;
`

export const ListGroup = styled.ul`
 
`

export const ListGroupItem = styled.li`
  padding: 4px;
  /* border-bottom: 1px solid #ede9e9; */
  &:last-child  {
    border-bottom: none;
  }
`