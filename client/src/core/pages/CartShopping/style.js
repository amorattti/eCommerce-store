import styled from 'styled-components'

export const Grid = styled.div`

`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ShoppingCart = styled.div`
  box-shadow: 0px -1px 1px -1px rgb(0 0 0 / 20%), -1px 0px 1px 0px rgb(0 0 0 / 14%), 1px 0px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 6px;
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

  @media(max-width: 768px) {
    flex: none;
    width: 100%;
  }

`