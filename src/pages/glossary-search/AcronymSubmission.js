import React, { useState } from "react";
import styled from "styled-components";

import { Title } from "components/Title";
import { Input } from "components/form/Input";
import { SubmitButton } from "components/form/SubmitButton";
import { TextArea } from "components/form/TextArea";
import { CenterBlock } from "components/CenterBlock";

export default function AcronymSubmission() {
  const defaultForm = {
    name: "",
    email: "",
    Acronym: "",
    Text: "",
    Description: "",
    Citation: "",
  };

  const defaultFormErrors = {
    nameErr: false,
    emailErr: false,
    AcronymErr: false,
    TextErr: false,
    CitationErr: false,
  };

  async function handleSubmit() {
    const { name, email, Acronym, Text, Description, Citation } = formData;

    setFormErrors({
      nameErr: name === "",
      emailErr: email === "",
      AcronymErr: Acronym === "",
      TextErr: Text === "",
      CitationErr: Citation === "",
    });

    let formComplete = true;

    // loop through and check if any of the form errors are currently active (ie, true)
    for (let key of Object.keys(formErrors)) {
      if (formErrors[key]) formComplete = false;
    }

    if (formComplete) {
      // post to backend.
    }
  }

  function updateFormData(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  }

  const [formData, setFormData] = useState(defaultForm);
  const [formErrors, setFormErrors] = useState(defaultFormErrors);

  const { nameErr, emailErr, AcronymErr, TextErr, CitationErr } = formErrors;

  return (
    <Container>
      <Form>
        <Title size="lg">Submit an Acronym</Title>
        <CenterBlock>
          <Description>
            Not finding an acronym you know exists? Submit it below and we'll
            add it to our database.
          </Description>
        </CenterBlock>
        <DoubleInputRow>
          <Input
            name="name"
            label="Name or Organization"
            onChange={updateFormData}
            invalid={nameErr}
            leftInputMargin
            whiteBackground
          />
          <Input
            name="email"
            label="Email"
            onChange={updateFormData}
            whiteBackground
            invalid={emailErr}
          />
        </DoubleInputRow>
        <Span />
        <DoubleInputRow>
          <Input
            name="Acronym"
            label="Acronym Name"
            leftInputMargin
            onChange={updateFormData}
            invalid={AcronymErr}
            whiteBackground
          />
          <Input
            name="Text"
            label="Acronym Definition"
            onChange={updateFormData}
            invalid={TextErr}
            whiteBackground
          />
        </DoubleInputRow>
        <TextArea
          name="Description"
          label="Description of use (if applicable)"
          onChange={updateFormData}
          whiteBackground
        />
        <Input
          name="Citation"
          label="Publishing Organization (Name or Link)"
          onChange={updateFormData}
          invalid={CitationErr}
          whiteBackground
        />
        <CenterBlock>
          <SubmitButton onClick={handleSubmit} />
        </CenterBlock>
      </Form>
    </Container>
  );
}

const Span = styled.div`
  width: 100%;
  height: 3px;
  background-color: ${(props) => props.theme.colors.mainGold};
  margin: 0px 0px 30px 0px;
`;

const DoubleInputRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Description = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
`;

const Form = styled.div`
  width: 700px;
  padding: 20px 40px 40px 40px;
  backgroud-color: white;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 5vh;
`;
