import React, { useState } from "react";
import styled from "styled-components";

import { Title } from "components/Title";

export default function Login() {
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [serverMessage, setServerMessage] = useState("");

  const handleUpdate = (evt) => {
    const newFormData = {
      ...formData,
      [evt.target.name]: evt.target.value,
    };
    setFormData(newFormData);
  };

  const handleSubmit = async () => {
    const result = await fetch("http://localhost:4000/admin", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await result.json();
    setServerMessage(json.serverMessage);
  };

  return (
    <Container>
      <FormContainer>
        <Title size="lg">Administrator Login</Title>
        <Input name="name" placeholder="Name" onChange={handleUpdate} />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleUpdate}
        />
        <ServerMessage>{serverMessage}</ServerMessage>
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 70px;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  padding: 30px 40px 30px 40px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(32, 32, 32, 0.35);
`;

const ServerMessage = styled.p`
  display: ${(props) => (props.children.length === 0 ? "none" : "auto")};
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.sm};
  color: red;
`;

const Input = styled.input`
  height: 40px;
  margin: 25px 0px 10px 0px;
  width: 100%;
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  box-sizing: border-box;
  padding-left: 10px;
  outline: none;
`;

const SubmitButton = styled.button`
  width: 200px;
  height: 40px;
  margin-top: 20px;
  background-color: ${(props) => props.theme.colors.mainGold};
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
`;
