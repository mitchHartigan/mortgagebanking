import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Redirect } from "react-router-dom";
import { FETCH_PENDING_ACRONYMS, UPDATE_PENDING_ACRONYM } from "./API";
import Editor from "./Editor";
import { Title } from "components/Title";
import { Sidebar } from "./Sidebar";

export default function AcronymReview() {
  const [requestComplete, setRequestComplete] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [pendingAcronyms, setPendingAcronyms] = useState([]);

  function setData(cardData) {
    const indexPos = pendingAcronyms
      .map((acronym) => {
        return acronym._id;
      })
      .indexOf(cardData._id);

    const newAcronyms = [...pendingAcronyms];
    newAcronyms.splice(indexPos, 1, { ...cardData });
    setPendingAcronyms(newAcronyms);
  }

  function scrollToCard(id) {
    const cardTarget = document.getElementById(id);
    cardTarget.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  async function fetchAcronyms() {
    const acronyms = await FETCH_PENDING_ACRONYMS();
    setPendingAcronyms(acronyms);
    console.log(acronyms);
  }

  async function updateAcronym(activeCardIndex) {
    let updatedAcronym;

    for (let acronym of pendingAcronyms) {
      if (acronym._id === activeCardIndex) updatedAcronym = acronym;
    }
    console.log(updatedAcronym);
    console.log("faking POSTING to backend....");
    const result = await UPDATE_PENDING_ACRONYM(updatedAcronym);
    console.log(result);
  }

  async function sendToken() {
    const token = JSON.parse(localStorage.getItem("token"));

    if (!token) setRequestComplete(true);

    const payload = { token: token };

    const result = await fetch(
      "https://md5rhmga23.execute-api.us-west-2.amazonaws.com/production/checkAuthentication",
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await result.json();

    setAuthenticated(json.validToken);
    setRequestComplete(true);
  }

  useEffect(() => {
    sendToken();
    fetchAcronyms();
  }, []);

  if (requestComplete && !authenticated) {
    return <Redirect to="/admin" />;
  }

  if (requestComplete && authenticated) {
    return (
      <>
        <Sidebar acronyms={pendingAcronyms} scrollToCard={scrollToCard} />
        <EditorContainer>
          <HeaderContainer>
            <Title alignTitle="center" size="lg" spanWidth="200px">
              Acronym Submission Review
            </Title>
          </HeaderContainer>
          <Message show={pendingAcronyms.length === 0}>
            No pending acronym submissions to review.
          </Message>
          <Editor
            acronyms={pendingAcronyms}
            setData={setData}
            fetchAcronyms={fetchAcronyms}
            updateAcronym={updateAcronym}
          />
        </EditorContainer>
      </>
    );
  }
  if (!requestComplete) {
    return null;
  }
}

const Message = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  display: ${(props) => (props.show ? "block" : "none")};
  margin-top: 40px;
`;

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0px 0px 0px;
`;
