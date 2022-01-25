import styled from "styled-components";


export const FooterStyled = styled.div`
  margin-top:auto; 
  background-color: #252525;
  padding: 50px 0;
  color: white;
  text-align: center;
  font-size: 14px;

  ul {
    display: flex;
    justify-content: center;

    li:before {
      content: "";
      height: 8px;
      vertical-align: middle;
      padding-left: 8px;
      margin-left: 10px;
      border-left: 1px solid #ddd;
      display: inline-block;
    }
  
    li:first-child:before{
      content: "";
      border-left: 2px solid #252525;
    }
  
  }



`