import React, { useState } from "react";

import { DisplayCard } from "./DisplayCard";

export const CardFactory = (props) => {
  const { acronym, index, activeCardIndex, buttonState } = props;
  const [mode, setMode] = useState("display");

  switch (mode) {
    case "display":
      return (
        <DisplayCard
          cardData={acronym}
          index={index}
          activeCardIndex={activeCardIndex}
          buttonState={buttonState}
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
