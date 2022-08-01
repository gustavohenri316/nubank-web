import styled from "styled-components";

export const Container = styled.div`

`
export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 790px) {
    flex-direction: column;
  }
`