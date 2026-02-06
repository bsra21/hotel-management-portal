const API_URL = "http://127.0.0.1:8000/api";

export async function getMenu() {
  const token = localStorage.getItem("access");

  const res = await fetch("http://127.0.0.1:8000/api/menu/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Yetkisiz");
  }

  return res.json();
}


/* LOGIN */
export async function login(username, password) {
  const res = await fetch(`${API_URL}/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  const data = await res.json();

  localStorage.setItem("access", data.access);
  localStorage.setItem("refresh", data.refresh);

  return data;
}

/* TOKEN VAR MI */
export function isLoggedIn() {
  return !!localStorage.getItem("access");
}

/* TOKEN AL */
export function getToken() {
  return localStorage.getItem("access");
}

/* LOGOUT */
export function logout() {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  window.location.href = "/login";
}

