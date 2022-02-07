import styled from "styled-components"

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.template ? props.template : ' 20% 20% 20% 20%'};
  gap: ${props => props.gap ? props.gap : '6.66%'};
  padding: 30px 0;
  margin-bottom: 100px;

@media(max-width: 1050px) {
  grid-template-columns: ${props => props.template ? props.template : ' 20% 20% 20%'};
  gap: ${props => props.gap ? props.gap : '13.66%'};
}

@media(max-width: 768px) {
  grid-template-columns: 1fr 1fr;
  gap: 0%;

}

@media(max-width: 540px) {
  grid-template-columns: 1fr;
  gap: 0%;
}
`