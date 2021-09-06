import React from "react";
import styled from "styled-components";

export function AnchorLink(props) {
  const { to, children } = props;

  return <Anchor href={to}>{children}</Anchor>;
}

const Anchor = styled.a`
  font-family: ${(props) => props.theme.textFont};
  color: ${(props) => props.theme.colors.linkBlue};
  text-decoration: none;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
