import React from "react";
import styled from "styled-components";
import { Subtext } from "components/Subtext";

export function Footer() {
  return (
    <Container>
      <Subtext size="xs" styles={SubtextStylesOverride}>
        Copyright Shirk Law 2021
      </Subtext>

      <Subtext size="xs" styles={SubtextStylesOverride}>
        1629 K St NW Ste 300, Washington, DC 20006-1631
      </Subtext>

      <Subtext size="xs" styles={SubtextStylesOverride}>
        {`Admitted to bars of CT, CO, DC, ID, MT, NJ, NM, OR, SC, & WA`}
      </Subtext>

      <Subtext size="xs" styles={SubtextStylesOverride}>
        Formerly LotsteinLegal PLLC
      </Subtext>
    </Container>
  );
}

const SubtextStylesOverride = `
  margin-bottom: 5px;
  color: #BDBDBD;
  text-align: center;
  width: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media (max-width: 1800px) {
    padding: 0px 20px 20px 20px;
    box-sizing: border-box;
    justify-content: space-between;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
