import styled from "styled-components"

export const Header = styled.h1` 
  margin-bottom: 20px;
  font-size: 1.5em;
  font-weight: 600;
  text-align: ${props => props.align};
  /* border-bottom: 1px solid #e1e1e1; */


  @media screen and (max-width: 540px) {
    text-align: center;
  }
`