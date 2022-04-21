import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Redirect } from "react-router-dom";
import { FETCH_PENDING_ACRONYMS } from "./API";
import Editor from "./Editor";
import { Title } from "components/Title";
import { Sidebar } from "./Sidebar";

export default function AcronymReview() {
  const [requestComplete, setRequestComplete] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [pendingAcronyms, setPendingAcronyms] = useState([]);
  const [acceptedAcronymId, setAcceptedAcronymId] = useState("");
  const [rejectedAcronymId, setRejectedAcronymId] = useState("");

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

  useEffect(() => {
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
    sendToken();
    async function fetchAcronyms() {
      const acronyms = await FETCH_PENDING_ACRONYMS();
      console.log(acronyms);
      setPendingAcronyms(acronyms);
    }
    fetchAcronyms();
  }, []);

  if (requestComplete && !authenticated) {
    return <Redirect to="/admin" />;
  }

  if (requestComplete && authenticated) {
    return (
      <>
        <button onClick={() => console.log("acronyms", pendingAcronyms)}>
          log acronyms
        </button>
        <Sidebar acronyms={pendingAcronyms} scrollToCard={scrollToCard} />
        <EditorContainer>
          <HeaderContainer>
            <Title alignTitle="center" size="lg" spanWidth="200px">
              Acronym Submission Review
            </Title>
          </HeaderContainer>
          <Editor acronyms={pendingAcronyms} setData={setData} />
        </EditorContainer>
      </>
    );
  }
  if (!requestComplete) {
    return null;
  }
}

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
