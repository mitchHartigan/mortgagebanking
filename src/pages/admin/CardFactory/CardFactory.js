import React from "react";
import { ApprovedMessage } from "./ApprovedMessage";
import { RejectedMessage } from "./RejectedMessage";

import { DisplayCard } from "./DisplayCard";
import { EditCard } from "./EditCard";

export const CardFactory = (props) => {
  const {
    acronym,
    index,
    activeCardIndex,
    buttonState,
    editMode,
    acceptedAcronymId,
    rejectedAcronymId,
    setData,
  } = props;

  console.log("=====================================");
  console.log("CardFactory.js:");
  console.log("rejected ac id", rejectedAcronymId);
  console.log("current acronym id", acronym._id);

  const rejected = acronym._id === rejectedAcronymId;
  const accepted = acronym._id === acceptedAcronymId;

  if (accepted) {
    return <ApprovedMessage />;
  }
  if (rejected) {
    return <RejectedMessage />;
  }
  if (!editMode && !accepted && !rejected) {
    return (
      <DisplayCard
        cardData={acronym}
        index={index}
        activeCardIndex={activeCardIndex}
        buttonState={buttonState}
      />
    );
  }
  if (editMode && !accepted && !rejected) {
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
