export const _articleLookup = (articleName, articlesData) => {
  let match;

  articlesData.forEach((article) => {
    if (article.name === articleName) match = article;
  });

  if (match) return match;
  else return null;
};
