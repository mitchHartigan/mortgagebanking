import React, { useState } from "react";
import styled from "styled-components";

import CardControls from "./CardControls";
import { CardFactory } from "./CardFactory/CardFactory";

export default function Editor(props) {
  const [activeCardIndex, setActiveCardIndex] = useState("");
  const { acronyms } = props;

  return (
    <Container>
      <p>Active card index: {activeCardIndex}</p>
      {acronyms.map((acronym, i) => {
        return (
          <ControlsContainer>
            <CardFactory
              acronym={acronym}
              index={i}
              activeCardIndex={activeCardIndex}
            />
            <CardControls
              activeCardIndex={activeCardIndex}
              setActiveCardIndex={setActiveCardIndex}
              index={acronym._id}
            />
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
