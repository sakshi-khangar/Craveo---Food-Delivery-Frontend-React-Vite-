
// import React, { useEffect, useState } from "react";
// import { Link, Outlet, useLocation } from "react-router-dom";

// import { getCategories } from "../services/categoryService";
// import { getRestaurants } from "../services/restaurantService";
// import { getAllFoods } from "../services/foodService";
// import { getAllUsers } from "../api/auth";
// import "../css/AdminDashboard.css";

// const NAV_ITEMS = [
//   { key: "overview", label: "Overview", icon: "📊", path: "/admin" },
//   { key: "users", label: "Users", icon: "👥", path: "/admin/users" },
//   { key: "categories", label: "Categories", icon: "🍱", path: "/admin/categories" },
//   { key: "restaurants", label: "Restaurants", icon: "🏬", path: "/admin/restaurants" },

//   { key: "foods", label: "Foods", icon: "🍔", path: "/admin/foods" },
// ];

// export default function Dashboard() {
//   const location = useLocation();

//   const [stats, setStats] = useState({
//     categories: 0,
//     restaurants: 0,
//     foods: 0,
//   });

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadStats();
//   }, []);

//   const loadStats = async () => {
//     try {
//       const [catRes, resRes, foodRes] = await Promise.all([
//         getCategories(),
//         getRestaurants(),
//         getAllFoods(),
//       ]);

//       setStats({
//         categories: catRes.data.length,
//         restaurants: resRes.data.length,
//         foods: foodRes.data.length,
//       });
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const isOverview = location.pathname === "/admin";

//   return (
//     <div className="admin-layout">

//       {/* SIDEBAR */}
//       <aside className="admin-sidebar">
// <Link to="/" className="admin-logo">
//   <span className="admin-logo-icon">🍽️</span>
//   <div>
//     <h1>Craveo</h1>
//     <p>Admin Panel</p>
//   </div>
// </Link>

//         <nav className="admin-nav">
//           {NAV_ITEMS.map((item) => (
//             <Link
//               key={item.key}
//               to={item.path}
//               className={`admin-nav-item ${
//                 location.pathname === item.path ? "active" : ""
//               }`}
//             >
//               <span className="admin-nav-icon">{item.icon}</span>
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         <div className="admin-sidebar-footer">
//           <p>Logged in as</p>
//           <strong>Admin</strong>
//         </div>
//       </aside>

//       {/* MAIN CONTENT */}
//       <main className="admin-main">

//         {isOverview ? (
//           <>
//             <header className="admin-header">
//               <h2>Dashboard Overview</h2>
//               <p>Welcome back! Here's what's happening today.</p>
//             </header>

//             <section className="admin-stats-grid">
//               <div className="admin-stat-card stat-pink">
//                 <span className="stat-icon">🍱</span>
//                 <div>
//                   <p className="stat-label">Categories</p>
//                   <h3 className="stat-value">
//                     {loading ? "…" : stats.categories}
//                   </h3>
//                 </div>
//               </div>

//               <div className="admin-stat-card stat-purple">
//                 <span className="stat-icon">🏬</span>
//                 <div>
//                   <p className="stat-label">Restaurants</p>
//                   <h3 className="stat-value">
//                     {loading ? "…" : stats.restaurants}
//                   </h3>
//                 </div>
//               </div>

//               <div className="admin-stat-card stat-orange">
//                 <span className="stat-icon">🍔</span>
//                 <div>
//                   <p className="stat-label">Food Items</p>
//                   <h3 className="stat-value">
//                     {loading ? "…" : stats.foods}
//                   </h3>
//                 </div>
//               </div>
//             </section>

//             <section className="admin-quick-links">
//               <h3>Quick Actions</h3>
//               <div className="quick-links-grid">
//                 <Link to="/admin/categories" className="quick-link-card">
//                   <span>🍱</span>
//                   Manage Categories
//                 </Link>
//                 <Link to="/admin/restaurants" className="quick-link-card">
//                   <span>🏬</span>
//                   Manage Restaurants
//                 </Link>
//                 <Link to="/admin/foods" className="quick-link-card">
//                   <span>🍔</span>
//                   Manage Foods
//                 </Link>
//               </div>
//             </section>
//           </>
//         ) : (
//           <Outlet />
//         )}

