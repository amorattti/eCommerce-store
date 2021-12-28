import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Col = styled.div`
  flex: ${(props) => props.size};
`

