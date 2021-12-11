export const querySettings = (query) => {
  return JSON.stringify({
    settingsArr: [
      {
        $search: {
          autocomplete: {
            query: query,
            path: "Acronym",
          },
        },
      },
      { $limit: 50 },
      {
        $project: {
          _id: 1,
          Acronym: 1,
          Citation: 1,
          "Description of use": 1,
          "Date Entered": 1,
          Text: 1,
          Definition: 1,
          score: { $meta: "searchScore" },
        },
      },
    ],
  });
};
