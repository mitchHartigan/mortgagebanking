import React, { Component } from "react";

import { Form } from "components/form/Form";
import { Input } from "components/form/Input";
import { Subtext } from "components/Subtext";
import { TextArea } from "components/form/TextArea";
import { CenterBlock } from "components/CenterBlock";
import { SubmitButton } from "components/form/SubmitButton";
import { POST_CONTACT_FORM } from "components/API";
import { Success } from "components/form/Success";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      phone: "",
      invalidName: false,
      invalidEmail: false,
      invalidMessage: false,
      invalidPhone: false,
      submitted: false,
      success: false,
    };
  }

  _updateMessage = (message) => {
    this.setState({ message: message });
  };

  handleUpdate = (evt) => {
    const { name, value } = evt.target;

    this.setState({ [name]: value });
  };

  validateForm = () => {
    let { name, email, phone, message } = this.state;

    // The message can be empty, but still displaying the placeholder value
    // with the interest area message. So, if the interest area is filled out, we
    // replace the empty message with that value.
    if (message === "" && this.props.interestArea) {
      message = this.props.interestArea;
    }

    this.setState(
      {
        invalidName: name === "",
        invalidEmail: email === "",
        invalidMessage: message === "" || message === undefined,
        invalidPhone: phone === "",
      },
      async () => {
        const { invalidName, invalidEmail, invalidMessage, invalidPhone } =
          this.state;

        if (!invalidName && !invalidEmail && !invalidMessage && !invalidPhone) {
          // post form.
          const payload = {
            name: name,
            email: email,
            phone: phone,
            message: message,
          };

          this.setState({ submitted: true });
          const submission = await POST_CONTACT_FORM(payload);

          if (submission === "success") {
            this.setState({ success: true });
          }
        }
      }
    );
  };

  render() {
    const {
      invalidEmail,
      invalidMessage,
      invalidName,
      invalidPhone,
      submitted,
      success,
    } = this.state;

    if (!success) {
      return (
        <Form>
          <Input
            label="Full Name"
            name="name"
            onChange={this.handleUpdate}
            invalid={invalidName}
          />
          <Input
            label="Email"
            name="email"
            onChange={this.handleUpdate}
            invalid={invalidEmail}
          />
          <Input
            label="Phone Number"
            name="phone"
            onChange={this.handleUpdate}
            invalid={invalidPhone}
          />
          <TextArea
            label="Message"
            name="message"
            onChange={this.handleUpdate}
            interestArea={this.props.interestArea}
            invalid={invalidMessage}
          />
          <CenterBlock>
            <SubmitButton onClick={this.validateForm} submitted={submitted}>
              Send
            </SubmitButton>
          </CenterBlock>
        </Form>
      );
    } else {
      return (
        <Form>
          <Success />
        </Form>
      );
    }
  }
}
