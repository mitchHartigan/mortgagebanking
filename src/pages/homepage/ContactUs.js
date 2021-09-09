import React from "react";
import styled from "styled-components";
import { Title } from "components/Title";
import { Subtext } from "components/Subtext";
import ContactForm from "./_ContactForm";

export class ContactUs extends React.Component {
  render() {
    console.log("props from ContactUs", this.props);
    return (
      <Container>
        <Title size="xxl" color="offWhite">
          Contact
        </Title>
        <Subtext
          size="sm"
          color="offWhite"
          alignment="center"
          styles="margin: 30px 0px 30px 0px"
        >
          We'd love to hear from you. Send us a message and we'll get in touch:{" "}
        </Subtext>
        <ContactForm interestArea={this.props.interestArea} />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
