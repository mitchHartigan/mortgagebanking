import React from "react";
import { Link } from "react-router-dom";
import { Button } from "components/Button";

export function ContactPrefillButton(props) {
  const { interestArea, children } = props;

  return (
    <Link
      to={{
        pathname: "/",
        state: {
          interestArea: interestArea,
        },
      }}
      style={{ width: "100%" }}
    >
      <Button styles="width: 100%;">{children}</Button>
    </Link>
  );
}
