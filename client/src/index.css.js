import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}  
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, html, #root {
    height: 100%;
    font-family: 'Quicksand', sans-serif
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;

