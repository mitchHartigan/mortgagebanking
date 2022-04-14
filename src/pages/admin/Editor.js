import React, { useState } from "react";
import styled from "styled-components";

import CardControls from "./CardControls";
import { CardFactory } from "./CardFactory/CardFactory";

export default function Editor(props) {
  const defaultState = {
    approve: false,
    reject: false,
    edit: false,
  };

  const { acronyms } = props;
  const [state, setState] = useState(defaultState);

  return (
    <Container>
      {acronyms.map((acronym, i) => {
        return (
          <ControlsContainer>
            <CardFactory acronym={acronym} index={i} buttonState={state} />
            <CardControls state={state} setState={setState} />
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
