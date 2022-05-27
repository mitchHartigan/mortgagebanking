import React from "react";
import styled from "styled-components";

const Title = (props) => {
  const { name } = props;

  if (name === "publish")
    return (
      <PromptTitle>
        Publish this acronym to the production environment?
      </PromptTitle>
    );

  if (name === "reject") {
    return (
      <PromptTitle>Delete this acronym from the submission list?</PromptTitle>
    );
  }
};

export const Confirmation = (props) => {
  const { display, acceptHandler, rejectHandler, name } = props;

  return (
    <Container display={display}>
      <Title name={name} />
      <ButtonRow>
        <AcceptButton onClick={acceptHandler}>
          <ButtonText>Yes</ButtonText>
        </AcceptButton>
        <RejectButton onClick={rejectHandler}>No</RejectButton>
      </ButtonRow>
    </Container>
  );
};

const Container = styled.div`
  display: ${(props) => (props.display ? "flex" : "none")};
  transform-origin: top;
  width: 350px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const PromptTitle = styled.h1`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  font-weight: normal;
`;

const AcceptButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 15px 20px 15px 0px;
  outline: none;
  border: 2px solid #202020;
  border-radius: 5px;
  width: 130px;
  height: 32px;
  font-family: ${(props) => props.theme.textFont};

  cursor: pointer;
  background-color: white;
  box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.3);

  &:hover {
    border: 2px solid #e1a915;
    color: white;
    background-color: #e1a915;
  }
`;

const RejectButton = styled(AcceptButton)`
  border: 2px solid #e1a915;
  &:hover {
    background-color: #e1a915;
  }
`;

const ButtonText = styled.div`
  margin-left: -12px;
  font-family: ${(props) => props.theme.textFont};
`;
