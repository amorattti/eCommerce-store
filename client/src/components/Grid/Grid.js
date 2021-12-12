import React from 'react'
import { StyledGrid } from './style'

const Grid = ({ children, ...props }) => {
  return (
    <StyledGrid {...props}>
      {children}
    </StyledGrid>
  )
}

export default Grid
