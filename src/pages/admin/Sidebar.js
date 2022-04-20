import React, { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import PendingAcronyms from "./PendingAcronyms";

export const Sidebar = (props) => {
  const [redirect, setRedirect] = useState(false);

  if (!redirect) {
    return (
      <Container>
        <BackButton
          onClick={() => setRedirect(true)}
        >{`< Back to mortgagebanking.law`}</BackButton>
        <PendingAcronyms {...props} />
      </Container>
    );
  }
  return <Redirect to="/" />;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: fixed;
  margin: 45px 0px 0px 125px;
`;

const BackButton = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  cursor: pointer;

  margin-bottom: 50px;
  margin-top: -6px;

  &:hover {
    text-shadow: 1px 1px rgba(0, 0, 0, 0.15);
  }
`;
