import React, { useEffect } from "react";

import { Container } from "./CardContainer.styles";
import { Spinner } from "../SpinnerFactory";

export const ApprovedMessage = (props) => {
  const { setAcceptedAcronymId, fetchAcronyms } = props;

  useEffect(() => {
    setTimeout(async () => {
      await fetchAcronyms();
      setAcceptedAcronymId("");
    }, 1500);
  }, []);

  return (
    <Container>
      <Spinner>Successfully approved this acronym.</Spinner>
    </Container>
  );
};
