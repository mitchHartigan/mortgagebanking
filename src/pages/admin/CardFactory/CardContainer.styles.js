import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 670px;
  height: 100%;
  background: white;
  box-sizing: border-box;
  padding: 20px 60px 10px 60px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin: 0px 0px 30px 0px;
  opacity: ${(props) => (props.inactive ? "0.4" : "1")};
  ${(props) => (props.display ? "filter: blur(3px); opacity: 0.7;" : "")}

  @media (max-width: 1330px) {
    width: 500px;
  }

  @media (max-width: 500px) {
    width: 90vw;
    padding: 20px 20px 5px 20px;
  }
`;
