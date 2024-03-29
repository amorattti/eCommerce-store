import styled from "styled-components";


export const FooterStyled = styled.footer`
  margin-top:auto; 
  background-color: ${({theme}) => theme.colors.footerBg};
  padding: 5rem 0;
  color: white;
  text-align: center;
  font-size: 1.4rem;

  ul {
    display: flex;
    justify-content: center;

    li:before {
      content: "";
      height: 0.8rem;
      vertical-align: middle;
      padding-left: 0.8rem;
      margin-left: 1rem;
      border-left: 0.1rem solid ${({theme}) => theme.colors.gray.light};
      display: inline-block;
    }
  
    li:first-child:before{
      content: "";
      border-left: none;
    }
  }
`