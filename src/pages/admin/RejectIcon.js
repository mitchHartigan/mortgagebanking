import React, { useState, useEffect } from "react";

export const RejectIcon = (props) => {
  const { invertColor } = props;
  const [color, setColor] = useState("#dc3454");

  useEffect(() => {
    if (invertColor) setColor("white");
    if (!invertColor) setColor("#dc3454");
  }, [invertColor]);

  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11.5" cy="11.5" r="10.5" stroke={color} stroke-width="2" />
      <path
        d="M6.57129 6.57143L16.4284 16.4286"
        stroke={color}
        stroke-width="2"
      />
      <path
        d="M16.4287 6.57143L6.57157 16.4286"
        stroke={color}
        stroke-width="2"
      />
    </svg>
  );
};
