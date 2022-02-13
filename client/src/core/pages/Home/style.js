import styled from "styled-components"

export const Header = styled.h1` 
  margin-bottom: 1rem;
  font-size: 2.3rem;
  font-weight: 900;
  text-align: ${props => props.align};
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.1rem;

  span {
    color: ${props => props.theme.colors.blue.normal};
  }

  @media screen and (max-width: ${props => props.theme.spacing.sm}) {
    text-align: center;
  }
`

export const Paragraph = styled.p`
  max-width: 60rem;
  margin: auto;
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Open Sans',sans-serif;
  letter-spacing: 0.001rem;
  font-size: 1.4rem;
`