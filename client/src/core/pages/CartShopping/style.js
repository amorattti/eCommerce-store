import styled from 'styled-components'

export const Grid = styled.div``

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`

export const ShoppingCart = styled.div`
  border-radius: 1rem;
  box-shadow: 0 0.1rem 0.8rem rgb(0 0 0 / 10%);
  background: ${props => props.theme.colors.white};
`

export const TitleCart = styled.div`
  height: 6rem;
  padding: 2rem 3rem;
  border-bottom: 0.1rem solid ${props => props.theme.colors.border.normal};
  font-size: 1.8rem;
  font-weight: 600;
`

export const Col = styled.div`
  flex: ${(props) => props.size};
   
  @media(max-width: ${props => props.theme.spacing.sm}) {
    flex: none;
    width: 100%;

    &:last-child {
     margin: 2rem 0;
    }
  }

`