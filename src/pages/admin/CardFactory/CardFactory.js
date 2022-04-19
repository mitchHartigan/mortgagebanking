import React from "react";

import { DisplayCard } from "./DisplayCard";
import { EditCard } from "./EditCard";

export const CardFactory = (props) => {
  const { acronym, index, activeCardIndex, buttonState, editMode, setData } =
    props;

  if (!editMode) {
    return (
      <DisplayCard
        cardData={acronym}
        index={index}
        activeCardIndex={activeCardIndex}
        buttonState={buttonState}
      />
    );
  } else {
    return (
      <EditCard
        cardData={acronym}
        index={index}
        activeCardIndex={activeCardIndex}
        buttonState={buttonState}
        setData={setData}
        editMode={editMode}
      />
    );
  }
};
