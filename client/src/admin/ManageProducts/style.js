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


export const GridProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid #d7d7d7;;
  border-right: 1px solid #d7d7d7;
  margin-bottom: 150px;

  span {
    padding: 4px;
    border-left: 1px solid #d7d7d7;;
    border-bottom: 1px solid #d7d7d7;;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    display: inline-grid;
    grid-template-columns: 50% 50%;
    grid-gap: 3px;
    justify-items: center;
    align-items: center;
    height: 100%;
  }

  button {
    border: none;
    padding: 7px 24px;
    color: #fff;
    border-radius: 4px
  }

  button:nth-child(1) {
    background: #dc3545;
  }
  button:nth-child(2) {
    background: #0089ff;
  }

`