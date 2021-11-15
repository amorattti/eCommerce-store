import React from 'react'
import { StyledAlert } from './style'

const Alert = ({ children, ...props }) => {
  return (
    <StyledAlert {...props}>
      {children}
    </StyledAlert>
  )
}

export default Alert
