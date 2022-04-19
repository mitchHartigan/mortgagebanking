import React from "react";

import { DisplayCard } from "./DisplayCard";
import { EditCard } from "./EditCard";

export const CardFactory = (props) => {
  const { acronym, index, activeCardIndex, buttonState, editMode, setData } =
    props;

  const genBackground = () => {
    if (index === activeCardIndex) {
      const { approve, reject, edit } = buttonState;
      if (approve) return "green";
      if (reject) return "red";
      if (edit) return "#e1a915";
      else return "transparent";
    }
  };

  if (!editMode) {
    return (
      <DisplayCard
        cardData={acronym}
        index={index}
        activeCardIndex={activeCardIndex}
        buttonState={buttonState}
        background={genBackground()}
      />
    );
  } else {
    return (
      <EditCard
        cardData={acronym}
        index={index}
        activeCardIndex={activeCardIndex}
        buttonState={buttonState}
        background={genBackground()}
        setData={setData}
      />
    );
  }
};
