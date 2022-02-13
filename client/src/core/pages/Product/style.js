import styled from "styled-components"

export const RowFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 13.66%;
`

export const Col = styled.div`
  flex: ${(props) => props.size};

  h1 {
    font-size: 2rem;
  }

  @media screen and (max-width: ${props => props.theme.spacing.sm}) {
    flex: max-content;
    margin-bottom: 2rem;

    h1 {
      font-size: 1.5rem;
    }

    div {
      margin: auto;    
    }
}
`

export const ImageSection = styled.div`
  max-width: 27.5rem;
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
  font-size:2rem;
  margin-top: 8rem;
  border-bottom: 0.1rem solid ${props => props.theme.colors.border.normal};
  padding-bottom: 1rem;
`

 export const H5 = styled.h5`
  color: ${(props) => props.color};
  font-weight: 600;
 `