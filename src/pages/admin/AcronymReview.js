import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Redirect } from "react-router-dom";
import { FETCH_PENDING_ACRONYMS } from "./API";
import PendingAcronyms from "./PendingAcronyms";
import Editor from "./Editor";

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
      <Container>
        <PendingAcronyms
          acronyms={pendingAcronyms}
          scrollToCard={scrollToCard}
        />
        <Editor acronyms={pendingAcronyms} setData={setData} />
      </Container>
    );
  }
  if (!requestComplete) {
    return null;
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 50px 100px 0px 100px;
`;
