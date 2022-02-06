import styled from 'styled-components'

export const SidebarContainer = styled.div`
  transition: ease-in-out 0.4s;
  display: flex;
  width: 300px;
  background: #fff; 
  color: #000;
  position: fixed;
  z-index: 9999;
  height: 100%;
  top: 0;
  transform: ${props => (props.display ? 'translate(0,0)' : 'translate(-370px, 0)')};
  box-shadow: 0 1px 8px rgb(0 0 0 / 10%);
  
  select {
    display: none;
  }

  hr {
    color: #b6b2b2;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Fog = styled.div`
  transition: background 2s linear, left 3s linear;
  /* background: ${props => props.display ? 'rgba(0,0,0,0.7)' : 'none'};   */
  background: rgba(0,0,0,0.4);
  position: absolute;
  width: 200vw;
  left: ${props => props.display ? '0' : 'unset'};
  right: 0px;
  top: 0px;
  bottom: 0px;
  z-index: 9995;
`

export const SidebarMenu = styled.div`
  z-index: 9996;
  background: #fff;
  width: 100%;
  height: 100%;
}
`

export const SideBarItem = styled.div`
  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: #000;
    font-weight: 400;
    display: flex;
    align-items: center;

    span {
      padding-left: 10px;
    }

  }

  &:first-child {
    margin-top: 10px;
  }

  &:nth-child(4),
  &:nth-child(5) {
    margin-left: 40px;  
  }

  &:last-child {
    display: flex;
    align-items: center;
    margin-left: 40px; 
    span {
      padding-left: 10px;
      font-weight: 600;
    }
  }
`

export const CloseButton = styled.div`
  position: relative;
  height: 20px;
  width: 20px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-left: auto;
  margin-right: 20px;

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 1.2px; /* cross thickness */
    background-color: black;
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
