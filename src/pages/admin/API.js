export const FETCH_PENDING_ACRONYMS = async () => {
  const result = await fetch("http://localhost:4000/pendingAcronyms");
  const json = await result.json();

  if (json.pendingAcronyms) return json.pendingAcronyms;
};
