import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}  
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body, html, #root {
    display:flex; 
    flex-direction:column;  
    height: 100%;
    background: ${props => props.theme.colors.gray.light};
  }

  body {
    color: ${props => props.theme.colors.mainFont};
    font: 1.4rem/1.45 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  select {
    background: ${props => props.theme.colors.white};
  }
`;

export default GlobalStyles;

