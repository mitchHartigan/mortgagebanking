import React from "react";
import styled from "styled-components";
import { Subtext } from "components/Subtext";

export function GoldBulletPoint(props) {
  const { children } = props;

  return (
    <Container>
      <Bullet />
      <Subtext size="xs" alignment="left" styles="margin: 0px;">
        {children}
      </Subtext>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 10px 0px 10px 0px;
`;

const Bullet = styled.div`
  height: 10px;
  width: 12px;
  margin: 0px 20px 0px 40px;
  background-color: ${(props) => props.theme.colors.mainGold};
`;
