import React from "react";
import styled from "styled-components";

export default function CitationText(props) {
  let children = props.children;

  if (children.substring(0, 4) === "http") {
    return (
      <LinkCitation target="_blank" href={children}>
        {children}
      </LinkCitation>
    );
  } else {
    return <TextCitation>{children}</TextCitation>;
  }
}

const TextCitation = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  font-weight: 500;
  margin: 7px 0px 0px 0px;
  max-width: 100%;
  word-break: break-all;

  @media (max-width: 900px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
`;

const LinkCitation = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.linkBlue};

  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  font-weight: 500;
  margin: 7px 0px 0px 0px;
  max-width: 100%;
  word-break: break-all;

  @media (max-width: 900px) {
    font-size: ${(props) => props.theme.text.xxs};
  }
`;
