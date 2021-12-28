// Returns Atlas search results for a given term from the backend.
export const API_FETCH_RESULTS = async (query) => {
  let results = await fetch(
    `https://md5rhmga23.execute-api.us-west-2.amazonaws.com/production/search?term=${query}`
  );

  let parsedResults = await results.json();

  return parsedResults;
};
