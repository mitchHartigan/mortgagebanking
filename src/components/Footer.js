import React from "react";
import styled from "styled-components";
import { Subtext } from "components/Subtext";

export function Footer(props) {
  const { lotsteinLegalFooter, isFixed, slim } = props;

  if (lotsteinLegalFooter) {
    return (
      <LotsteinLegalContainer>
        <Subtext size="xs" styles={LotsteinTextStyles}>
          Shirk Law PLLC Copyright 2021
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
  }
  if (slim) {
    return (
      <SlimContainer>
        <Subtext size="xxs" styles={slimCopyrightText}>
          Shirk Law PLLC Copyright 2021
        </Subtext>
      </SlimContainer>
    );
  } else {
    return (
      <Container isFixed={isFixed}>
        <Subtext size="xs" styles={CopyrightText}>
          Shirk Law PLLC Copyright 2021
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

const SlimContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.darkBlue};
`;

const LotsteinTextStyles = `
  margin: 5px 0px 5px 0px;
  color: #BDBDBD;
  text-align: center;
  width: auto;
`;

const slimCopyrightText = `
  margin: 3px 0px 3px 0px;
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
    padding: ${(props) =>
      props.isFixed ? "5px 0px 5px 5px" : "10px 0px 10px 0px"};
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  ${(props) => {
    if (props.isFixed) {
      return `
          position: fixed;
          left: 0;
          bottom: 0;

          @media(max-width: 1300px){
            display: none;
          }
      `;
    }
  }}
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
