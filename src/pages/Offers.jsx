import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { getAllBanners } from "../api/banner";
import "../assets/css/Offers.css";

export default function Offers() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copiedCode, setCopiedCode] = useState("");

  useEffect(() => {
    getAllBanners()
      .then((res) => setOffers((res.data || []).filter((b) => b.active)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const handleCopy = (code) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(""), 1500);
  };

  return (
    <div className="home-layout">
      <Navbar active="offers" />
      <main className="offers-main">
        <h1 className="offers-title">Offers &amp; Deals</h1>

        {loading ? (
          <p className="offers-loading">Loading offers...</p>
        ) : offers.length === 0 ? (
          <div className="offers-empty">
            <p className="offers-empty-icon">🏷️</p>
            <p>Abhi koi active offer available nahi hai. Jaldi wapas aao!</p>
          </div>
        ) : (
          <div className="offers-grid">
            {offers.map((o) => (
              <div className="offer-tile" key={o.id}>
                <div
                  className="offer-tile-visual"
                  style={{
                    background: o.image
                      ? `url(${o.image}) center/cover no-repeat`
                      : "linear-gradient(120deg, #7a1450, #3a0f2b)",
                  }}
                >
                  <div className="offer-tile-overlay">
                    <p className="offer-tile-title">{o.title}</p>
                    <p className="offer-tile-subtitle">{o.subtitle}</p>
                  </div>
                </div>

                <div className="offer-tile-body">
                  {o.offerText && (
                    <button
                      className="offer-code-btn"
                      onClick={() => handleCopy(o.offerText)}
                    >
                      {copiedCode === o.offerText ? "Copied! ✓" : `${o.offerText} — Tap to copy`}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}