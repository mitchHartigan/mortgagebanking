export const FETCH_PENDING_ACRONYMS = async () => {
  const result = await fetch("http://localhost:4000/pendingAcronyms");
  const json = await result.json();

  if (json.pendingAcronyms) return json.pendingAcronyms;
};

export const REJECT_PENDING_ACRONYM = async (acronym) => {
  const result = await fetch("http://localhost:4000/rejectPendingAcronym", {
    method: "POST",
    body: JSON.stringify(acronym),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await result.json();
  console.log("json", json.deletionConfirmed);
  return json.deletionConfirmed;
};
