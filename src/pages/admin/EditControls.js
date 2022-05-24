import React, { useState } from "react";
import styled from "styled-components";

import { Icon } from "./IconFactory";

const colors = {
  Accept: "#198754",
  Reject: "#dc3545",
  Edit: "#e1a915",
  Save: "#198754",
  Discard: "#dc3545",
};

export const EditControls = (props) => {
  const { handleClick, name, disabled, active, setState } = props;
  const [hoveredButton, setHoveredButton] = useState(false);

  function genButtonText() {
    if (!active) return name;
    return "Stop Editing";
  }

  if (!active) {
    return (
      <Button
        name={name}
        disabled={disabled}
        active={hoveredButton === "edit" || active}
        onClick={() => {
          setState({ [name]: ![name] });
          handleClick();
        }}
        onMouseEnter={() => setHoveredButton("edit")}
        onMouseLeave={() => setHoveredButton("")}
      >
        <Icon name={name} hovered={hoveredButton === "edit"} active={active} />
        <ButtonText active={active} hovered={hoveredButton === "edit"}>
          {genButtonText()}
        </ButtonText>
      </Button>
    );
  } else {
    return (
      <Container>
        <Button
          name={"Save"}
          active={hoveredButton === "save"}
          onClick={() => {}}
          onMouseEnter={() => setHoveredButton("save")}
          onMouseLeave={() => setHoveredButton("")}
        >
          <Icon name="Accept" hovered={hoveredButton === "save"} />
          <ButtonText hovered={hoveredButton === "save"}>Save Edits</ButtonText>
        </Button>
        <Button
          name={"Discard"}
          active={""}
          onClick={() => {}}
          onMouseEnter={() => setHoveredButton("discard")}
          onMouseLeave={() => setHoveredButton("")}
        >
          <Icon name="Reject" hovered={hoveredButton === "discard"} />
          <ButtonText hovered={hoveredButton === "discard"}>
            Discard Edits
          </ButtonText>
        </Button>
      </Container>
    );
  }
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px 0px 15px 0px;
  outline: none;
  padding-left: 10px;
  border-radius: 5px;
  width: 140px;
  height: 35px;
  color: #202020;
  cursor: pointer;
  background-color: ${(props) => (props.active ? colors[props.name] : "white")};
  box-shadow: 1px 2px rgba(0, 0, 0, 0.25);
  ${(props) => {
    if (props.disabled)
      return "opacity: 0.3; pointer-events: none; filter: grayscale(100%);";
  }}

  &:hover {
    background-color: ${(props) => colors[props.name]};
    color: white;
  }
`;

const ButtonText = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  margin-left: 15px;
  margin-top: 14px;
  font-weight: normal;
  color: ${(props) => (props.hovered ? "#f7fafa" : "black")};
  user-select: none;
`;
