import styled from "styled-components";

export const ProductsContainer = styled.section`

  ul {
    li {
      display: grid;
      grid-template-columns: 20% 20% 20%;
      grid-template-rows: 20% 20% 20%;
      margin-bottom: 40px;
      }
    }
`
//${({theme}) => theme.colors.border.normal}

export const GridProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid ${({theme}) => theme.colors.border.normal};
  border-right: 1px solid ${({theme}) => theme.colors.border.normal};
  margin-bottom: 15rem;

  span {
    padding: 0.4rem;
    border-left: 1px solid ${({theme}) => theme.colors.border.normal};
    border-bottom: 1px solid ${({theme}) => theme.colors.border.normal};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    display: inline-grid;
    grid-template-columns: 50% 50%;
    grid-gap: 0.3rem;
    justify-items: center;
    align-items: center;
    height: 100%;
  }

  button {
    border: none;
    padding: 0.8rem 2.4rem;
    color: ${({theme}) => theme.colors.white};
    border-radius: 0.4rem;
  }

  button:nth-child(1) {
    background: ${({theme}) => theme.colors.red.normal};
  }
  button:nth-child(2) {
    background: ${({theme}) => theme.colors.blue.normal};
  }

`