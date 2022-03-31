import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Title } from "components/Title";
import { Input } from "components/form/Input";
import { SubmitButton } from "components/form/SubmitButton";
import { TextArea } from "components/form/TextArea";
import { CenterBlock } from "components/CenterBlock";

export default class AcronymSubmission extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        authorName: "",
        authorEmail: "",
        Acronym: "",
        Text: "",
        Description: "",
        Citation: "",
      },
      formErrors: {
        nameErr: false,
        emailErr: false,
        AcronymErr: false,
        TextErr: false,
        CitationErr: false,
      },
    };
  }

  handleSubmit = () => {
    const {
      authorName,
      authorEmail,
      Acronym,
      Text,
      Description,
      Citation,
    } = this.state.form;

    this.setState(
      {
        formErrors: {
          nameErr: authorName === "",
          emailErr: authorEmail === "",
          AcronymErr: Acronym === "",
          TextErr: Text === "",
          CitationErr: Citation === "",
        },
      },
      async () => {
        let formComplete = true;
        const { formErrors } = this.state;

        // loop through and check if any of the form errors are currently active (ie, true)
        for (let key of Object.keys(formErrors)) {
          if (formErrors[key]) formComplete = false;
        }

        if (formComplete) {
          const date = new Date();

          const dateStr = `${
            date.getMonth() + 1
          }/${date.getDate()}/${date.getFullYear()}`;

          // post to backend.
          const newAcronym = {
            Acronym: Acronym,
            Text: Text,
            Description: Description,
            Citation: Citation,
            "Date Entered": dateStr,
            authorName: authorName,
            authorEmail: authorEmail,
          };

          const result = await fetch(
            "https://md5rhmga23.execute-api.us-west-2.amazonaws.com/production/uploadAcronym",
            {
              method: "POST",
              body: JSON.stringify(newAcronym),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const json = await result.json();
          console.log(json);
        }
      }
    );
  };

  updateFormData = (evt) => {
    this.setState({
      form: {
        ...this.state.form,
        [evt.target.name]: evt.target.value,
      },
    });
  };

  render() {
    const {
      nameErr,
      emailErr,
      AcronymErr,
      TextErr,
      CitationErr,
    } = this.state.formErrors;
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
              name="authorName"
              label="Name or Organization"
              onChange={this.updateFormData}
              invalid={nameErr}
              leftInputMargin
              whiteBackground
            />
            <Input
              name="authorEmail"
              label="Email"
              onChange={this.updateFormData}
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
              onChange={this.updateFormData}
              invalid={AcronymErr}
              whiteBackground
            />
            <Input
              name="Text"
              label="Acronym Definition"
              onChange={this.updateFormData}
              invalid={TextErr}
              whiteBackground
            />
          </DoubleInputRow>
          <TextArea
            name="Description"
            label="Description of use (if applicable)"
            onChange={this.updateFormData}
            whiteBackground
          />
          <Input
            name="Citation"
            label="Publishing Organization (Name or Link)"
            onChange={this.updateFormData}
            invalid={CitationErr}
            whiteBackground
          />
          <CenterBlock>
            <SubmitButton onClick={this.handleSubmit} />
          </CenterBlock>
        </Form>
      </Container>
    );
  }
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
