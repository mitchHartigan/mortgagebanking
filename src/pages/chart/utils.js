export const findObjRowSize = async (obj) => {
  let value = 0;

  async function findSmallestChildren(objArray) {
    if (objArray && objArray.length > 0) {
      objArray.forEach((obj) => {
        const hasChildren = obj.children && obj.children.length > 0;

        if (hasChildren) {
          findSmallestChildren(obj.children);
        } else {
          value = value + 1;
        }
      });
    }
  }

  await findSmallestChildren(obj.children);
  return value;
};

export const genTitleRowArray = (canonicalData) => {
  const titleRowArray = [];

  canonicalData.forEach((column) => {
    console.log("column", column);
    titleRowArray.push(column[0].type);
  });

  console.log(titleRowArray);
  return titleRowArray;
};

// export async function parseDuplicateCellData(canonicalData) {
//   for (let [i, column] of canonicalData.entries()) {
//     if (i + 1 === canonicalData.length) {
//       let cursor;
//       for (let [x, obj] of column.entries()) {
//         let previousItem = column[x - 1];
//         let currentItem = column[x];
//         if (
//           previousItem &&
//           currentItem &&
//           previousItem.body === currentItem.body
//         ) {
//           if (cursor) previousItem = canonicalData[i][cursor];
//           // update previousBody coords to cover current obj coords.
//           // remove current duplicate item.
//           canonicalData[i][x].coords = [
//             previousItem.coords[0],
//             currentItem.coords[1],
//           ];
//           console.log("updated", canonicalData[i][x]);
//           canonicalData[i].splice(x, 1);
//           console.log("duplicate!");
//         } else {
//           cursor = undefined;
//           console.log("not duplicate");
//         }
//       }
//     }
//   }
//   return canonicalData;
// }

export async function parseDuplicateCellData(canonicalData) {
  for (let [i, column] of canonicalData.entries()) {
    if (i + 1 === canonicalData.length) {
      const newColumn = await parseDuplicates(column);
      console.log("newColumn", newColumn);
      canonicalData.splice(i, 1, newColumn);
      console.log("asldfkjasd", canonicalData);
    }
  }
  return canonicalData;
}

const parseDuplicates = async (columnArr) => {
  let completed = false;

  for (let [i, obj] of columnArr.entries()) {
    let currentItem = columnArr[i];
    let nextItem = columnArr[i + 1];

    if (currentItem && nextItem && nextItem.body === currentItem.body) {
      console.log("yep!");
      columnArr[i].coords = [
        columnArr[i].coords[0],
        columnArr[i + 1].coords[1],
      ];
      columnArr.splice(i + 1, 1);
      parseDuplicates(columnArr);
    } else {
      console.log("spliced column arr?", columnArr);
      return columnArr;
    }
  }
};

export const populateCanonicalArrayCoords = async (canonicalData) => {
  let leafCursor = 2;
  let newData = canonicalData;

  for (let [i, array] of canonicalData.entries()) {
    let cursor = 2;

    for (let [x, obj] of array.entries()) {
      const objRowSize = await findObjRowSize(obj);

      if (objRowSize === 0) {
        const objCoords = [leafCursor, leafCursor + 1];
        leafCursor = leafCursor + 1;
        const updatedObj = { ...newData[i][x] };
        updatedObj.coords = objCoords;
        newData[i].splice(x, 1, updatedObj);
      } else {
        const objCoords = [cursor, cursor + objRowSize];
        cursor = cursor + objRowSize;
        const updatedObj = { ...newData[i][x] };
        updatedObj.coords = objCoords;
        newData[i].splice(x, 1, updatedObj);
      }
    }
  }

  return newData;
};

export const populateCanonicalDataArray = async (objArray, canonicalData) => {
  const data = canonicalData;

  const parseObjects = async (objArray) => {
    objArray.forEach((obj) => {
      if (obj.level || obj.level === 0) {
        data[obj.level].push(obj);
      }
      if (obj.children) parseObjects(obj.children);
    });
  };

  await parseObjects(objArray);
  return data;
};

export const genCanonicalDataArray = (level) => {
  const canonicalArr = [];

  for (let i = 0; i <= level; i++) {
    canonicalArr.push([]);
  }

  return canonicalArr;
};

export const findLowestLevel = async (objArray) => {
  let lowestLevel = 0;

  const parseHierarchy = async (objArray) => {
    objArray.forEach((obj) => {
      if (obj.level > lowestLevel) lowestLevel = obj.level;
      if (obj.children && obj.children.length > 0) {
        parseHierarchy(obj.children);
      }
    });
  };

  await parseHierarchy(objArray);
  return lowestLevel;
};
