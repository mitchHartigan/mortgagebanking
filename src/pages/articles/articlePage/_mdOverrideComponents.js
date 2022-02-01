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
  line-height: 30px;
`;

export const mdListItem = styled.li`
  color: black;
  font-family: ${(props) => props.theme.textFont};
  line-height: 30px;
  margin: 5px 0px 5px 0px;
`;

export const mdPre = styled.pre`
  color: black;
  font-family: ${(props) => props.theme.textFont};
  line-height: 30px;
  margin: 5px 0px 5px 0px;
`;
