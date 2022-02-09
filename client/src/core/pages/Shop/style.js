import styled from 'styled-components'

export const Grid = styled.div`

`

export const Row = styled.div`
  display: flex;
  position: relative;
`

export const MenuBar = styled.div`
  margin-right: 20px;
  box-shadow: 8px 0 8px -8px rgb(0 0 0 / 10%);
  height: 100%;
  width: ${props => props.showBar ? '230px' : '70px'};
  position: relative;
  background: #fafafa;

  ul {
    margin-bottom: 40px;

    h5 {
      font-size: 1rem;
    }

    li {
     
    }

    li > input {
      margin: 4px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1200px) {
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const ContentBar = styled.div`
 visibility: ${props => props.showBar ? 'unset' : 'hidden'}; 

  @media screen and (max-width: 1200px) {
    position: sticky;
    top: 80px;
  }

`

export const FiltersHeader = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #d9d5d5;
  background: #fafafa;
  padding: 0 25px 0 0;
  padding-bottom: 10px;
  visibility: ${props => props.showBar ? 'unset' : 'hidden'}; 

  div:last-child {
    margin-left: auto;
    cursor: pointer;
  }
  div:nth-child(2) {
    margin-left: 10px;
    font-weight: 600;
    letter-spacing: 0.6px;
  }

  @media screen and (max-width: 1200px) {
    position: sticky;
    top: 20px;
  }
`

export const ToggleFilter = styled.button`
  border: none;
  width: 100%;
  background: #fafafa;
  visibility: ${props => props.showBar ? 'hidden' : 'unset'}; 
  position: relative;

  > div {
    position: absolute;
  }

  @media screen and (max-width: 1200px) {
    position: sticky;
    top: 20px;
  }
`

export const Carts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 50px;
  max-width: 940px;

  @media screen and (max-width: 1200px) {
    margin-left: 70px;
  }
`

export const ButtonLoadMore = styled.button`
  margin-top: 40px;
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


