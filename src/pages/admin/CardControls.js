import React, { useState } from "react";
import styled from "styled-components";
import { ApprovedIcon } from "./ApprovedIcon";
import { Confirmation } from "./CardFactory/Confirmation";
import { ControlButton } from "./ControlButton";
import { EditIcon } from "./EditIcon";
import { RejectIcon } from "./RejectIcon";

export default function CardControls(props) {
  const defaultState = {
    approve: false,
    reject: false,
    edit: false,
  };

  const [state, setState] = useState(defaultState);

  return (
    <Container>
      <AdmissionControls>
        <ControlButton
          name="Accept"
          handleClick={() => setState({ approve: !state.approve })}
        />
        <Confirmation display={state.approve} />
        <ControlButton
          name="Reject"
          handleClick={() => setState({ reject: !state.reject })}
        />
      </AdmissionControls>
      <ControlButton
        name="Edit"
        handleClick={() => setState({ edit: !state.edit })}
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

const ButtonText = styled.p`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  margin-left: 15px;
  margin-top: 14px;
  font-weight: bold;
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
