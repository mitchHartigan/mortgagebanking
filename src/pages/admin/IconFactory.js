import React from "react";

import { ApprovedIcon } from "./ApprovedIcon";
import { EditIcon } from "./EditIcon";
import { RejectIcon } from "./RejectIcon";

export const Icon = (props) => {
  const { name, hovered } = props;
  if (name === "Accept") {
    return <ApprovedIcon invertColor={hovered} />;
  }
  if (name === "Reject") {
    return <RejectIcon invertColor={hovered} />;
  }
  if (name === "Edit") {
    return <EditIcon invertColor={hovered} />;
  }
};
