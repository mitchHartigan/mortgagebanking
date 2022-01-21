export const FETCH_ARTICLE_DATA = async () => {
  let articles = await fetch(
    "https://md5rhmga23.execute-api.us-west-2.amazonaws.com/production/articles"
  );
  articles = await articles.json();
  return articles;
};
