import styled from "styled-components"

export const StyledInputGroup = styled.div`
  margin-bottom: 2.4rem;
  text-align: left;
  font-size: 1.2rem;
  label {
    display: inline-block;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.gray.normal}
  }
`