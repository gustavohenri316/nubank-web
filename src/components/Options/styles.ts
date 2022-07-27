import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  padding: 0 40px;
  justify-content: space-between;
  margin-top: 24px;
  @media (max-width: 790px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

`
export const Content = styled.div`
  width: 151px;
  height: 131px;
  background: #FFFFFF;
  box-shadow: 0px 0px 23px -1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  gap: 8px;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;

  &:hover{
    box-shadow: 0px 0px 23px -1px rgba(130, 10, 209, 0.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  @media (max-width: 1200px) {
    width: 130px;
  }
  @media (max-width: 1000px) {
    width: 100px;
    height: 80px;
  }
  @media (max-width: 790px) {
    width: 151px;
    height: 131px;
  }
`
export const Button = styled.button`
  width: 71px;
  height: 71px;
  background: #E8E8F0;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 1000px) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 790px) {
    width: 71px;
  height: 71px;
  }
`
export const Text = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: #7A7A80;

  @media (max-width: 1000px) {
    font-size: 10px
  }
  @media (max-width: 790px) {
    font-size: 12px;
  }
`
export const Img = styled.img`
@media (max-width: 1200px) {
    width: 18px;
    height: 18px;
  }
@media (max-width: 1000px) {
    width: 15px;
    height: 15px;
  }
  @media (max-width: 790px) {
    
  }
`