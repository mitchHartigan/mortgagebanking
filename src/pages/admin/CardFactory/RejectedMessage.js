import React, { useEffect } from "react";

import { Container } from "./CardContainer.styles";
import { Spinner } from "../SpinnerFactory";

export const RejectedMessage = (props) => {
  const { setRejectedAcronymId, triggerDBUpdate } = props;

  useEffect(() => {
    setTimeout(async () => {
      await triggerDBUpdate();
      setRejectedAcronymId("");
    }, 1500);
  }, []);

  return (
    <Container>
      <Spinner>Successfully removed this submission.</Spinner>
    </Container>
  );
};
