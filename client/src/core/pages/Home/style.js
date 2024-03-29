import styled from "styled-components"

export const Header = styled.h1` 
  margin-bottom: 1rem;
  font-size: 2.3rem;
  font-weight: 900;
  text-align: ${props => props.align};
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.1rem;
  text-align: center;
  
  span {
    color: ${props => props.theme.colors.blue.normal};
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

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20rem;
`

export const BottomLine = styled.div`
  width: 6rem;
  height: 0.4rem;
  background: ${props => props.theme.colors.blue.normal};
  margin: auto;
  margin-top: 1.2rem;
`