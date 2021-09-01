import React from "react";
import styled from "styled-components";

export const DisabledButton = (props) => {
  return <Button onClick={props.onClick}>Coming Soon</Button>;
};

const Button = styled.button`
  min-width: 200px;
  padding: 8px 40px 8px 40px;
  background-color: #e1e1e1;
  color: ${(props) => props.theme.colors.darkGray};
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;
