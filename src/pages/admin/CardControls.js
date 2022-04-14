import React, { useState } from "react";
import styled from "styled-components";
import { Confirmation } from "./CardFactory/Confirmation";
import { ControlButton } from "./ControlButton";

export default function CardControls(props) {
  const defaultState = {
    approve: false,
    reject: false,
    edit: false,
  };

  const [state, setState] = useState(defaultState);

  const { approve, reject, edit } = state;

  return (
    <Container>
      <AdmissionControls>
        <ControlButton
          name="Accept"
          handleClick={() => setState({ approve: !approve })}
          disabled={reject || edit}
        />
        <Confirmation display={approve} />
        <ControlButton
          name="Reject"
          handleClick={() => setState({ reject: !reject })}
          disabled={approve || edit}
        />
      </AdmissionControls>
      <ControlButton
        name="Edit"
        handleClick={() => setState({ edit: !edit })}
        disabled={approve || reject}
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
