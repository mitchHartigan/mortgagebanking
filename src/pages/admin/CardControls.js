import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Confirmation } from "./CardFactory/Confirmation";
import { EditButton } from "./EditButton";
import { ConfirmationButton } from "./ConfirmationButton";

import { REJECT_PENDING_ACRONYM, ACCEPT_PENDING_ACRONYM } from "./API";

export default function CardControls(props) {
  const {
    setActiveCardIndex,
    toggleEditOn,
    toggleEditOff,
    activeCardIndex,
    index,
    acronyms,
    setRejectedAcronymId,
    setAcceptedAcronymId,
    accepted,
    rejected,
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

  const findAcronymById = (id) => {
    for (let acronym of acronyms) if (acronym._id === id) return acronym;
  };

  async function handleDelete(id) {
    const deletionTarget = findAcronymById(id);
    const success = await REJECT_PENDING_ACRONYM(deletionTarget);
    if (success) setRejectedAcronymId(id);
  }

  async function handleAccept(id) {
    const acceptTarget = findAcronymById(id);
    const success = await ACCEPT_PENDING_ACRONYM(acceptTarget);
    if (success) setAcceptedAcronymId(id);
  }

  useEffect(() => {
    if (activeCardIndex !== index) {
      setState(defaultState);
    }
  }, [activeCardIndex, index]);

  return (
    <Container name={index} approve={approve} reject={reject}>
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
          acceptHandler={() => handleAccept(activeCardIndex)}
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
          acceptHandler={() => handleDelete(activeCardIndex)}
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
  margin: ${(props) =>
    props.approve || props.reject
      ? "-15px -350px 15px 30px"
      : "-15px 0px 15px 30px"};
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
