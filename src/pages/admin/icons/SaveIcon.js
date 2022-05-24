import React, { useState, useEffect } from "react";

export const SaveIcon = (props) => {
  const { invertColor } = props;
  const [color, setColor] = useState("#202020");

  useEffect(() => {
    if (invertColor) setColor("white");
    if (!invertColor) setColor("#202020");
  }, [invertColor]);

  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.75 11.2576L9.83333 15.7857L18.25 8.39285"
        stroke={color === "white" ? "white" : "green"}
        strokeWidth="2"
      />
    </svg>
  );
};
