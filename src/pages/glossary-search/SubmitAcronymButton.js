import React, { useState } from "react";
import styled from "styled-components";

import { Redirect } from "react-router-dom";

export default function SubmitAcronymButton() {
  const [redirect, toggleRedirect] = useState(false);

  if (!redirect) {
    return (
      <Button onClick={() => toggleRedirect(true)}>Submit an Acronym</Button>
    );
  } else {
    return <Redirect to="/submit-an-acronym" />;
  }
}

const Button = styled.button`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  outline: none;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.mainGold};
  border-radius: 5px;
  padding: 6px 10px 6px 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  color: ${(props) => props.theme.colors.darkBlue};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.mainGold};
  }
`;
