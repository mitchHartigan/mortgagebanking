import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "components/Button";
import { useHistory } from "react-router-dom";
/**
 * @param props
 * @param props.children - text to be displayed inside the button.
 * @param props.to - URL to be redirected to.
 */

export default function LinkButton(props) {
  const history = useHistory();

  const _redirect = () => {
    history.push(props.to);
  };

  return <Button onClick={_redirect}>{props.children}</Button>;
}
