import React, { useState } from "react";
import styled from "styled-components";
import { ApprovedIcon } from "./ApprovedIcon";
import { EditIcon } from "./EditIcon";
import { RejectIcon } from "./RejectIcon";

export default function CardControls(props) {
  const { handleApprove, handleEdit, handleReject } = props;
  const [approveHovered, setApproveHovered] = useState(false);
  const [rejectHovered, setRejectHovered] = useState(false);
  const [editHovered, setEditHovered] = useState(false);

  return (
    <Container>
      <AdmissionControls>
        <ApproveButton
          onClick={handleApprove}
          onMouseEnter={() => setApproveHovered(true)}
          onMouseLeave={() => setApproveHovered(false)}
        >
          <ApprovedIcon invertColor={approveHovered} />
          <ButtonText>Approve</ButtonText>
        </ApproveButton>
        <RejectButton
          onClick={handleReject}
          onMouseEnter={() => setRejectHovered(true)}
          onMouseLeave={() => setRejectHovered(false)}
        >
          <RejectIcon invertColor={rejectHovered} />
          <ButtonText>Reject</ButtonText>
        </RejectButton>
      </AdmissionControls>
      <EditButton
        onClick={handleEdit}
        onMouseEnter={() => setEditHovered(true)}
        onMouseLeave={() => setEditHovered(false)}
      >
        <EditIcon invertColor={editHovered} />
        <ButtonText>Edit</ButtonText>
      </EditButton>
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
  justify-content: flex-start;
  align-items: flex-start;
  margin: -15px 0px 15px 50px;
  padding: 5px 0px 75px 0px;
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
  padding-left: 5px;
  border-radius: 5px;
  width: 130px;
  height: 35px;
  border: 2px solid #198754;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    background-color: #198754;
    color: white;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.3);
  }
`;

const RejectButton = styled(ApproveButton)`
  border: 2px solid #dc3545;

  &:hover {
    background-color: #dc3545;
  }
`;

const EditButton = styled(ApproveButton)`
  border: 2px solid ${(props) => props.theme.colors.mainGold};
  padding-left: 6px;

  &:hover {
    background-color: ${(props) => props.theme.colors.mainGold};
  }
`;
