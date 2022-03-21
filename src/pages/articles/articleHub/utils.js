// To prevent having to make an API request each time the
// ArticlesHub loads.
export function saveArticlesToSessionStorage(
  articleData,
  setArticleData,
  setLoadingArticleData
) {
  const existingArticleData = JSON.parse(sessionStorage.getItem("articleData"));

  if (existingArticleData) {
    setArticleData(existingArticleData);
    setLoadingArticleData(false);
  } else {
    sessionStorage.setItem("articleData", JSON.stringify(articleData));
    setArticleData(articleData);
    setLoadingArticleData(false);
  }
}

export function sortArticleDataByDate(articles) {
  let dateFormattedArticles = [];

  for (let article of articles) {
    const formattedArticleObj = {
      ...article,
      formattedDate: new Date(article.isoDate),
    };
    dateFormattedArticles.push(formattedArticleObj);
  }

  const orderedArr = dateFormattedArticles
    .slice()
    .sort((a, b) => b.formattedDate - a.formattedDate);

  return orderedArr;
}
