import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 20px
;
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
    margin-bottom: 32px;
`