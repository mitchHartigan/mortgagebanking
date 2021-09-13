import React from "react";
import styled from "styled-components";

import { Title } from "components/Title";
import { Subtext } from "components/Subtext";
import { CenterBlock } from "components/CenterBlock";

export default function AboutUs() {
  return (
    <CenterBlock>
      <Container>
        <Title size="xxl" color="offWhite">
          The Firm
        </Title>
        <Subtext
          size="sm"
          alignment="center"
          styles={SubtextStylesOverride}
          color="offWhite"
        >
          David Shirk entered the mortgage industry in 1987 when some banks
          still used carbon paper and Reg. Z tables to calculate and disclose
          APR. Both the operations and compliance have completely transformed
          since then. Dedicated to the mortgage industry and related services.
          Backed by mortgage operations and technology experience, Shirk Law
          delivers innovative and effective solutions and practical guidance for
          clients of all sizes. Managing Member David Shirk’s career included 8
          years designing loan origination software and workflow engines to
          automate three top ten mortgage lenders. He brings the same
          transformative zeal to the firm, helping clients practice better
          compliance, better productivity, and better understanding of the law.
        </Subtext>
      </Container>
    </CenterBlock>
  );
}

const SubtextStylesOverride = `
  line-height: 35px;
  margin-top: 30px;

  @media (max-width: 900px) {
    padding: 0px 10px 0px 10px;
    line-height: 28px;
  }
`;

const Container = styled.div`
  margin: 9vh 0vw 9vh 0vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media (max-width: 1500px) {
    width: 70%;
  }

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;
