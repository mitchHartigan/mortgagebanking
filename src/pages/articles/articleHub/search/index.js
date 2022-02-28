// import React from "react";
// import styled from "styled-components";
// import FilterSearch from "./filterSearch";
// import KeywordSearch from "./keywordSearch";
// import Status from "./status";

// export default class Search extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       keyword: "",
//       tags: [],
//     };
//   }

//   updateKeyword = (keyword) => {
//     this.setState({ tags: [], keyword: keyword });
//   };

//   updateTags = (tagsArr) => {
//     this.setState({ tags: tagsArr, keyword: "" });
//   };

//   render() {
//     return (
//       <>
//         <SearchContainer>
//           <KeywordSearch handleChange={this.updateKeyword} />
//           <FilterSearch handleChange={this.updateTags} />
//         </SearchContainer>
//         <Status keyword={this.state.keyword} tags={this.state.tags} />
//       </>
//     );
//   }
// }

// const SearchContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 100%;
//   justify-content: center;
//   margin-top: 25px;
// `;

// const StatusContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 100%;
//   justify-content: center;
// `;
