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
      invalidName: false,
      invalidEmail: false,
      invalidMessage: false,
      submitted: false,
      success: false,
    };
  }

  handleUpdate = (evt) => {
    const { name, value } = evt.target;

    this.setState({ [name]: value });
  };

  validateForm = () => {
    const { name, email, phone, message } = this.state;

    this.setState(
      {
        invalidName: name === "",
        invalidEmail: email === "",
        invalidMessage: message === "",
      },
      async () => {
        const { invalidName, invalidEmail, invalidMessage } = this.state;

        if ((!invalidName, !invalidEmail, !invalidMessage)) {
          // post form.
          const payload = {
            name: name,
            email: email,
            phone: phone,
            message: message,
          };

          this.setState({ submitted: true });
          const submission = await POST_CONTACT_FORM(payload);
          console.log("submission", submission);

          if (submission === "success") {
            this.setState({ success: true });
          }
        }
      }
    );
  };

  render() {
    const { invalidEmail, invalidMessage, invalidName, submitted, success } =
      this.state;

    if (!success) {
      return (
        <Form>
          <Subtext alignment="center" styles="margin-bottom: 30px;" size="xs">
            Or, send us a message and we'll get in touch:
          </Subtext>
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
          />
          <TextArea
            label="Message"
            name="message"
            onChange={this.handleUpdate}
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
