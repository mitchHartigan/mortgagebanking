import React, { useState } from "react";
import styled from "styled-components";

export default function FilterSearch() {
  const [dropdown, toggleDropdown] = useState(false);

  if (!dropdown) {
    return (
      <FilterButton onClick={() => toggleDropdown(true)}>Filter</FilterButton>
    );
  }
  return (
    <FilterDropdown onClick={() => toggleDropdown(false)}></FilterDropdown>
  );
}

const FilterButton = styled.div`
  display: flex;
  width: 200px;
  background-color: white;
`;

const FilterDropdown = styled.div`
  display: flex;
  width: 300px;
  height: 500px;
  background-color: white;
`;
