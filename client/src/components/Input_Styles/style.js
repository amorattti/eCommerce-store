import styled from "styled-components"

export const StyledInput = styled.input`
  width: 100%;
  outline: none;
  padding: 0.8rem 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.border.normal};
  border-radius: 4px;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.gray.normal};
  transition: box-shadow 0.2s;
  &::placeholder {
    color: #dedede;
  }
  &:focus {
    box-shadow: 000 2px rgb(169, 172, 255, 0.5);
  }
`