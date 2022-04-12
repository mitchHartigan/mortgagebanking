import React from "react";
import styled from "styled-components";

import Card from "./Card";
import CardControls from "./CardControls";

export default function Editor(props) {
  const { acronyms } = props;

  return (
    <Container>
      {acronyms.map((acronym, i) => {
        return (
          <ControlsContainer>
            <Card cardData={acronym} index={i} />
            <CardControls />
          </ControlsContainer>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 450px;
  margin-top: -40px;
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px 0px 40px 0px;
`;
