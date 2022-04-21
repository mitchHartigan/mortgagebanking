import React from "react";
import styled from "styled-components";

import { Container } from "./CardContainer.styles";

export const RejectedMessage = (props) => {
  return (
    <Container>
      <p>This acronym has been rejected.</p>
    </Container>
  );
};
