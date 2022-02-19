import styled from "styled-components"

export const ItemBody = styled.div`
  display: flex;
  padding: 2rem 3rem;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.border.normal};
  font-weight: 500;


  @media(max-width: 768px) {
    padding: 2rem 10px;
  }
`

export const ButtonRemove = styled.div`
  position: relative;
  height: 2rem;
  width: 2rem; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
 
  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 1.2px; /* cross thickness */
    background-color: #000000;
    transition: all 0.4;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:hover:after, &:hover:before  {
    background-color: #6c757d;
  }

`

export const QuantityButton = styled.button`
  display:inline-block;
  width:  3.5rem;
  height: 3.6rem;
  background: ${props => props.plus ? 
  (`linear-gradient(#000000 0 0), linear-gradient(#000000 0 0),#fff`) :
   (`linear-gradient(#000000 0 0),#fff`)};
  background-position:center;
  background-size: 50% 2px,2px 50%; /*thickness = 2px, length = 50% (25px)*/
  background-repeat:no-repeat;
`

export const Image = styled.figure``

export const Name = styled.div`
  span {
    display: block;
    inline-size: 19rem;
    overflow-wrap: break-word;
    font-size: 1.4rem;
  }

`
export const Quantity = styled.div`
  display: flex;

  button {
    border: none;

  img {
      width: 1.7rem;
      height: 1.7rem;
    }
}

input {
  -webkit-appearance: none;
  border: none;
  text-align: right;
  width: 3.2rem;
  font-size: 1.6rem;
  font-weight: 400;
}

@media(max-width: ${props => props.theme.spacing.sm}) {
  input {
   
  }    
}

`
export const TotalPrice = styled.div`
  font-weight: 500;
  inline-size: 4.8rem;
  text-align: right;
`