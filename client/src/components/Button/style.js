import styled from "styled-components"

export const StyledButton = styled.button`
  width: ${props => props.full ? '100%' : null};
  min-width: 6.4rem;
  border: 0;
  border-radius: 0.4rem;
  padding: 0.8rem 1.6rem;
  outline: none;
  background-color: ${props => props.color ? props.color : props.theme.colors.yellow.dark};
  color: ${({theme}) => theme.colors.white};
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.03rem;
  cursor: pointer;
  transition: all 0.2s;
  margin: ${props => props.margin ? props.margin : 'unset'};
  &:hover {
    background-color: ${props => props.theme.colors.yellow.light};
  }
`
