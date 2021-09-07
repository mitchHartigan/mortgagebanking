const BACKEND_URL = "https://e9s42n6ba6.execute-api.us-east-1.amazonaws.com";

export const POST_CONTACT_FORM = async (data) => {
  const response = await fetch(`${BACKEND_URL}/contact`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const body = await response.json();
  return body;
};
