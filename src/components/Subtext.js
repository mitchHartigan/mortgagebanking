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
  const { alignment, children, size, styles } = props;

  return (
    <_Subtext alignment={alignment} styles={styles} size={size}>
      {children}
    </_Subtext>
  );
};

const _Subtext = styled.p`
  margin: 20px 0px 20px 0px;
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text[props.size]};
  text-align: ${(props) => props.alignment};
  color: ${(props) => props.theme.colors.darkGray};
  width: 100%;
  line-height: 30px;
  -webkit-font-smoothing: antialiased;
  ${(props) => props.styles}
`;
