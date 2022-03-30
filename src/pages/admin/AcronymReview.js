import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

export default function AcronymReview() {
  const [requestComplete, setRequestComplete] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    async function sendToken() {
      const token = JSON.parse(localStorage.getItem("token"));

      if (!token) setRequestComplete(true);

      const payload = { token: token };

      const result = await fetch("http://localhost:4000/checkAuthentication", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await result.json();

      setAuthenticated(json.validToken);
      setRequestComplete(true);
    }
    sendToken();
  }, []);

  if (requestComplete && !authenticated) {
    return <Redirect to="/admin" />;
  }

  if (requestComplete && authenticated) {
    return (
      <Container>
        <p>This is the acronym editing page.</p>
      </Container>
    );
  }
  if (!requestComplete) {
    return null;
  }
}

const Container = styled.div``;
