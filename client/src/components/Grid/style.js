import styled from "styled-components"

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.template ? props.template : ' 20% 20% 20% 20%'};
  gap: ${props => props.gap ? props.gap : '4.66%'};
  padding: 3rem 0;
  justify-content: center;
  margin-bottom: 5rem;


@media(max-width: ${props => props.theme.spacing.xl}) {
  grid-template-columns: ${props => props.template ? props.template : ' 20% 20% 20%'};
  gap: ${props => props.gap ? props.gap : '13.66%'};
  row-gap: 4%;
  justify-content: stretch;
}

@media(max-width: ${props => props.theme.spacing.sm}) {
  grid-template-columns: 1fr 1fr;
  gap: 0%;
  row-gap: 4%;
  justify-content: stretch;

}

@media(max-width: ${props => props.theme.spacing.xs}) {
  grid-template-columns: 1fr;
  gap: 0%;
  justify-content: stretch;
}
`