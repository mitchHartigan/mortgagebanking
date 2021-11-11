import React from "react";
import styled from "styled-components";
import Description from "./Description";

import DefinitionRow from "./DefinitionRow";
import CitationRow from "./CitationRow";
import Title from "./Title";

export default function Card(props) {
  return (
    <Container>
      <CloseButton
        src="button_close.svg"
        alt="close button."
        onClick={props.handleClose}
      />
      <Title />
      <DefinitionRow />
      <Description />
      <CitationRow />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 670px;
  background: white;
  box-sizing: border-box;
  padding: 30px 60px 10px 60px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin: 15px 0px 15px 0px;
`;

const CloseButton = styled.img`
  position: absolute;
  top: 41px;
  left: 20px;
  cursor: pointer;
`;
