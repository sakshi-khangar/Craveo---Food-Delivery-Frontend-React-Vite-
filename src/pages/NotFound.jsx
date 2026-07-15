import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-emoji">🍔</div>
      <h1>404</h1>
      <p>Oops! Looks like this dish isn't on the menu.</p>
      <Link to="/" className="notfound-btn">
        Back to Home →
      </Link>
    </div>
  );
}