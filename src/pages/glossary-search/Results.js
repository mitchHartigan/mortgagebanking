import React from 'react'
import styled from 'styled-components'
import '../../index.css'

export default function Results() {
  return (
    <Container>
      {/* We'll .map() the results in here as li's or something... */}
      <Result>
        <Acronym>ANA</Acronym>
        <Definition>Annual Budget Authority asdfasf asdf asdfasdf asdfasdf asdf asdf asdf asdf asdf as df ASD Asdasdfasdf </Definition>
      </Result>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  background-color: white;
  width: 760px;
  height: 500px;
`;

const Result = styled.div`
  display: grid;
  grid-template-columns: 65px 10% 10% 50% 1fr;
  width: 100%;
`;

const Acronym = styled.p`
  grid-column: 2 / 3;
  font-size: ${props => props.theme.text.xs};
  font-family: ${props => props.theme.textFont};
`;

const Definition = styled.p`
  grid-column: 4 / 5;
  font-size: ${props => props.theme.text.xs};
  font-family: ${props => props.theme.textFont};
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

const ViewAllResult = styled.div`

`;