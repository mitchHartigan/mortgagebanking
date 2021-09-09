import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "components/Button";
import { Subtext } from "components/Subtext";
import { Title } from "components/Title";

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCheckDigitResult: false,
    };
  }

  // Render method.
  render() {
    return (
      <Container>
        {""}
        <CardContainer>
          <Subtext alignment="center" styles="margin: -10px 0px 10px 0px;">
            Enter an LEI and Loan Number to append ULI check digits.
          </Subtext>
          <Card>
            <Input
              id="LEI"
              size="45"
              placeholder="Enter LEI and Loan Number..."
            />
            <Subtext
              id="uliAppendCheckDigit"
              color="offWhite"
              alignment="center"
              styles="margin: 10px 0px 0px 0px;"
            ></Subtext>
          </Card>
          <Button
            onClick={UliAppendCheckDigit}
            styles="width: 400px; @media (max-width: 900px){ width: 100%; };"
          >
            Append Check Digits
          </Button>
        </CardContainer>
        {""}
        <CardContainer>
          <Subtext alignment="center" styles="margin-bottom: 10px;">
            Enter a ULI of 45 characters to validate its ULI check digits.
          </Subtext>
          <Card>
            <Input id="ULI" size="45" placeholder="Enter ULI..." />
            <Subtext
              id="uliCheckDigitValidator"
              alignment="center"
              color="offWhite"
              styles="margin: 10px 0px 0px 0px;"
            ></Subtext>
          </Card>
          <Button
            onClick={UliCheckDigitValidator}
            styles="width: 400px; @media (max-width: 900px){ width: 100%; };"
          >
            Validate
          </Button>
        </CardContainer>
        {""}
        <DetailsContainer>
          <Title size="md" styles="margin-bottom: 10px;">
            Additional Calculation Details:
          </Title>
          <Subtext
            id="uliReplaceAlphaText"
            alignment="center"
            styles="margin: 10px 0px 10px 0px"
          ></Subtext>
          <Subtext
            id="longMod97"
            alignment="center"
            styles="margin: 10px 0px 10px 0px"
          ></Subtext>
          <Subtext
            id="uliCheckDigits"
            alignment="center"
            styles="margin: 10px 0px 10px 0px"
          ></Subtext>
        </DetailsContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
  margin-bottom: 20px;
  padding: 20px 40px 20px 40px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.darkBlue};
  border-radius: 3px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.35);

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
`;

const Input = styled.input`
  height: 35px;
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  box-sizing: border-box;
  padding: 0px;
  text-align: center;
  outline: none;
  &:focus {
    border: 1px solid ${(props) => props.theme.colors.mainGold};
  }
