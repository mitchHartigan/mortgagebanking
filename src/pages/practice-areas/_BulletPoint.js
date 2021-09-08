import React from "react";
import styled from "styled-components";
import { Subtext } from "components/Subtext";

export function BulletPoint(props) {
  const { children } = props;

  return (
    <Container>
      <Bullet />
      <Subtext size="xs" styles={SubtextStyleOverride} alignment="left">
        {children}
      </Subtext>
    </Container>
  );
}

const SubtextStyleOverride = `
  font-weight: bold;
  @media (max-width: 900px) {
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 0px 0px 20px;

  @media (max-width: 900px) {
    padding: 0px 0px 0px 10px;
  }
`;

const Bullet = styled.div`
  width: 11px;
  height: 10px;
  background-color: ${(props) => props.theme.colors.darkGray};
  border-radius: 50%;
  margin-right: 11px;
`;
