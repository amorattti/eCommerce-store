import styled from 'styled-components'

export const Grid = styled.div``

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`

export const ShoppingCart = styled.div`
  border-radius: 10px;
  box-shadow: 0 1px 8px rgb(0 0 0 / 10%);
  background: #fff;
`

export const TitleCart = styled.div`
  height: 60px;
  padding: 20px 30px;
  border-bottom: 1px solid #E1E8EE;
  color: #000000;
  font-size: 18px;
  font-weight: 600;
`

export const Col = styled.div`
  flex: ${(props) => props.size};

  &:last-child {

  }
   
  @media(max-width: 768px) {
    flex: none;
    width: 100%;

    &:last-child {
     margin: 20px 0;
    }
  }

`