import styled from 'styled-components'

export const Grid = styled.div`

`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Col = styled.div`
  flex: ${(props) => props.size};
`

//     inline-size: 150px;
// overflow-wrap: break-word;



export const ShoppingCart = styled.div`

`
export const TitleCart = styled.div`

`

export const ItemBody = styled.div`


`
export const Image = styled.div`


`
export const Name = styled.div`


`
export const Quantity = styled.div`

input {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  width: 32px;
  font-size: 16px;
  color: #43484D;
  font-weight: 300;
}

`
export const TotalPrice = styled.div`


`