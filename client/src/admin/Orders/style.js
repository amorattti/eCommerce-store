import styled from "styled-components"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


export const TableStyled = styled(Table)`
  line-height: 3rem;
`
export const THeadStyled = styled(Thead)``
export const TBodyStyled = styled(Tbody)``
export const TRStyled = styled(Tr)``
export const THStyled = styled(Th)``

export const ButtonDetails = styled.button`
  background: none;
  border: none;
  background: ${({theme}) => theme.colors.yellow.light};
  padding: 0.7rem 1.8rem;
  font-weight: 500;
  border-radius: 0.4rem;
  letter-spacing: 0.07rem;
  margin: 0.2rem;
`

export const TDstyled = styled(Td)`

  @media (min-width: ${({ theme }) => theme.spacing.sm} ) {
    &:first-child {    
      line-height: 20px;
    }

    &:nth-child(3) {
    inline-size: 200px;
    padding-right: 20px;
  }}  
`

export const ModalBody = styled.div`
  @media (min-width: ${({ theme }) => theme.spacing.sm} ) {
    min-width: 45rem;
  }
`

export const CloseButton = styled.a`
  cursor: pointer; 
  position: absolute;
  right: 0;
  top: 1rem;
  width: 3.3rem;
  height: 3.3rem;
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }
  &:before, &:after {
    position: absolute;
    left: 1.5rem;
    content: ' ';
    height: 2rem;
    width: 0.1rem;
    background-color: ${({theme}) => theme.colors.black};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }

`





