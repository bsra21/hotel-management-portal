import "./Navbar.css";
import { isLoggedIn, logout } from "../api";
export default function Navbar() {
  {
    isLoggedIn() && (
   <button onClick={logout}>Çıkış</button>
   )
  } 

  return ( <>
    <nav className="navbar">
      <h1>🍽️ Hotel Menu</h1>
    </nav>
    <div style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
      <button onClick={logout}>Logout</button>
    </div>
    </>
  );
}
