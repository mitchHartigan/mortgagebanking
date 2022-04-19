import React, { useState, useEffect } from "react";

export const EditIcon = (props) => {
  const { invertColor, active } = props;
  const [color, setColor] = useState("#202020");

  console.log("active", active);

  useEffect(() => {
    if (invertColor) setColor("white");
    if (!invertColor) setColor("#202020");
  }, [invertColor]);

  if (!active) {
    return (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.06339 14.5L4.56901 14.9944L1.68097 23.2444L9.08387 20.4374L10.0213 19.5M5.06339 14.5L17.5634 2.00001L22.5423 6.97895L10.0213 19.5M5.06339 14.5L10.0213 19.5"
          stroke={color}
          strokeWidth="2"
        />
      </svg>
    );
  } else {
    return (
      <p style={{ fontFamily: "Lato", fontWeight: "bold", fontSize: "17px" }}>
        X
      </p>
    );
  }
};
