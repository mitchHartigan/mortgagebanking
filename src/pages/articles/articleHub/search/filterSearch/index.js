import React, { useState } from "react";
import styled from "styled-components";

import filterIcon from "./filter_icon.svg";
import chevron from "./chevron_black.png";

import { tags } from "./tags";

export default function FilterSearch(props) {
  const [dropdown, toggleDropdown] = useState(false);

  function addActiveTag(tag) {
    const updatedTags = [...props.tags, tag];
    props.handleUpdate(updatedTags);
  }

  function removeActiveTag(tag) {
    const updatedTags = props.tags;
    const tagIndex = props.tags.indexOf(tag);
    updatedTags.splice(tagIndex, 1);

    props.handleUpdate(updatedTags);
  }

  function handleCheckInput(evt) {
    const { checked, name } = evt.target;
    if (checked) addActiveTag(name);
    else removeActiveTag(name);
  }

  function checkIfTagActive(inputTag) {
    let activeTag = false;

    for (let savedTag of props.tags) {
      if (inputTag === savedTag) activeTag = true;
    }
    return activeTag;
  }

  return (
    <FilterDropdownContainer>
      <FilterButton dropdown={dropdown} onClick={() => toggleDropdown(true)}>
        <FilterHeaderRowContainer>
          <Image src={filterIcon} alt="Filter sort icon." />
          <Title>Filter by tag</Title>
          <Chevron src={chevron} alt="Chevron" />
        </FilterHeaderRowContainer>
      </FilterButton>

      <FilterDropdown dropdown={dropdown}>
        <DropDownHeaderContainer onClick={() => toggleDropdown(false)}>
          <DropdownTitleContainer>
            <Image src={filterIcon} alt="Filter sort icon." />
            <Title>Filter by tag</Title>
          </DropdownTitleContainer>
          <Chevron src={chevron} alt="Chevron" inverted />
        </DropDownHeaderContainer>

        <Span />
        <TagContainer>
          {tags.map((tag) => {
            return (
              <Tag>
                <TagInput
                  type="checkbox"
                  name={tag}
                  id={tag}
                  onChange={(evt) => handleCheckInput(evt)}
                  key={tag}
                  checked={checkIfTagActive(tag)}
                />
                <TagLabel htmlFor={tag}>{tag}</TagLabel>
              </Tag>
            );
          })}
        </TagContainer>
      </FilterDropdown>
    </FilterDropdownContainer>
  );
}

const Tag = styled.div`
  box-sizing: border-box;
  margin: 3px 0px 2px -1px;
  display: flex;
  flex-direction: row;
`;

const TagLabel = styled.label`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  margin-top: -1px;
  margin-left: 8px;
  cursor: pointer;
  user-select: none;
`;

const TagInput = styled.input`
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  cursor: pointer;
`;

const TagContainer = styled.div`
  margin-top: 7px;

  display: flex;
  flex-direction: column;
  max-height: 195px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #202020;
    border-radius: 5px;
  }
`;

const DropdownTitleContainer = styled.div`
  display: flex;
`;

const FilterHeaderRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin: 5px 0px 5px 0px;
`;

const Image = styled.img`
  align-self: center;
`;

const Chevron = styled.img`
  margin-top: 2px;
  transform: ${(props) => (props.inverted ? "rotate(180deg);" : "")};
`;

const Span = styled.div`
  width: 100%;
  height: 2px;
  position: static;
  background-color: ${(props) => props.theme.colors.mainGold};
`;

const Title = styled.p`
  margin: 0px 25px 0px 10px;
  font-family: ${(props) => props.theme.textFont};
  font-size: ${(props) => props.theme.text.xs};
  user-select: none;
  -webkit-user-select: none;

  @media (max-width: 1200px) {
    margin-right: 15px;
  }
`;

const DropDownHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 33px;
`;

const FilterButton = styled.div`
  display: ${(props) => (props.dropdown ? "none" : "flex")};
  background-color: white;
  box-sizing: border-box;
  padding: 0px 10px 0px 10px;
  cursor: pointer;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  height: 35px;
  min-width: 170px;
`;

const FilterDropdown = styled.div`
  display: ${(props) => (props.dropdown ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  width: 300px;
  background-color: white;
  box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.3);
  padding: 0px 10px 15px 10px;
  border-radius: 5px;
`;

const FilterDropdownContainer = styled.div``;
