import React from 'react'
import styled from 'styled-components'
import '../../index.css'

export default function Results(props) {
  const {query, cursorPos} = props;

  return (
    <Container query={query}>
      <ViewAllResult listPos={1} cursorPos={cursorPos} query={query}>
        <Acronym>{query}</Acronym>
        <Definition><i>{`See all search results >`}</i></Definition>
      </ViewAllResult>
      <Result listPos={2} cursorPos={cursorPos}>
        <Acronym>ANA</Acronym>
        <Definition>Annual Budget Authority asdfasf asdf asdfasdf asdfasdf asdf asdf asdf asdf asdf as df ASD Asdasdfasdf </Definition>
      </Result>
    </Container>
  )
}

const Container = styled.div`
  display: ${props => props.query.length > 1 ? 'flex' : "none"};
  flex-direction: column;
  background-color: white;
  width: 760px;
  height: 500px;
`;

const Result = styled.div`
  display: grid;
  grid-template-columns: 65px 10% 10% 50% 1fr;
  width: 100%;

  background-color: ${props => props.listPos === props.cursorPos ? props.theme.colors.darkBlue : "transparent"};
  color: ${props => props.listPos === props.cursorPos ? 'white' : "black"};
`;

const Acronym = styled.p`
  grid-column: 2 / 3;
  font-size: ${props => props.theme.text.xs};
  font-family: ${props => props.theme.textFont};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

const ViewAllResult = styled.li`
  display: ${props => props.query !== '' ? 'grid': 'none'};
  grid-template-columns: 65px 10% 10% 50% 1fr;
  width: 100%;

  background-color: ${props => props.listPos === props.cursorPos ? props.theme.colors.darkBlue : "transparent"};
  color: ${props => props.listPos === props.cursorPos ? 'white' : "black"};
`;