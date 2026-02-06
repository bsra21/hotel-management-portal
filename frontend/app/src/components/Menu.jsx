import { useEffect, useState } from "react";
import "./Menu.css";
import Navbar from "./Navbar";
import { isLoggedIn,getMenu } from "../api";
export default function Menu() {
   if (!isLoggedIn()) {
  return <h2>Lütfen giriş yapın</h2>;
  }
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ FİLTRE STATE
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    getMenu()
      .then(setMenu)
      .catch(() => setError("Menü yüklenemedi"))
      .finally(() => setLoading(false));
  }, []);

  // ✅ FİLTRELİ LİSTE
  const filteredMenu =
    filter === 0 ? menu : menu.filter(item => item.food_type === filter);

  if (loading) return <h3>Yükleniyor...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <>
      {/* 🔹 FİLTRE BUTONLARI */}
      <div className="filters">
        <button onClick={() => setFilter(0)}>Tümü</button>
        <button onClick={() => setFilter(1)}>Veg</button>
        <button onClick={() => setFilter(2)}>Non-Veg</button>
      </div>
         <Navbar />
      {/* 🔹 MENÜ */}
    <div className="menu-container">
      {menu.map((item) => (
        <div className="menu-card" key={item.menu_id}>
          <div className="image-wrapper">
            <img
              src={`http://127.0.0.1:8000${item.item_image}`}
              alt={item.item_name}
            />
            <span className="price-badge">₺{item.item_price}</span>
          </div>

          <div className="menu-info">
            <h3>{item.item_name}</h3>
            <p className="category">
              {item.food_type === 1
                ? "Veg"
                : item.food_type === 2
                ? "Non-Veg"
                : "Both"}
            </p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
