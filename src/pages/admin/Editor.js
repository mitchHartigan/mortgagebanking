import React, { useState } from "react";
import styled from "styled-components";

import CardControls from "./CardControls";
import { CardFactory } from "./CardFactory/CardFactory";

export default function Editor(props) {
  const [activeCardIndex, setActiveCardIndex] = useState("");
  const [editMode, setEditMode] = useState(false);
  const { acronyms, setData } = props;

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
              editMode={editMode}
              setData={setData}
            />
            <CardControls
              activeCardIndex={activeCardIndex}
              setActiveCardIndex={setActiveCardIndex}
              index={acronym._id}
              toggleEditOn={() => setEditMode(true)}
              toggleEditOff={() => setEditMode(false)}
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
