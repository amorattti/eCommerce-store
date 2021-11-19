import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const EntryPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;;
`

export const PageHeader = styled(Link)`
  font-size: 2rem;
  font-weight: 600;
  margin: 40px 0;
  color: inherit;
`