import React from "react";
import styled from "styled-components";

export const Form = (props) => {
  return (
    <Container>
      <_Form>{props.children}</_Form>
    </Container>
  );
};

const _Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 43vw;
  min-width: 600px;
  background-color: ${(props) => props.theme.colors.offWhite};
  padding: 3.5vh 3vw 3.5vh 3vw;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px ${(props) => props.theme.colors.darkGray};

  @media (max-width: 700px) {
    width: 90%;
    min-width: 10vw;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px 40px 0px;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
