import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
`
export const Img = styled.img``
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;

`
export const Label = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #323232;
  cursor: pointer;
`
export const Input = styled.input`
  width: 211px;
  height: 40px;
  background: #E8E8F0;
  text-decoration: none;
  border: none;
  border-radius: 22px;
  padding-left: 1rem;
`
export const A = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #323232;
  cursor: pointer;
  text-decoration: none;
  margin-top: 0.8rem;
  transition: filter 0.2s;
  
  &:hover{
    filter: brightness(0.8);
    color: #820AD1;
  }
`
export const Button = styled.button`
  margin-top: 2rem;
  width: 211px;
  height: 40px;
  background: #820AD1;
  border-radius: 22px;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #E8E8F0;
  cursor: pointer;
  text-decoration: none;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.8);
    color: #fff;
  }
`

