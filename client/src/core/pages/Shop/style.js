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