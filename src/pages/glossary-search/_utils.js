export const reverseArray = (array) => {
  let reversedArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
};

export const parseDuplicatesFromResults = (results, cards) => {
  if (results.length === 0 || !results) return [];
  if (cards.length === 0 || !cards) return results;

  let parsedResults = results;

  results.forEach((result, i) => {
    cards.forEach((card) => {
      if (result._id === card._id) {
        parsedResults.splice(i, 1);
      }
    });
  });

  return parsedResults;
};

export const genTruncatedResults = (results) => {
  return results.slice(0, 6);
};

export const API_FETCH_RESULTS = async (query) => {
  let results = await fetch(
    `https://md5rhmga23.execute-api.us-west-2.amazonaws.com/production/search?term=${query}`
  );

  let parsedResults = await results.json();

  return parsedResults;
};
