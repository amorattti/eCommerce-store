import styled from 'styled-components'

export const Grid = styled.div`

`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Col = styled.div`
  flex: ${(props) => props.size};

  @media(max-width: 768px) {
    flex: none;
    width: 100%;
  }

`

export const ShoppingCart = styled.div`
  box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.10);
  border-radius: 6px;
`

export const TitleCart = styled.div`
  height: 60px;
  padding: 20px 30px;
  border-bottom: 1px solid #E1E8EE;
  color: #5E6977;
  font-size: 18px;
  font-weight: 400;
`

export const ItemBody = styled.div`
  display: flex;
  height: 120px;
  padding: 20px 30px;
  justify-content: space-around;

  @media(max-width: 768px) {
    padding: 20px 0px;
  }
`
export const ButtonRemove = styled.div`
    position: relative;
    height: 20px;
    width: 20px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    &::before,
    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 1.5px; /* cross thickness */
      background-color: black;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
`

export const Image = styled.figure`


`
export const Name = styled.div`
  span {
    display: block;
    inline-size: 150px;
    overflow-wrap: break-word;
    font-size: 14px;
    color: #43484D;
  }

`
export const Quantity = styled.div`

button {
  border: none;
  background: none;


  img {
    width: 17px;
    height: 17px;
  }
 
}

input {
  -webkit-appearance: none;
  border: none;
  text-align: center;
  width: 32px;
  font-size: 16px;
  color: #43484D;
  font-weight: 300;
}

@media(max-width: 768px) {
  input {
    width: 12px;
  }    
}

`
export const TotalPrice = styled.div`
    font-weight: 500;

`