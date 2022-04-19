import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Confirmation } from "./CardFactory/Confirmation";
import { ControlButton } from "./ControlButton";

export default function CardControls(props) {
  const { setActiveCardIndex, activeCardIndex, index } = props;

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
  }

  useEffect(() => {
    if (activeCardIndex !== index) {
      setState(defaultState);
    }
  }, [activeCardIndex, index]);

  return (
    <Container name={index}>
      <AdmissionControls>
        <ControlButton
          name="Accept"
          handleClick={() => handleClick("approve")}
          disabled={reject || edit}
          active={approve}
          setState={setState}
        />
        <Confirmation display={approve} name="approve" />
        <ControlButton
          name="Reject"
          handleClick={() => handleClick("reject")}
          disabled={approve || edit}
          active={reject}
          setState={setState}
        />
        <Confirmation display={reject} name="reject" />
      </AdmissionControls>
      <ControlButton
        name="Edit"
        handleClick={() => handleClick("edit")}
        disabled={approve || reject}
        active={reject}
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

const RejectButton = styled(ApproveButton)`
  &:hover {
    background-color: #e1a915;
  }
`;

const EditButton = styled(ApproveButton)`
  padding-left: 10px;

  &:hover {
    background-color: ${(props) => props.theme.colors.mainGold};
  }
`;
