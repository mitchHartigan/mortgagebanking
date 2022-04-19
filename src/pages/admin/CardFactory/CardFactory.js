import React from "react";

import { DisplayCard } from "./DisplayCard";

export const CardFactory = (props) => {
  const { acronym, index, activeCardIndex, buttonState } = props;

  const genBackground = () => {
    if (index === activeCardIndex) {
      const { approve, reject, edit } = buttonState;
      if (approve) return "green";
      if (reject) return "red";
      if (edit) return "#e1a915";
      else return "transparent";
    }
  };

  return (
    <DisplayCard
      cardData={acronym}
      index={index}
      activeCardIndex={activeCardIndex}
      buttonState={buttonState}
      background={genBackground()}
    />
  );
};
