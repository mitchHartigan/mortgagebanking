import React, { Component } from "react";
import { BackButton } from "components/resources/BackButton.js";

export default class Calculator extends Component {
  render() {
    return (
      <div>
        <BackButton location="/" text="< Resources" />
        <p>Uli calculator</p>
      </div>
    );
  }
}
//
