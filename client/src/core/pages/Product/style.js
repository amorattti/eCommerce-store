import styled from "styled-components"

export const RowFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3%;
`

export const Col = styled.div`
  flex: ${(props) => props.size};

  h1 {
    font-size: 2rem;
    margin-bottom: 0;
  }

  @media screen and (max-width: ${props => props.theme.spacing.sm}) {
    flex: max-content;
    margin-bottom: 2rem;
    
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


  > h5 {
    font-size: 1.6rem;
    font-weight: 300;
    margin: 2rem 0;
  }

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
  font-weight: 500;
  font-size: 1.6rem;
  margin: 2rem 0;
 `

 export const AuthorName = styled.div`
  color: ${({theme}) => theme.colors.gray.normal};
  font-style: italic;
  letter-spacing: 0.03rem;
  margin: 0.8rem 0 2rem 0;
 `

 export const Description = styled.div`
  h5 {
    font-size: 1.6rem;
    color: ${({theme}) => theme.colors.mainFont};
    font-weight: 500;  
    letter-spacing: 0.7px;
  };
  p {
    color: ${({theme}) => theme.colors.border.dark};
  }
 `