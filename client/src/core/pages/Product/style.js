import styled from "styled-components"

export const RowFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 13.66%;
`

export const Col = styled.div`
  flex: ${(props) => props.size};

  h1 {
    font-size: 1.6em;
  }

  @media screen and (max-width: 768px) {
    flex: max-content;
    margin-bottom: 20px;

    h1 {
      font-size: 1.5rem;
    }

    div {
      margin: auto;    
    }
}
`

export const ImageSection = styled.div`
  max-width: 275px;
`

export const RowGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
  font-size: 1rem;
  margin-top: 80px;
  border-bottom: 1px solid #efe9e9;
`

 export const H5 = styled.h5`
  color: ${(props) => props.color};
  font-weight: 600;
 `