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

const Button = styled.button``;
