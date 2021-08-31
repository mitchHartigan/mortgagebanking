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
  width: 40vw;
  min-width: 600px;
  background-color: white;
  box-shadow: 2px 3px 11px 5px rgba(0, 0, 0, 0.13);
  padding: 0px 40px 30px 40px;
  border-radius: 2px;
  box-sizing: border-box;

  @media (max-width: 700px) {
    width: 90%;
    min-width: 10vw;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0px 40px 0px;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
