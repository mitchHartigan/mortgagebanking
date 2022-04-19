import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Confirmation } from "./CardFactory/Confirmation";
import { EditButton } from "./EditButton";
import { ConfirmationButton } from "./ConfirmationButton";

export default function CardControls(props) {
  const {
    setActiveCardIndex,
    toggleEditOn,
    toggleEditOff,
    activeCardIndex,
    index,
  } = props;

  const defaultState = {
    approve: false,
    reject: false,
    edit: false,
  };

  const [state, setState] = useState(defaultState);
  const { approve, reject, edit } = state;

  function handleClick(name) {
    setState({ [name]: !state[name] });
    setActiveCardIndex(index);
    if (name === "edit" && !edit) toggleEditOn();
    if (name === "edit" && edit) toggleEditOff();
  }

  useEffect(() => {
    if (activeCardIndex !== index) {
      setState(defaultState);
    }
  }, [activeCardIndex, index]);

  return (
    <Container name={index}>
      <AdmissionControls>
        <ConfirmationButton
          name="Accept"
          handleClick={() => handleClick("approve")}
          disabled={reject || edit}
          active={approve}
          setState={setState}
        />
        <Confirmation
          display={approve}
          name="approve"
          acceptHandler={() => console.log("accepted.")}
          rejectHandler={() => setState(defaultState)}
        />
        <ConfirmationButton
          name="Reject"
          handleClick={() => handleClick("reject")}
          disabled={approve || edit}
          active={reject}
          setState={setState}
        />
        <Confirmation
          display={reject}
          name="reject"
          rejectHandler={() => setState(defaultState)}
        />
      </AdmissionControls>
      <EditButton
        name="Edit"
        handleClick={() => handleClick("edit")}
        disabled={approve || reject}
        active={edit}
        setState={setState}
      />
    </Container>
  );
}

const AdmissionControls = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: -15px 0px 15px 25px;
  padding: 20px 0px 35px 0px;
  height: 348px;
`;

const ApproveButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px 0px 15px 0px;
  outline: none;
  padding-left: 10px;
  border-radius: 5px;
  width: 130px;
  height: 35px;
  /* border: 2px solid #198754; */
  cursor: pointer;
  background-color: white;
  box-shadow: 1px 2px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: #e1a915;
    color: white;
  }
`;
