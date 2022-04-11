import React from "react";
import styled from "styled-components";

export default function CardControls(props) {
  const { handleApprove, handleEdit, handleReject } = props;

  return (
    <Container>
      <ApproveButton onClick={handleApprove}>Approve</ApproveButton>
      <RejectButton onClick={handleReject}>Reject</RejectButton>
      <EditButton onClick={handleEdit}>Edit</EditButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ApproveButton = styled.button`
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

const RejectButton = styled.button`
  outline: none;
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  border-radius: 5px;
  width: 130px;
  height: 35px;
  border: 2px solid #dc3545;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.offWhite};

  &:hover {
    background-color: #dc3545;
    color: white;
    transition: background-color 10ms linear;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.3);
  }
`;

const EditButton = styled.button`
  outline: none;
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  border-radius: 5px;
  box-shadow: 2px 1px 1px gray;
  width: 100px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.mainGold};
`;
