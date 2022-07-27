import styled from "styled-components";

export const Container = styled.div`
  padding: 32px 40px;
`

export const Content = styled.div`
  width: 308px;
  height: 613px;
  background: #FFFFFF;
  box-shadow: 0px 0px 23px -1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 790px) {
    width: 630px;
  }
`

export const Div = styled.div`
  width: 244px;
  height: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;

  &:hover{
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  @media (max-width: 790px) {
    width: 550px;
  }
  
`
export const DivItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
export const Img = styled.img`

`
export const Text = styled.span`

`
export const Button = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`