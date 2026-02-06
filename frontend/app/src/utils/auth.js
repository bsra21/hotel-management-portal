export function isAuthenticated() {
  const token = localStorage.getItem("access");
  return !!token; // varsa true, yoksa false
}
