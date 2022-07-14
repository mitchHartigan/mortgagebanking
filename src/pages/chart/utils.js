export const findObjRowSize = async (obj) => {
  /* Check how many children a given element in our objArray
  has recursively. Ie, a branch with 2 sub-branches, each with
  2 leaves, will return a size of 4. */
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
  /* Create a seperate array containing just the 
  column titles to render as the column titles*/
  const titleRowArray = [];

  canonicalData.forEach((column) => {
    titleRowArray.push(column[0].type);
  });

  return titleRowArray;
};

export async function parseDuplicateCellData(canonicalData) {
  /* Calls a recursive function to eleminate duplicate cell data for the last 
  row of canonical data, which is the lowest level in the data hierarchy.*/
  for (let [i, column] of canonicalData.entries()) {
    if (i + 1 === canonicalData.length) {
      await parseDuplicates(column, (newColumn) => {
        console.log("newColumn", newColumn);
        canonicalData.splice(i, 1, newColumn);
        console.log("asldfkjasd", canonicalData);
      });
    }
  }
  return canonicalData;
}

const parseDuplicates = async (column, callback) => {
  let columnArr = column;
  for (let [i, obj] of columnArr.entries()) {
    let currentItem = columnArr[i];
    let nextItem = columnArr[i + 1];

    if (currentItem && nextItem && nextItem.body === currentItem.body) {
      columnArr[i].coords = [
        columnArr[i].coords[0],
        columnArr[i + 1].coords[1],
      ];
      columnArr.splice(i + 1, 1);
      parseDuplicates(columnArr, () => {});
    } else {
      callback(columnArr);
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
