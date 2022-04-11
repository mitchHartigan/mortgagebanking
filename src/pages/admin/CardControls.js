import React from "react";
import styled from "styled-components";

export default function CardControls(props) {
  const { handleApprove, handleEdit, handleReject } = props;

  return (
    <Container>
      <AdmissionControls>
        <ApproveButton onClick={handleApprove}>Approve</ApproveButton>
        <RejectButton onClick={handleReject}>Reject</RejectButton>
      </AdmissionControls>
      <EditButton onClick={handleEdit}>Edit</EditButton>
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
  margin: -15px 0px 15px 50px;
  padding: 75px 0px 75px 0px;
`;

const ApproveButton = styled.button`
  margin: 15px 0px 15px 0px;
  outline: none;
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  border-radius: 5px;
  width: 130px;
  height: 35px;
  border: 2px solid #198754;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    background-color: #198754;
    color: white;
    transition: background-color 10ms linear;
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

  &:hover {
    background-color: ${(props) => props.theme.colors.mainGold};
  }
`;
