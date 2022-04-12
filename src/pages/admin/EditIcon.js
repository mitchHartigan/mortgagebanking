import React, { useState, useEffect } from "react";

export const EditIcon = (props) => {
  const { invertColor } = props;
  const [color, setColor] = useState("#e1a915");

  useEffect(() => {
    if (invertColor) setColor("white");
    if (!invertColor) setColor("#e1a915");
  }, [invertColor]);

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 16.5434L16.8106 1.27951C17.4321 0.935395 19.0629 0.630609 20.6141 2.16437C22.1654 3.69813 22.1057 5.06475 21.882 5.55634L6.14591 21.5576M1 16.5434V22L6.14591 21.5576M1 16.5434L6.14591 21.5576"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};
