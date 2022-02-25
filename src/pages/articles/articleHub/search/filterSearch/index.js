import React, { useState } from "react";
import styled from "styled-components";

import { tags } from "./tags";

export default function FilterSearch(props) {
  const [dropdown, toggleDropdown] = useState(false);
  const [activeTags, setActiveTags] = useState([]);

  function addActiveTag(tag) {
    const updatedTags = [...activeTags, tag];
    console.log("addActiveTag, updatedTags:", updatedTags);
    setActiveTags(updatedTags);
    props.handleUpdate(updatedTags);
  }

  function removeActiveTag(tag) {
    const updatedTags = activeTags;
    const tagIndex = activeTags.indexOf(tag);
    updatedTags.splice(tagIndex, 1);

    console.log("removeActiveTag, updatedTags: ", updatedTags);

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
        Filter
      </FilterButton>
      <FilterDropdown dropdown={dropdown}>
        <DropDownHeaderContainer>
          <Title>Filter by tag</Title>
          <Chevron onClick={() => toggleDropdown(false)} />
        </DropDownHeaderContainer>

        <Span />
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
      </FilterDropdown>
    </>
  );
}

const Chevron = styled.div`
  width: 15px;
  height: 15px;
  background-color: lightblue;
`;

const Span = styled.div`
  width: 100%;
  height: 2px;
  position: static;
  background-color: ${(props) => props.theme.colors.mainGold};
`;

const Title = styled.h4`
  margin-bottom: 0px;
`;

const DropDownHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const FilterButton = styled.div`
  display: ${(props) => (props.dropdown ? "none" : "flex")};
  width: 200px;
  background-color: white;
`;

const FilterDropdown = styled.div`
  display: ${(props) => (props.dropdown ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  width: 300px;
  background-color: white;
`;
