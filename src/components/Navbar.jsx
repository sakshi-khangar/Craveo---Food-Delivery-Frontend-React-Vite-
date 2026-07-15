import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import "../assets/css/Navbar.css";

const NAV_ITEMS = [
  { key: "home", label: "Home", icon: "🏠", path: "/" },
  { key: "explore", label: "Explore", icon: "🧭", path: "/restaurants" },
  // { key: "favourites", label: "Favourites", icon: "❤️", path: "/restaurants" },
  { key: "cart", label: "Cart", icon: "🛒", path: "/cart" },
  { key: "offers", label: "Offers", icon: "🏷️", path: "/offers" },
  { key: "ai", label: "AI Assistant", icon: "✨", badge: "New", path: "/" },
  { key: "profile", label: "Profile", icon: "👤", path: "/profile" },
  { key: "orders", label: "My Orders", icon: "🧾", path: "/orders" },
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

const getActive = () => {
  switch (location.pathname) {
    case "/":
      return "home";
    case "/restaurants":
      return "explore";
    case "/cart":
      return "cart";      // ✅
    case "/orders":
      return "orders";    // ✅
    case "/profile":
      return "profile";
    case "/offers":          // 👈 naya
      return "offers";
    default:
      return "";
  }
};

const active = getActive();

  return (
    <aside className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">🧑‍🍳</span>
        <div className="navbar-brand-text">
          <span className="navbar-title">Craveo</span>
          <span className="navbar-subtitle">Food Beyond Hunger</span>
        </div>
      </div>

      <nav className="navbar-links">
        {NAV_ITEMS.map((item) => (
          <Link
  key={item.key}
  to={item.path}
  className={`navbar-link ${active === item.key ? "active" : ""}`}
>
            <span className="navbar-link-icon">{item.icon}</span>
            <span className="navbar-link-label">{item.label}</span>
            {item.key === "cart" && totalItems > 0 && (
  <span className="navbar-badge cart-count">{totalItems}</span>
)}
            {item.key !== "orders" && item.badge && (
              <span className="navbar-badge">{item.badge}</span>
            )}
          </Link>
        ))}
      </nav>

      <div className="navbar-promo">
        <p className="navbar-promo-title">Fast Delivery</p>
        <p className="navbar-promo-text">At your doorstep in 30 minutes</p>
        <div className="navbar-promo-illustration"></div>
        <button className="navbar-promo-btn">Order Now →</button>
      </div>

      <div className="navbar-darkmode">
        <span>Dark Mode</span>
        <button
          className={`toggle ${darkMode ? "on" : ""}`}
          onClick={() => setDarkMode((d) => !d)}
          aria-label="Toggle dark mode"
        >
          <span className="toggle-knob" />
        </button>
      </div>
    </aside>
  );
}