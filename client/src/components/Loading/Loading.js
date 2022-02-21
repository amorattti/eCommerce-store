import React from 'react'
import styled, { keyframes } from "styled-components";
import load from '../../img/load.gif'

const DotWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;

`;

const Loader = styled.div`
  background: url(${load});
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
`

const Loading = () => {
  return (
    <DotWrapper>
      <Loader />
    </DotWrapper>
  )
}

export default Loading
