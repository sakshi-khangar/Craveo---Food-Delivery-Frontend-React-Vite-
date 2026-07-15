import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../api/auth";
import "../assets/css/Auth.css";

export default function Register() {
  const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
});

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

const handleSubmit = async (e) => {
  e.preventDefault();

  // password check
  if (form.password !== form.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password,
    };

    const res = await registerUser(payload);

    console.log(res.data);
    alert("User registered successfully!");

    // optional: clear form
    setForm({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });

  } catch (err) {
    console.log(err.response?.data || err.message);
    alert(err.response?.data || "Registration failed");
  }
};

  return (
    <div className="auth-page">
      <div className="auth-visual">
        <div className="auth-visual-emoji">🍕</div>
        <h2>Join Craveo Today</h2>
        <p>Personalized recommendations, lightning delivery, and more.</p>
      </div>

      <div className="auth-card">
        <div className="auth-brand">
          <span>🧑‍🍳</span> Craveo
        </div>
        <h1>Create an account</h1>
        <p className="auth-subtitle">Sign up and start craving.</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Full Name
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>


          <label>
  Phone Number
  <input
    type="tel"
    name="phone"
    placeholder="9876543210"
    value={form.phone}
    onChange={handleChange}
    required
  />
</label>

          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Confirm Password
            <input
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="auth-submit">
            Sign Up
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}