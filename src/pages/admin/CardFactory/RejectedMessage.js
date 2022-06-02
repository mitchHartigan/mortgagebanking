import React, { useEffect } from "react";

import { Container } from "./CardContainer.styles";
import { Spinner } from "../SpinnerFactory";

export const RejectedMessage = (props) => {
  const { setRejectedAcronymId, fetchAcronyms } = props;

  useEffect(() => {
    setTimeout(async () => {
      await fetchAcronyms();
      setRejectedAcronymId("");
    }, 1500);
  }, []);

  return (
    <Container>
      <Spinner>Successfully removed this submission.</Spinner>
    </Container>
  );
};
