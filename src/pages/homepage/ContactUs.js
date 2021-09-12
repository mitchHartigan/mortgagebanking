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
        <Title id="scrollTarget" size="xxl" color="offWhite">
          Contact
        </Title>
        <Subtext
          size="sm"
          color="offWhite"
          alignment="center"
          styles={SubtextStylesOverride}
        >
          We'd love to hear from you.
        </Subtext>
        <ContactForm interestArea={this.props.interestArea} />
      </Container>
    );
  }
}

const SubtextStylesOverride = `
  margin: 30px 0px 30px 0px;

  @media (max-width: 900px){ 
    padding: 0px 10px 0px 10px;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
