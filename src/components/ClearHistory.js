import React from "react";
import { useHistory } from "react-router-dom";

export default function ClearHistory() {
  window.history.replaceState({}, document.title);

  return null;
}
