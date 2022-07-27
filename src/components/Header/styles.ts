import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 128px;
  background: #820AD1;
  display: flex;
  padding: 24px 48px;
  justify-content: flex-start;
  @media (max-width: 790px) {
    padding: 14px 48px;
  }

`
export const Infos = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 190px;
  margin-right: 71px;

  @media (max-width: 790px) {
    width: 140px;
  }
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
 
`
export const Div = styled.div`
margin-top: 8px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`
export const Button = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;

  &:hover{
    filter: brightness(0.8);
  }
`
export const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
  filter: brightness(0.9);
  @media (max-width: 790px) {
    font-size: 10px;
  }
`
export const Span = styled.strong`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #FFFFFF;
  @media (max-width: 790px) {
    font-size: 12px;
  }
`

export const Warnings = styled.div`
  width: 247px;
  height: 80px;
  background: #E8E8F0;
  opacity: 0.9;
  border-radius: 10px;
  margin-left: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 18px;

  
`
export const TextWarnings = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #000000;

  a{
    color: #820AD1;
    cursor: pointer;
  }
  @media (max-width: 790px) {
    font-size: 10px;
  }
`