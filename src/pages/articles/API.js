import { sortArticleDataByDate } from "./articleHub/utils";

export const FETCH_ARTICLE_DATA = async () => {
  let articles = await fetch(
    "https://md5rhmga23.execute-api.us-west-2.amazonaws.com/production/articles/staging"
  );
  articles = await articles.json();

  return sortArticleDataByDate(articles);
};

export const FETCH_ARTICLE = async (filename) => {
  try {
    let response = await fetch(
      `https://md5rhmga23.execute-api.us-west-2.amazonaws.com/production/markdown/staging/${filename}.md`
    );

    const responseObj = await response.json();

    if (responseObj.validArticle && responseObj.text) {
      return responseObj.text;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};
