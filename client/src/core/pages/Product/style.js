import styled from "styled-components"

export const Row = styled.div`
  display: flex;

`

export const Col = styled.div`
  flex: ${(props) => props.size};
`

export const ImageSection = styled.div`
  max-width: 275px;

  img {
    width: 100%;
  }
`

export const ContentSection = styled.div`


  div {
  
  }
  
`