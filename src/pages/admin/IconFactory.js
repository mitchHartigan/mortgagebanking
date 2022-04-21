import React from "react";

import { ApprovedIcon } from "./ApprovedIcon";
import { EditIcon } from "./EditIcon";
import { RejectIcon } from "./RejectIcon";

export const Icon = (props) => {
  const { name, hovered, active } = props;
  if (name === "Accept") {
    return <ApprovedIcon invertColor={hovered || active} />;
  }
  if (name === "Reject") {
    return <RejectIcon invertColor={hovered || active} />;
  }
  if (name === "Edit") {
    return <EditIcon invertColor={hovered} active={active} />;
  }
};
