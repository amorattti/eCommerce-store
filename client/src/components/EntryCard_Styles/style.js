import styled from "styled-components";

export const StyledEntryCard = styled.div`
  width: 100%;
  max-width: 45rem;
  border-radius: 0.5rem;
  padding: 5rem;
  margin-bottom: 4rem;
  background-color: ${({theme}) => theme.colors.whte}
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06);
  text-align: center;
  margin: auto;
  h2 {
    font-weight: 500;
    margin-bottom: 5rem;;
  }
  span {
    display: block;
    margin-top: 4rem;
    color: #888888;
    font-size: 1.4rem;
  }
  a {
    margin-left: 0.4rem;
    color: #2f8bfd;
  }
`