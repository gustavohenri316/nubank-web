import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 48px;
`
export const Img = styled.img`
  width: 44px;
  height: 24px;
  cursor: pointer;
`
export const Button = styled.button`
  width: 244px;
  height: 39px;
  background: #E8E8F0;
  border-radius: 18px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  cursor: pointer;

  transition: all 0.3s;
  &:hover{
    background: #820AD1;
    color: #E8E8F0;
  } 
`