//       </main>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import { getCategories } from "../services/categoryService";
import { getRestaurants } from "../services/restaurantService";
import { getAllFoods } from "../services/foodService";
import { getAllUsers } from "../../api/auth";
import "../css/AdminDashboard.css";

const NAV_ITEMS = [
  { key: "overview", label: "Overview", icon: "📊", path: "/admin" },
  { key: "users", label: "Users", icon: "👥", path: "/admin/users" },
  { key: "categories", label: "Categories", icon: "🍱", path: "/admin/categories" },
  { key: "restaurants", label: "Restaurants", icon: "🏬", path: "/admin/restaurants" },
  { key: "foods", label: "Foods", icon: "🍔", path: "/admin/foods" },
  { key: "offers", label: "Banners", icon: "🎁", path: "/admin/offers" },
  {key: "orders", label: "Orders", icon: "😋", path:"/admin/orders"}
];

export default function Dashboard() {
  const location = useLocation();

  const [stats, setStats] = useState({
    users: 0,
    categories: 0,
    restaurants: 0,
    foods: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const token = localStorage.getItem("token");

    try {
      const [userRes, catRes, resRes, foodRes] = await Promise.all([
        getAllUsers(token),
        getCategories(),
        getRestaurants(),
        getAllFoods(),
      ]);

      setStats({
        users: userRes.data.length,
        categories: catRes.data.length,
        restaurants: resRes.data.length,
        foods: foodRes.data.length,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const isOverview = location.pathname === "/admin";

  return (
    <div className="admin-layout">

      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <Link to="/" className="admin-logo">
          <span className="admin-logo-icon">🍽️</span>
          <div>
            <h1>Craveo</h1>
            <p>Admin Panel</p>
          </div>
        </Link>

        <nav className="admin-nav">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              to={item.path}
              className={`admin-nav-item ${
                location.pathname === item.path ? "active" : ""
              }`}
            >
              <span className="admin-nav-icon">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <p>Logged in as</p>
          <strong>Admin</strong>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="admin-main">

        {isOverview ? (
          <>
            <header className="admin-header">
              <h2>Dashboard Overview</h2>
              <p>Welcome back! Here's what's happening today.</p>
            </header>

            <section className="admin-stats-grid">

              <Link to="/admin/users" className="admin-stat-card stat-blue">
                <span className="stat-icon">👥</span>
                <div>
                  <p className="stat-label">Total Users</p>
                  <h3 className="stat-value">
                    {loading ? "…" : stats.users}
                  </h3>
                </div>
              </Link>

              <div className="admin-stat-card stat-pink">
                <span className="stat-icon">🍱</span>
                <div>
                  <p className="stat-label">Categories</p>
                  <h3 className="stat-value">
                    {loading ? "…" : stats.categories}
                  </h3>
                </div>
              </div>

              <div className="admin-stat-card stat-purple">
                <span className="stat-icon">🏬</span>
                <div>
                  <p className="stat-label">Restaurants</p>
                  <h3 className="stat-value">
                    {loading ? "…" : stats.restaurants}
                  </h3>
                </div>
              </div>

              <div className="admin-stat-card stat-orange">
                <span className="stat-icon">🍔</span>
                <div>
                  <p className="stat-label">Food Items</p>
                  <h3 className="stat-value">
                    {loading ? "…" : stats.foods}
                  </h3>
                </div>
              </div>
            </section>

            <section className="admin-quick-links">
              <h3>Quick Actions</h3>
              <div className="quick-links-grid">
                <Link to="/admin/users" className="quick-link-card">
                  <span>👥</span>
                  Manage Users
                </Link>
                <Link to="/admin/categories" className="quick-link-card">
                  <span>🍱</span>
                  Manage Categories
                </Link>
                <Link to="/admin/restaurants" className="quick-link-card">
                  <span>🏬</span>
                  Manage Restaurants
                </Link>
                <Link to="/admin/foods" className="quick-link-card">
                  <span>🍔</span>
                  Manage Foods
                </Link>
                <Link to="/admin/offers" className="quick-link-card">
  <span>🎁</span>
  Manage Banners
</Link>
<Link to="/admin/orders" className="quick-link-card"><span>😋</span>Manage Orders</Link>
              </div>
            </section>
          </>
        ) : (
          <Outlet />
        )}

      </main>
    </div>
  );
}