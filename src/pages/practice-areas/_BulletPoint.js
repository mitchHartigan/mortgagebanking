import React from "react";
import styled from "styled-components";
import Subtext from "components/Subtext";

export function BulletPoint(props) {
  const { children } = props;

  return (
    <Container>
      <Bullet />
      <Subtext size="xs" styles="font-weight: bold" alignment="left">
        {children}
      </Subtext>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Bullet = styled.div`
  width: 9;
  height: 9;
  border-radius: 50%;
`;
