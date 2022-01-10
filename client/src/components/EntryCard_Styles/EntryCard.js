import React from 'react'
import { StyledEntryCard } from './style'


const EntryCard = ({ children }) => {
  return (
    <StyledEntryCard>
      {children}
    </StyledEntryCard>
  )
}

export default EntryCard
