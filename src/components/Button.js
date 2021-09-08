import React from "react";
import styled from "styled-components";

export const Button = (props) => {
  const { onClick, children, styles } = props;

  return (
    <_Button styles={styles} onClick={onClick}>
      {children}
    </_Button>
  );
};

const _Button = styled.button`
  min-width: 200px;
  padding: 8px 40px 8px 40px;
  background-color: ${(props) => props.theme.colors.mainGold};
  color: ${(props) => props.theme.colors.darkGray};
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  & hover {
    box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.25);
    transform: translate(0px, -1px);
  }
  transition: box-shadow 100ms ease;
  transition: transform 100ms ease;
  ${(props) => props.styles}
`;
