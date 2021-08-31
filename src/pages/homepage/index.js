import React, { Component } from "react";
import ContactForm from "./ContactForm";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formSubmitted: false,
    };
  }

  render() {
    return (
      <div>
        <ContactForm></ContactForm>
      </div>
    );
  }
}