`;

// Legacy Code.
function UliReplaceAlpha(strULIToCheck) {
  var toRemove = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var toReplace = [
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
  ];
  try {
    var strValToCheck = strULIToCheck;
    for (var i = 0; i < 52; i++) {
      strValToCheck = strValToCheck.split(toRemove[i]).join(toReplace[i]);
    }

    if (isNaN(strValToCheck))
      throw "Invalid characters. The HMDA ULI may only contain numbers and letters. No special characters. Letters may be any case.";

    document.getElementById("uliReplaceAlphaText").innerHTML =
      "The tested value with alpha characters replaced was: " + strValToCheck;
  } catch (err) {
    document.getElementById("uliReplaceAlphaText").innerHTML = "Error: " + err;
  }
  return strValToCheck;
}

function LongMod97(numToCheck) {
  var longMod97;
  var valTest = 0;

  try {
    //if (isNaN(strNumToCheck)) throw "Value tested is not numeric. Mod 97 must be run on numeric values only.";
    var strNumToCheck = String(numToCheck);
    while (Number(strNumToCheck) >= 97) {
      if (strNumToCheck.length > 7) {
        valTest = Number(strNumToCheck.slice(0, 7));
        strNumToCheck = strNumToCheck.slice(7 - strNumToCheck.length);
      } else {
        valTest = Number(strNumToCheck);
        strNumToCheck = "";
      }
      longMod97 = valTest % 97;
      strNumToCheck = String(longMod97) + strNumToCheck;
    }

    document.getElementById("longMod97").innerHTML =
      "The mod 97 result of the tested value is: " + strNumToCheck;
  } catch (err) {
    document.getElementById("longMod97").innerHTML = "Error: " + err;
  }
  return strNumToCheck;
}

function UliCheckDigit(strULIToCheck) {
  var uliCheckDigit;
  try {
    uliCheckDigit = String(
      98 - LongMod97(UliReplaceAlpha(strULIToCheck) + "00")
    );

    if (uliCheckDigit < 10) {
      var strULICheckDigit = "0" + uliCheckDigit;
    } else {
      strULICheckDigit = String(uliCheckDigit);
    }

    document.getElementById("uliCheckDigits").innerHTML =
      "The ULI check digits for the tested value are: " + strULICheckDigit;
  } catch (err) {
    document.getElementById("uliCheckDigits").innerHTML = "Error: " + err;
  }
  return strULICheckDigit;
}

function UliAppendCheckDigit() {
  var errAdd = "";
  document.getElementById("uliReplaceAlphaText").innerHTML = "";
  document.getElementById("longMod97").innerHTML = "";
  document.getElementById("uliCheckDigits").innerHTML = "";
  document.getElementById("uliAppendCheckDigit").innerHTML = "";
  document.getElementById("uliCheckDigitValidator").innerHTML = "";
  document.getElementById("ULI").value = "";
  try {
    var strLEIToCheck = document.getElementById("LEI").value;
    if (strLEIToCheck.indexOf(" ") != -1) {
      strLEIToCheck = strLEIToCheck.replace(/ /g, "");
      errAdd = "<br>WARNING: Value entered was stripped of spaces.";
    }
    if (strLEIToCheck.length > 43)
      throw "Value entered is more than 43 characters. It is too long!";
    // if (strLEIToCheck.length < 43) throw "Value entered is not 43 characters. It is too short!";

    var strULICheckDigitAppended = strLEIToCheck + UliCheckDigit(strLEIToCheck);

    document.getElementById("uliAppendCheckDigit").innerHTML =
      "ULI with appended check digits is: " + strULICheckDigitAppended + errAdd;
  } catch (err) {
    document.getElementById("uliAppendCheckDigit").innerHTML =
      "Error: " + err + errAdd;
  }
  return strULICheckDigitAppended;
}

function UliCheckDigitValidator() {
  document.getElementById("uliReplaceAlphaText").innerHTML = "";
  document.getElementById("longMod97").innerHTML = "";
  document.getElementById("uliCheckDigits").innerHTML = "";
  document.getElementById("uliAppendCheckDigit").innerHTML = "";
  document.getElementById("uliCheckDigitValidator").innerHTML = "";
  document.getElementById("LEI").value = "";
  try {
    var strULIToCheck = document.getElementById("ULI").value;
    if (strULIToCheck.indexOf(" ") != -1)
      throw "Tested ULI's check digits are: INVALID! <br>Value entered contained spaces.";
    if (strULIToCheck.length > 45)
      throw "Value entered is more than 45 characters. It is too long!";
    // if (strULIToCheck.length < 29) throw "Value entered is less than 45 characters. It is too short!";

    var strChkDig = strULIToCheck.slice(-2);
    if (
      LongMod97(UliReplaceAlpha(strULIToCheck)) == 1 &&
      strChkDig !== "99" &&
      strChkDig !== "00" &&
      strChkDig !== "01"
    ) {
      document.getElementById("uliCheckDigitValidator").innerHTML =
        "Tested ULI's check digits are: VALID";
    } else {
      document.getElementById("uliCheckDigitValidator").innerHTML =
        "Tested ULI's check digits are: INVALID";
    }
  } catch (err) {
    document.getElementById("uliCheckDigitValidator").innerHTML =
      "Error: " + err;
  }
}
