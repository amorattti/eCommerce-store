import styled from "styled-components"
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


export const TableStyled = styled(Table)`
  line-height: 30px;
`

export const THeadStyled = styled(Thead)`

`

export const TBodyStyled = styled(Tbody)`

`

export const TRStyled = styled(Tr)`

`

export const THStyled = styled(Th)`

`

// export const Summary = styled.div`
//   margin-top: 14px;
//   display: flex;
//   justify-content: end;
//   padding-right: 20px;
//   font-weight: 500;

//   span: {

//   }

// &:before {
//     content: "";
//     height: 1px;
//     width: 90%;
//     background: #a7a7a7;
//     position: absolute;
//     bottom: 50px;
//   }

// `

export const TDstyled = styled(Td)`
  @media (min-width: 650px) {
    &:first-child {
    
      line-height: 20px;
    }
  }  

`

export const ModalBody = styled.div`
  @media (min-width: 650px) {
    min-width: 450px;
  }
`

export const CloseButton = styled.a`
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;

`