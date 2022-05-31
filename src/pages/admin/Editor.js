import React, { useState } from "react";
import styled from "styled-components";

import CardControls from "./CardControls";
import { CardFactory } from "./CardFactory/CardFactory";

export default function Editor(props) {
  const [activeCardIndex, setActiveCardIndex] = useState("");
  const [editMode, setEditMode] = useState(false);

  const [acceptedAcronymId, setAcceptedAcronymId] = useState("");
  const [rejectedAcronymId, setRejectedAcronymId] = useState("");

  const { acronyms, setData, fetchAcronyms, updateAcronym } = props;

  return (
    <Container>
      {acronyms.map((acronym, i) => {
        return (
          <ControlsContainer>
            <CardFactory
              acronym={acronym}
              index={i}
              activeCardIndex={activeCardIndex}
              editMode={editMode}
              setData={setData}
              acceptedAcronymId={acceptedAcronymId}
              rejectedAcronymId={rejectedAcronymId}
              setAcceptedAcronymId={setAcceptedAcronymId}
              setRejectedAcronymId={setRejectedAcronymId}
              fetchAcronyms={fetchAcronyms}
            />
            <CardControls
              activeCardIndex={activeCardIndex}
              setActiveCardIndex={setActiveCardIndex}
              index={acronym._id}
              acronyms={acronyms}
              toggleEditOn={() => setEditMode(true)}
              toggleEditOff={() => setEditMode(false)}
              accepted={acronym._id === acceptedAcronymId}
              rejected={acronym._id === rejectedAcronymId}
              setAcceptedAcronymId={setAcceptedAcronymId}
              setRejectedAcronymId={setRejectedAcronymId}
              fetchAcronyms={fetchAcronyms}
              updateAcronym={updateAcronym}
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
  margin-right: -170px;
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px 0px 10px 0px;
`;
