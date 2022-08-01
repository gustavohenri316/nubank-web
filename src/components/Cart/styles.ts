import styled from "styled-components";

export const Container = styled.div`
  width: 474px;
  height: 190.39px;
  background: #FFFFFF;
  box-shadow: 0px 2px 3px rgba(50, 50, 50, 0.25);
  border-radius: 10px;
  margin: 32px 40px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  header{
    display: flex;
    padding: 21px 0 0 23px ;
    align-items: center;
    gap: 8px;
  }
  header > span {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #000000;
  }
  header > p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #7A7A80;
  }
  header > div {
    width: 6px;
    height: 6px;
    background: #7A7A80;
    border-radius: 50%;
  }
  main {
    display: flex;
    padding: 28px 23px;
    align-items: center;
    gap: 24px;
  }
  main > section{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  
    .Limite{
      background: #00DD16;
    }
    .fatura{
      background: #009BDD;
    }
    .proximas{
      background: #FF7900;
    }
  }
  main > section > span{
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
  }
  main > section > span > p{
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #7A7A80;
  }
  main > section > div{
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
  .progress{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 424px;
    height: 7px;
    background: #00DD16;
    border-radius: 100px;
    margin-left: 26px;
    .verde{
      flex: 3;
      //width: 361px;
      height: 100%;
      background: #00DD16;
      border-radius: 100px 0px 0px 100px;
      }
    .azul{
      flex: 0.4;
      width: 40px;
      height: 100%;
      background: #009BDD;
      }
    .laranja{
      flex: 0.2;
      width: 100%;
      height: 100%;
      background: #FF7900;
      border-top-right-radius: 100px 0px 0px 100px;
      }
  }
  @media (max-width: 1200px) {
    width: 630px;
    height: 200.39px;
  }
  @media (max-width: 1000px) {
    width: 630px;
    height: 200.39px;
  }
  @media (max-width: 950px) {
    width: 530px;
    height: 230px;

    header{
      width: 80%;
    }
    main {
      width: 80%;
    }
    span{
      font-size: 10px;
    }
    p{
      font-size: 8px;
    }
    main > section{
    gap: 10px;
    }
  }
  @media (max-width: 790px) {
    width: 630px;
    height: 200.39px;
  }
`