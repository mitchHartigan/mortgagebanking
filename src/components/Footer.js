import React from "react";
import styled from "styled-components";
import { Subtext } from "components/Subtext";

export function Footer(props) {
  const { lotsteinLegalFooter } = props;

  if (lotsteinLegalFooter) {
    return (
      <LotsteinLegalContainer>
        <Subtext size="xs" styles={LotsteinTextStyles}>
          Copyright Shirk Law 2021
        </Subtext>

        <Subtext size="xs" styles={LotsteinTextStyles}>
          1629 K St NW Ste 300, Washington, DC 20006-1631
        </Subtext>

        <Subtext size="xs" styles={LotsteinTextStyles}>
          {`Admitted in CT, CO, DC, ID, MT, NJ, NM, OR, SC, & WA`}
        </Subtext>

        <Subtext size="xs" styles={LotsteinTextStyles}>
          Formerly LotsteinLegal PLLC
        </Subtext>
      </LotsteinLegalContainer>
    );
  } else {
    return (
      <Container>
        <Subtext size="xs" styles={CopyrightText}>
          Copyright Shirk Law 2021
        </Subtext>

        <Subtext size="xs" styles={AddressText}>
          1629 K St NW Ste 300, Washington, DC 20006-1631
        </Subtext>

        <Subtext size="xs" styles={AreaText}>
          {`Admitted in CT, CO, DC, ID, MT, NJ, NM, OR, SC, & WA`}
        </Subtext>
      </Container>
    );
  }
}

const LotsteinTextStyles = `
  margin: 5px 0px 5px 0px;
  color: #BDBDBD;
  text-align: center;
  width: auto;
`;

const CopyrightText = `
  grid-column: 1 / 2;
  margin: 5px 0px 5px 0px;
  color: #BDBDBD;
  text-align: center;
  width: auto;
`;

const AddressText = `
  grid-column: 2 / 3;
  margin: 5px 0px 5px 0px;
  color: #BDBDBD;
  text-align: center;
  width: auto;
`;

const AreaText = `
  grid-column: 3 / 4;
  margin: 5px 0px 5px 0px;
  color: #BDBDBD;
  text-align: center;
  width: auto;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.darkBlue};

  @media (max-width: 1300px) {
    display: flex;
    padding: 10px 0px 10px 20px;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const LotsteinLegalContainer = styled.div`
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
