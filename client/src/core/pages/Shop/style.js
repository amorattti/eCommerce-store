import styled from 'styled-components'

export const Grid = styled.div``

export const Row = styled.div`
  display: flex;
  position: relative;
`

export const MenuBar = styled.div`
  margin-right: 2rem;
  box-shadow: 0.8rem 0 0.8rem -0.8rem rgb(0 0 0 / 10%);
  height: 100%;
  width: ${props => props.showBar ? '23rem' : '7rem'};
  position: relative;
  background: ${props => props.theme.colors.gray.light};
  border-right: 0.1rem solid ${props => props.theme.colors.border.normal};
  border-radius: 0 2rem;

  ul {
    margin-bottom: 4rem;

    h5 {
      font-size: 1.6rem;
    }

    li > input {
      margin: 0.4rem;
      cursor: pointer;
    }
  }

  @media screen and (max-width: ${props => props.theme.spacing.lg}) {
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const ContentBar = styled.div`
 visibility: ${props => props.showBar ? 'unset' : 'hidden'}; 

  @media screen and (max-width: ${props => props.theme.spacing.lg}) {
    position: sticky;
    top: 8rem;
  }
`

export const FiltersHeader = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  border: none;
  border-bottom: 0.1rem solid ${props => props.theme.colors.border.normal};
  background: inherit;
  padding: 0 2.5rem 0 0;
  padding-bottom: 1rem;
  visibility: ${props => props.showBar ? 'unset' : 'hidden'}; 

  div:last-child {
    margin-left: auto;
    cursor: pointer;
  }
  div:nth-child(2) {
    margin-left: 1rem;
    font-weight: 600;
    letter-spacing: 0.06rem;
  }

  @media screen and (max-width: ${props => props.theme.spacing.lg}) {
    position: sticky;
    top: 2rem;
  }
`

export const ToggleFilter = styled.button`
  border: none;
  width: 100%;
  background: inherit;
  visibility: ${props => props.showBar ? 'hidden' : 'unset'}; 
  position: relative;

  > div {
    position: absolute;
    padding: 0.4rem;
  }

  div:hover {
    background: ${props => props.theme.colors.gray.gradient};
    border-radius: 0.4rem;
  }

  @media screen and (max-width: ${props => props.theme.spacing.lg}) {
    position: sticky;
    top: 2rem;
  }
`

export const Carts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
  margin-bottom: 5rem;
  max-width: 90rem;
  align-content: baseline;
  
  @media screen and (max-width: ${props => props.theme.spacing.lg}) {
    margin-left: 7rem;
  }
`

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ButtonLoadMore = styled.button`
  margin-top: 4rem;
  background: none;
  padding: 1.4rem 4rem;
  font-weight: 600;
  border-radius: 3.2rem;
  color: #000;
  transition: color 0.2s, border 0.2s;

  &:hover {
   color: ${props => props.theme.colors.gray.normal};
  }
`


