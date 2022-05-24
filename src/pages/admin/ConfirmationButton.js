import React, { useState } from "react";
import styled from "styled-components";

import { Icon } from "./icons/IconFactory";

const colors = {
  Accept: "#198754",
  Reject: "#dc3545",
  Edit: "#e1a915",
};

export const ConfirmationButton = (props) => {
  const { handleClick, name, disabled, active, setState } = props;
  const [hovered, setHovered] = useState(false);

  return (
    <Button
      name={name}
      disabled={disabled}
      active={active}
      onClick={() => {
        setState({ [name]: ![name] });
        handleClick();
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon name={name} active={active} hovered={hovered} />
      <ButtonText active={active || hovered}>{name}</ButtonText>
    </Button>
  );
};

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

const ButtonText = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  margin-left: 15px;
  margin-top: 14px;
  font-weight: normal;
  color: ${(props) => (props.active ? "white" : "black")};
  user-select: none;
`;
