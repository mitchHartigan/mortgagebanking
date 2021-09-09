import React from "react";
import styled from "styled-components";

export const ExpandableTitleText = (props) => {
  const { alignment, children, size, color, styles, onClick, expanded } = props;

  return (
    <_Subtext
      alignment={alignment}
      styles={styles}
      size={size}
      color={color}
      text={children}
      onClick={onClick}
      expanded={expanded}
    >
      {children}
    </_Subtext>
  );
};

const _Subtext = styled.p`
  margin: 0px;
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text[props.size]};
  text-align: ${(props) => props.alignment};
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.darkGray};
  width: 100%;
  line-height: 28px;
  -webkit-font-smoothing: antialiased;

  padding-top: 3px;
  font-weight: bold;
  margin: 0px;
  width: auto;
  border-bottom: 3px solid
    ${(props) => (props.expanded ? props.theme.colors.mainGold : "transparent")};

  &:hover {
    border-bottom: 3px solid
      ${(props) =>
        props.expanded
          ? props.theme.colors.mainGold
          : props.theme.colors.darkGray};
  }

  transition: border-color 120ms linear;

  @media (max-width: 1200px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
`;
