import styled from "styled-components"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


export const TableStyled = styled(Table)`
  line-height: 30px;
`
export const THeadStyled = styled(Thead)``
export const TBodyStyled = styled(Tbody)``
export const TRStyled = styled(Tr)``
export const THStyled = styled(Th)``

export const ButtonDetails = styled.button`
  background: none;
  border: none;
  background: #ffd145;
  padding: 7px 18px;
  color: #5e5050;
  font-weight: 500;
  border-radius: 4px;
  letter-spacing: 0.7px;
  margin: 2px;
`

export const TDstyled = styled(Td)`

  @media (min-width: 650px) {
    &:first-child {
    
      line-height: 20px;
    }

    &:nth-child(3) {
    inline-size: 200px;
    padding-right: 20px;
  }}  
`

export const ModalBody = styled.div`
  @media (min-width: 650px) {
    min-width: 450px;
  }
`

export const CloseButton = styled.a`
  cursor: pointer; 
  position: absolute;
  right: 0px;
  top: 10px;
  width: 33px;
  height: 33px;
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }
  &:before, &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 20px;
    width: 1px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }

`





