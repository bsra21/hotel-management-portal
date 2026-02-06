const API_URL = "http://127.0.0.1:8000/api";

// login isteği
export async function loginUser(username, password) {
  const response = await fetch(`${API_URL}/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json(); // { access, refresh }
}

// token’lı istek örneği
export async function authFetch(url) {
  const token = localStorage.getItem("access_token");

  return fetch(`${API_URL}${url}`, {
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
}
