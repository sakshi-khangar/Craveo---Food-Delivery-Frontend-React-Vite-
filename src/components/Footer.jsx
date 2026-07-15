import React from "react";
import "../assets/css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <span>🧑‍🍳</span> Craveo
          </div>
          <p>Food Beyond Hunger — crafted with love, delivered with care.</p>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <a href="#about">About Us</a>
          <a href="#careers">Careers</a>
          <a href="#blog">Blog</a>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <a href="#help">Help Center</a>
          <a href="#safety">Safety</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <a href="#terms">Terms of Service</a>
          <a href="#privacy">Privacy Policy</a>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="footer-socials">
            <a href="#instagram" aria-label="Instagram">📷</a>
            <a href="#twitter" aria-label="Twitter">🐦</a>
            <a href="#facebook" aria-label="Facebook">📘</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Craveo. All rights reserved.</p>
      </div>
    </footer>
  );
}