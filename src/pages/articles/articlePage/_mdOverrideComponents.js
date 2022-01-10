import styled from "styled-components";

export const mdHeader = styled.h1`
  color: black;
  font-family: ${(props) => props.theme.textFont};
  font-size: 24px;
  font-weight: normal;
  margin-bottom: -5px;
  margin-top: 40px;
`;

export const mdParagraph = styled.p`
  color: black;
  font-family: ${(props) => props.theme.textFont};
  line-height: 23px;
`;
