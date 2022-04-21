import React from "react";
import styled from "styled-components";
import { FadeIn } from "components/FadeIn";

export const Spinner = (props) => {
  const { children } = props;
  return (
    <FadeIn visible play>
      <Container>
        <Circle>
          <Check src="form_check.png" alt="Form success check" />
        </Circle>

        <Message>{children}</Message>
      </Container>
    </FadeIn>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10% 10% 10% 10%;
`;

const Message = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.md};
  text-align: ${(props) => props.alignment};
  color: ${(props) => props.theme.colors.darkGray};
  margin-top: 10%;
`;

const Circle = styled.div`
  width: 175px;
  background-color: ${(props) => props.theme.colors.mainGold};
  height: 175px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin-bottom: 5%;
`;

const Check = styled.img`
  width: auto;
  margin-right: -10px;
`;
