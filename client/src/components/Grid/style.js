import styled from "styled-components"

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.template ? props.template : '20% 20% 20% 20% 20%'};
  gap: ${props => props.gap ? props.gap : 'auto'};
  padding: 30px;
  margin-bottom: 100px;

@media(max-width: 768px) {
  grid-template-columns: 1fr 1fr;

}
@media(max-width: 540px) {
  grid-template-columns: 1fr;
  gap: 30px 25%;
}
`