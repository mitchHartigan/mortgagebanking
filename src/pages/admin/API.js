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
  return json.deletionConfirmed;
};

export const ACCEPT_PENDING_ACRONYM = async (acronym) => {
  const result = await fetch("http://localhost:4000/acceptPendingAcronym", {
    method: "POST",
    body: JSON.stringify(acronym),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await result.json();
  return json.acceptConfirmed;
};

export const CHECK_TOKEN = async () => {
  const token = JSON.parse(localStorage.getItem("token"));

  if (!token) return false;

  const payload = { token: token };

  const result = await fetch(
    "https://md5rhmga23.execute-api.us-west-2.amazonaws.com/production/checkAuthentication",
    {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const json = await result.json();
  return json.validToken;
};
