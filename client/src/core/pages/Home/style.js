import styled from "styled-components"

export const Header = styled.h1` 
  margin-bottom: 20px;
  font-size: 1.5em;
  font-weight: 900;
  text-align: ${props => props.align};
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 1px;
  letter-spacing: 0.4px;
  /* border-bottom: 1px solid #e1e1e1; */

  span {
    color: #00a790;
  }

  @media screen and (max-width: 540px) {
    text-align: center;
  }
`

export const Paragraph = styled.p`
  max-width: 600px;
  margin: auto;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Open Sans',sans-serif;
  letter-spacing: 0.1px;
  font-style: italic;
`