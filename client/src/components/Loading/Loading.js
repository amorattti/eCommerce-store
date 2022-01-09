import React from 'react'
import styled, { keyframes } from "styled-components";

const DotWrapper = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: url('//upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Phi_fenomeni.gif/50px-Phi_fenomeni.gif') 
  50% 50% no-repeat rgb(244, 255, 255, 0.15);
`;

const Loading = () => {
  return (
    <DotWrapper>
    </DotWrapper>
  )
}

export default Loading
