import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { 
    transform: rotate(0deg);
  } 
  100% { 
    transform: rotate(360deg); 
  }
`

const Loader = styled.div`
  border: 2px solid #aeabab;
  border-top: 14px solid #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 0.3s linear infinite;
`


const LoadingIndicator = ({...props}) => {
  return (
    <Loader {...props}/>
  );
};

export default LoadingIndicator;