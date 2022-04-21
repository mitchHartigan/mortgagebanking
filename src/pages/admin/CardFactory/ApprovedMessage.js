import React from "react";
import styled from "styled-components";

import { Container } from "./CardContainer.styles";

export const ApprovedMessage = (props) => {
  function delayedDelete() {
    //set timeout...
  }

  return (
    <Container>
      <p>This acronym has been approved.</p>
    </Container>
  );
};
