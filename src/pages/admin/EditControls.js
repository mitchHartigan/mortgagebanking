import React, { useState } from "react";
import styled from "styled-components";

import { Icon } from "./icons/IconFactory";

const colors = {
  Accept: "#198754",
  Reject: "#dc3545",
  Edit: "#e1a915",
  Save: "#198754",
  Discard: "#dc3545",
};

export const EditControls = (props) => {
  const {
    handleClick,
    name,
    disabled,
    active,
    setState,
    fetchAcronyms,
    postAcronyms,
  } = props;

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
          handleClick("edit");
        }}
        onMouseEnter={() => setHoveredButton("edit")}
        onMouseLeave={() => setHoveredButton("")}
      >
        <Icon name="Edit" hovered={hoveredButton === "edit"} active={active} />
        <ButtonText active={active} hovered={hoveredButton === "edit"}>
          {genButtonText()}
        </ButtonText>
      </Button>
    );
  } else {
    return (
      <Container>
        <ActiveEditButton
          name={"Save"}
          active={hoveredButton === "save"}
          onClick={() => {
            postAcronyms();
            handleClick("edit");
          }}
          onMouseEnter={() => setHoveredButton("save")}
          onMouseLeave={() => setHoveredButton("")}
        >
          <Icon name="Save" hovered={hoveredButton === "save"} />
          <ButtonText hovered={hoveredButton === "save"}>
            Save Changes
          </ButtonText>
        </ActiveEditButton>
        <ActiveEditButton
          name={"Discard"}
          active={""}
          onClick={() => {
            fetchAcronyms();
            handleClick("edit");
          }}
          onMouseEnter={() => setHoveredButton("discard")}
          onMouseLeave={() => setHoveredButton("")}
        >
          <Icon name="Discard" hovered={hoveredButton === "discard"} />
          <ButtonText hovered={hoveredButton === "discard"}>
            Discard Changes
          </ButtonText>
        </ActiveEditButton>
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
  width: 130px;
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

const ActiveEditButton = styled(Button)`
  width: 170px;
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
