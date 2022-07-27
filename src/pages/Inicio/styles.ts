import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 70px;
`
export const Img = styled.img``
export const Button = styled.button`
  width: 211px;
  height: 40px;
  background: #E8E8F0;
  border-radius: 22px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #323232;
  cursor: pointer;
  transition: all 0.3s;
  &:hover{
    background: #820AD1;
    color: #E8E8F0;
  } 
`