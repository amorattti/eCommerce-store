import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;

  margin-bottom: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 30% 30% 30% ;
    gap: 20px 5%;
  }
  @media (max-width: 425px) {
    grid-template-columns: 35% 35%;
    gap: 30px 25%;
  }
`

export const Header = styled.h2` 
    font-family: 'Merriweather';
    font-style: italic;
    margin-bottom: 32px;
`