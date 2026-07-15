// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { loginUser } from "../api/auth";
// import "../assets/css/Auth.css";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleChange = (e) =>
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const res = await loginUser(form);

//     console.log("Login success:", res.data);

//     // store token (if you return JWT)
//     localStorage.setItem("token", res.data.token);

//     alert("Login successful!");

//   } catch (err) {
//     console.log(err.response?.data || err.message);
//     alert("Invalid credentials");
//   }
// };

//   return (
//     <div className="auth-page">
//       <div className="auth-card">
//         <div className="auth-brand">
//           <span>🧑‍🍳</span> Craveo
//         </div>
//         <h1>Welcome back</h1>
//         <p className="auth-subtitle">Log in to continue your food journey.</p>

//         <form onSubmit={handleSubmit} className="auth-form">

//   {/* email */}
//   {/* password */}

//   <button type="submit" className="auth-submit">
//     Log In
//   </button>

// </form>

//         <p className="auth-switch">
//           Don't have an account? <Link to="/register">Sign up</Link>
//         </p>
//       </div>

//       <div className="auth-visual">
//         <div className="auth-visual-emoji">🥗</div>
//         <h2>Good Food, Great Vibes</h2>
//         <p>Discover dishes crafted with love and delivered with care.</p>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Auth.css";
import { loginUser } from "../api/auth";
import { useCart } from "../context/CartContext.jsx";

export default function Login() {
  const navigate = useNavigate();
  const { refreshCart } = useCart();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(form);

      // store token
      localStorage.setItem("token", res.data.token);
      await refreshCart();

      alert("Login successful!");

      // redirect to home
      navigate("/");

    } catch (err) {
      console.log(err);
      alert("Login failed! Check email/password");
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">
        <div className="auth-brand">
          <span>🧑‍🍳</span> Craveo
        </div>

        <h1>Welcome back</h1>
        <p className="auth-subtitle">
          Log in to continue your food journey.
        </p>

        <form onSubmit={handleSubmit} className="auth-form">

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

          <button type="submit" className="auth-submit">
            Log In
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <Link to="/register">Sign up</Link>
        </p>
      </div>

      <div className="auth-visual">
        <div className="auth-visual-emoji">🥗</div>
        <h2>Good Food, Great Vibes</h2>
        <p>Discover dishes crafted with love and delivered with care.</p>
      </div>

    </div>
  );
}