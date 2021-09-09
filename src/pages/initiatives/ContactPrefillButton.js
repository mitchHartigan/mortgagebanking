import React from "react";
import { Link } from "react-router-dom";
import { Button } from "components/Button";

export function ContactPrefillButton(props) {
  const { interestArea } = props;

  return (
    <Link
      to={{
        pathname: "/",
        state: {
          interestArea: `Hey! I'm interested in the ${interestArea} and I'd like some more information.`,
        },
      }}
    >
      <Button>Get Involved</Button>
    </Link>
  );
}
