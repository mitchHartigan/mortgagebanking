import React, { useState } from "react";
import styled from "styled-components";
import "./styles.css";

import { tags } from "./tags";

export default function FilterSearch(props) {
  const [dropdown, toggleDropdown] = useState(false);
  const [activeTags, setActiveTags] = useState([]);

  function addActiveTag(tag) {
    const updatedTags = [...activeTags, tag];
    setActiveTags(updatedTags);
    props.handleUpdate(updatedTags);
  }

  function removeActiveTag(tag) {
    const updatedTags = activeTags;
    const tagIndex = activeTags.indexOf(tag);
    updatedTags.splice(tagIndex, 1);

    setActiveTags(updatedTags);
    props.handleUpdate(updatedTags);
  }

  function handleCheckInput(evt) {
    if (evt.target.checked) {
      addActiveTag(evt.target.name);
    } else {
      removeActiveTag(evt.target.name);
    }
  }

  return (
    <>
      <FilterButton dropdown={dropdown} onClick={() => toggleDropdown(true)}>
        <FilterHeaderRowContainer>
          <Image src={"filter_icon.svg"} alt="Filter sort icon." />
          <Title>Filter by tag</Title>
          <Chevron src={"chevron_black.png"} alt="Chevron" />
        </FilterHeaderRowContainer>
      </FilterButton>

      <FilterDropdown dropdown={dropdown}>
        <DropDownHeaderContainer onClick={() => toggleDropdown(false)}>
          <DropdownTitleContainer>
            <Image src={"filter_icon.svg"} alt="Filter sort icon." />
            <Title>Filter by tag</Title>
          </DropdownTitleContainer>
          <Chevron src={"chevron_black.png"} alt="Chevron" />
        </DropDownHeaderContainer>

        <Span />
        <TagContainer>
          {tags.map((tag) => {
            return (
              <div>
                <input
                  type="checkbox"
                  name={tag}
                  onChange={(evt) => handleCheckInput(evt)}
                  key={tag}
                />
                <label htmlFor={tag}>{tag}</label>
              </div>
            );
          })}
        </TagContainer>
      </FilterDropdown>
    </>
  );
}

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 200px;
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
  padding: 0px 5px 0px 5px;
  cursor: pointer;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  height: 33px;
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
