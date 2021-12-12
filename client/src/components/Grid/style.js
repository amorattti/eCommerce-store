import styled from "styled-components"

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.template ? props.template : '20% 20% 20% 20% 20%'};
  gap: ${props => props.gap ? props.gap : 'auto'};
  padding-bottom: 20px;
  margin-bottom: 50px;

@media(max - width: 768px) {
  grid - template - columns: 30 % 30 % 30 % ;
  gap: 20px 5 %;
}
@media(max - width: 425px) {
  grid - template - columns: 35 % 35 %;
  gap: 30px 25 %;
}
`