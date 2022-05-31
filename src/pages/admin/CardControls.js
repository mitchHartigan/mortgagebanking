import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Confirmation } from "./CardFactory/Confirmation";
import { EditControls } from "./EditControls";
import { ConfirmationButton } from "./ConfirmationButton";

import { REJECT_PENDING_ACRONYM, ACCEPT_PENDING_ACRONYM } from "./API";

export default function CardControls(props) {
  const {
    setActiveCardIndex,
    toggleEditOn,
    toggleEditOff,
    fetchAcronyms,
    updateAcronym,
    activeCardIndex,
    index,
    acronyms,
    setRejectedAcronymId,
    setAcceptedAcronymId,
  } = props;

  const defaultState = {
    publish: false,
    reject: false,
    edit: false,
  };

  const [state, setState] = useState(defaultState);
  const { publish, reject, edit } = state;

  function handleClick(name) {
    setState({ [name]: !state[name] });
    setActiveCardIndex(index);
    if (name === "edit" && !edit) toggleEditOn();
    if (name === "edit" && edit) toggleEditOff();
    // if (name === "save") saveChanges();
  }

  const findAcronymById = (id) => {
    for (let acronym of acronyms) if (acronym._id === id) return acronym;
  };

  async function handleDelete(id) {
    const deletionTarget = findAcronymById(id);
    const success = await REJECT_PENDING_ACRONYM(deletionTarget);
    if (success) setRejectedAcronymId(id);
  }

  async function handlePublish(id) {
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
    <Container name={index} publish={publish} reject={reject}>
      <AdmissionControls>
        <ConfirmationButton
          name="Publish"
          handleClick={() => handleClick("publish")}
          disabled={reject || edit}
          active={publish}
          setState={setState}
        />
        <Confirmation
          display={publish}
          name="publish"
          acceptHandler={() => handlePublish(activeCardIndex)}
          rejectHandler={() => setState(defaultState)}
        />
        <ConfirmationButton
          name="Reject"
          handleClick={() => handleClick("reject")}
          disabled={publish || edit}
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
      <EditControls
        name="Edit"
        handleClick={handleClick}
        disabled={publish || reject}
        active={edit}
        setState={setState}
        fetchAcronyms={fetchAcronyms}
        updateAcronym={updateAcronym}
        activeCardIndex={activeCardIndex}
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
    props.publish || props.reject
      ? "-15px -210px 15px 30px"
      : "-15px 0px 15px 30px"};
  padding: 20px 0px 35px 0px;
  height: 348px;
`;
