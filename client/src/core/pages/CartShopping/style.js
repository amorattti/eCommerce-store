import styled from 'styled-components'

export const Grid = styled.div`

`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ShoppingCart = styled.div`
  box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.10);
  border-radius: 6px;
`

export const TitleCart = styled.div`
  height: 60px;
  padding: 20px 30px;
  border-bottom: 1px solid #E1E8EE;
  color: #5E6977;
  font-size: 18px;
  font-weight: 400;
`


export const Col = styled.div`
  flex: ${(props) => props.size};

  @media(max-width: 768px) {
    flex: none;
    width: 100%;
  }

`