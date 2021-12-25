import styled from "styled-components"

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: baseline; 
`

export const Heading = styled.h2`
  font-family: 'Merriweather';
  font-style: italic;
  font-size: 1.5em;
  margin-top: 80px;
  border-bottom: 1px solid #efe9e9;
`

 export const H5 = styled.h5`
  color: ${(props) => props.color};
  font-weight: 600;
 `