import React, { useState } from "react";
import styled from "styled-components";
import { Title } from "components/Title";
import { Input } from "components/form/Input";
import { SubmitButton } from "components/form/SubmitButton";
import { TextArea } from "components/form/TextArea";

export default function AcronymSubmission() {
  const defaultForm = {
    name: "",
    email: "",
    Acronym: "",
    Text: "",
    Description: "",
    Citation: "",
  };

  const [formData, setFormData] = useState(defaultForm);

  return (
    <Container>
      <Form>
        <Title size="md">Submit an Acronym</Title>
        <Description>
          Not finding an acronym you know exists? Submit it below and we'll add
          it to our database.
        </Description>
        <Input name="name" label="Name" />
        <Input name="email" label="Email" />
        <p>------------------------</p>
        <DoubleInputRow>
          <Input name="Acronym" label="Acronym" leftInputMargin />
          <Input name="Text" label="Definition" />
        </DoubleInputRow>
        <Input name="Description" label="Description of use" />
        <Input name="Citation" label="Publishing Organization Name/Link" />
      </Form>
    </Container>
  );
}

const Override = styled(Input)`
  margin: 0px 10px 0px 10px;
  background-color: red;
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
