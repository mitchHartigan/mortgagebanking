import React from "react";
import styled from "styled-components";

/**
 * @param props
 * @param props.alignment - text-align left, right, center, etc.
 * @param props.children - the actual text content to display.
 * @param props.size - size of the text to display (sm, md, lg, etc..)
 * @param props.styles - any additional styles to be applied.
 */

export const Subtext = (props) => {
  const { alignment, children, size, color, styles, id, onClick } = props;

  return (
    <_Subtext
      id={id}
      alignment={alignment}
      styles={styles}
      size={size}
      color={color}
      text={children}
      onClick={onClick}
    >
      {children}
    </_Subtext>
  );
};

const _Subtext = styled.p`
  margin: 20px 0px 20px 0px;
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

  @media (max-width: 1200px) {
    font-size: ${(props) => props.theme.text.xxs};
  }

  ${(props) => props.styles}
`;
