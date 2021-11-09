import React, { Component } from 'react'
import styled from 'styled-components'
import 'magnifying_glass.svg';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      query: '' 
    }
  }
  

  _handleInput = (evt) => {
    this.setState({query: evt.target.value}, ()=> {
      console.log(this.state)
    }) 
  }

  render() {
    return (
      <Container>
        <img src="magnifying_glass.svg" alt="magnifying glass" />
        <Input onChange={this._handleInput} placeholder="Enter acronym or term to search..." />
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 800px;
  height: 45px;
  background-color: white;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  box-sizing: border-box;
  padding-left: 30px;
`;


const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  background-color: transparent;

  font-size: ${props => props.theme.text.xs};
  font-family: ${props => props.theme.textFont};
  box-sizing: border-box;
  padding: 10px 10px 10px 40px;

  ::placeholder {
    color: black;
  }

  &:focus {
    padding-left: 20px;
  }
  
  transition: padding 10ms ease;
`;