import React from "react";

import { ApprovedIcon } from "./ApprovedIcon";
import { EditIcon } from "./EditIcon";
import { RejectIcon } from "./RejectIcon";

export const Icon = (props) => {
  const { name, active } = props;
  if (name === "Accept") {
    return <ApprovedIcon invertColor={active} />;
  }
  if (name === "Reject") {
    return <RejectIcon invertColor={active} />;
  }
  if (name === "Edit") {
    return <EditIcon invertColor={active} />;
  }
};
