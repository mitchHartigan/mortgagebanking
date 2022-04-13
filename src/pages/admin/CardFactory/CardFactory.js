import React, { useState } from "react";

import { DisplayCard } from "./DisplayCard";
import { ConfirmOverlay } from "./ConfirmOverlay";

export const CardFactory = (props) => {
  const { acronym, index, activeCardIndex } = props;
  const [mode, setMode] = useState("display");

  switch (mode) {
    case "display":
      return (
        <DisplayCard
          cardData={acronym}
          index={index}
          activeCardIndex={activeCardIndex}
        />
      );
    case "edit":
      return;
    case "approve":
      return (
        <>
          <DisplayCard
            cardData={acronym}
            index={index}
            activeCardIndex={activeCardIndex}
            displayOverlay={mode === "approve"}
          />
        </>
      );
    case "reject":
      return (
        <>
          <DisplayCard
            cardData={acronym}
            index={index}
            activeCardIndex={activeCardIndex}
          />
        </>
      );
    default:
      return;
  }
};