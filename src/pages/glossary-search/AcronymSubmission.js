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

  function handleSubmit() {
    console.log(formData);
  }

  function updateFormData(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  }

  const [formData, setFormData] = useState(defaultForm);

  return (
    <Container>
      <Form>
        <Title size="md">Submit an Acronym</Title>
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
            leftInputMargin
          />
          <Input name="email" label="Email" onChange={updateFormData} />
        </DoubleInputRow>
        <Span />
        <DoubleInputRow>
          <Input
            name="Acronym"
            label="Acronym Name"
            leftInputMargin
            onChange={updateFormData}
          />
          <Input
            name="Text"
            label="Acronym Definition"
            onChange={updateFormData}
          />
        </DoubleInputRow>
        <TextArea
          name="Description"
          label="Description of use (if applicable)"
          onChange={updateFormData}
        />
        <Input
          name="Citation"
          label="Publishing Organization (Name or Link)"
          onChange={updateFormData}
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
  height: 4px;
  background-color: ${(props) => props.theme.colors.mainGold};
  margin: 0px 0px 30px 0px;
`;

const DoubleInputRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const InputRowContainer = styled.div`
  display: grid;
  grid-template-columns: 47.5% 5% 47.5%
  width: 100%;
`;

const Description = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
`;

const Form = styled.div`
  width: 700px;
  backgroud-color: white;
  border-radius: 5px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
