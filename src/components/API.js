const BACKEND_URL = "";

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

export const POST_DOWNLOAD_FORM = async (data) => {
  const response = await fetch(`${BACKEND_URL}/casestudy`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const body = await response.json();
  return body;
};
