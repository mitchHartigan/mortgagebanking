import React, { useState, useEffect } from "react";
import styled from "styled-components";

export function ConclusionCell(props) {
  const { column, row, data } = props;
  const [subdivisions, setSubdivisions] = useState();
  const [conclusionData, setConclusionData] = useState();

  console.log("conclusionData", conclusionData);

  useEffect(() => {
    if (data.children !== undefined && data.children.length > 0) {
      setConclusionData([...data.children]);
    } else {
      setConclusionData([]);
    }
  }, []);

  const mapCellRows = (conclusionData) => {
    let str = "";
    const data = conclusionData;

    for (let conclusion of data) {
      str = str + "1fr ";
    }

    console.log(str);
    return str;
  };

  if (conclusionData !== undefined) {
    return (
      <Container
        {...props}
        conclusionData={conclusionData}
        mapCellRows={mapCellRows}
      >
        {conclusionData.map((category, i) => {
          return <p key={i}>{category.name}</p>;
        })}
      </Container>
    );
  } else {
    console.log("undefined conclusionData?", conclusionData);
    return <p>uh oh</p>;
  }
}

const Container = styled.div`
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${(props) => {
    props.mapCellRows(props.conclusionData);
  }};
  min-height: 50px;
  min-width: 100px;
  background-color: lightblue;
  margin: 5px;
`;

// function hasSameProperties(obj1, obj2) {
//   return Object.keys(obj1).every(function (property) {
//     if (typeof obj1[property] !== "object") {
//       return obj2.hasOwnProperty(property);
//     } else {
//       return hasSameProperties(obj1[property], obj2[property]);
//     }
//   });
// }
