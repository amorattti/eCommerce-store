import styled from 'styled-components'

export const Grid = styled.div`

`

export const Row = styled.div`
  display: flex;
`

export const Col = styled.div`
  flex: ${(props) => props.size};

  ul {
    margin-bottom: 40px;

    li > input {
      margin: 4px;
      cursor: pointer;
    }
  }
`

export const ButtonLoadMore = styled.button`
  margin-bottom: 40px;
  background: none;
  padding: 14px 40px;
  font-weight: 600;
  border-radius: 32px;
  color: #000;
  transition: color 0.2s, border 0.2s;

  &:hover {
   border-color: #8d8d8d;
   color: #8d8d8d;
  }
`