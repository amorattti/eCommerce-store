import styled from "styled-components"

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.template ? props.template : ' 20% 20% 20% 20%'};
  gap: ${props => props.gap ? props.gap : '3.63%'};
  padding: 3rem 0;
  justify-content: center;
  margin-bottom: 5rem;
  justify-items: center;

@media(max-width: ${props => props.theme.spacing.xl}) {
  grid-template-columns: ${props => props.template ? props.template : ' 20% 20% 20%'};
  gap: ${props => props.gap ? props.gap : '13.66%'};
  row-gap: 2%;
  
}

@media(max-width: ${props => props.theme.spacing.sm}) {
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  row-gap: 2%;


}

@media(max-width: ${props => props.theme.spacing.xs}) {
  grid-template-columns: 1fr;
  gap: 1rem;
  justify-items: center;
}
`