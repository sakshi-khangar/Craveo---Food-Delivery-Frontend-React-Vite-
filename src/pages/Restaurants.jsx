// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import RestaurantCard from "../components/RestaurantCard";
// import "../assets/css/Restaurants.css";

// const ALL_RESTAURANTS = [
//   { id: 1, name: "The Garden Cafe", cuisine: "Italian, Continental", rating: 4.6, time: "30-40 mins", price: "₹250 for one", color: "linear-gradient(135deg,#e7c9a9,#8a5a3b)" },
//   { id: 2, name: "Spice Route", cuisine: "Indian, Mughlai", rating: 4.7, time: "25-35 mins", price: "₹200 for one", color: "linear-gradient(135deg,#3a2f28,#7a5230)" },
//   { id: 3, name: "Wok & Roll", cuisine: "Asian, Chinese", rating: 4.5, time: "20-30 mins", price: "₹180 for one", color: "linear-gradient(135deg,#3a0f2b,#8a1657)" },
//   { id: 4, name: "Bombay Bites", cuisine: "Street Food, Snacks", rating: 4.8, time: "20-30 mins", price: "₹150 for one", color: "linear-gradient(135deg,#241a33,#4a3564)" },
//   { id: 5, name: "Sweet Tooth", cuisine: "Desserts, Bakery", rating: 4.4, time: "15-25 mins", price: "₹120 for one", color: "linear-gradient(135deg,#5c2a3a,#a2456b)" },
//   { id: 6, name: "Biryani House", cuisine: "Biryani, Mughlai", rating: 4.9, time: "35-45 mins", price: "₹280 for one", color: "linear-gradient(135deg,#3d2b1f,#8a5c30)" },
// ];

// const FILTERS = ["All", "Rating 4.5+", "Under ₹200", "Fast Delivery"];

// export default function Restaurants() {
//   const [query, setQuery] = useState("");
//   const [filter, setFilter] = useState("All");

//   const filtered = ALL_RESTAURANTS.filter((r) => {
//     const matchesQuery =
//       r.name.toLowerCase().includes(query.toLowerCase()) ||
//       r.cuisine.toLowerCase().includes(query.toLowerCase());
//     const matchesFilter =
//       filter === "All" ||
//       (filter === "Rating 4.5+" && r.rating >= 4.5) ||
//       (filter === "Under ₹200" && parseInt(r.price.replace(/\D/g, "")) < 200) ||
//       (filter === "Fast Delivery" && parseInt(r.time) <= 25);
//     return matchesQuery && matchesFilter;
//   });

//   return (
//     <div className="home-layout">
//       <Navbar active="explore" />

//       <main className="restaurants-main">
//         <header className="restaurants-header">
//           <h1>Explore Restaurants</h1>
//           <div className="restaurants-search">
//             <span>🔍</span>
//             <input
//               type="text"
//               placeholder="Search restaurants or cuisines..."
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//           </div>
//         </header>

//         <div className="restaurants-filters">
//           {FILTERS.map((f) => (
//             <button
//               key={f}
//               className={filter === f ? "active" : ""}
//               onClick={() => setFilter(f)}
//             >
//               {f}
//             </button>
//           ))}
//         </div>

//         <div className="restaurants-grid">
//           {filtered.length > 0 ? (
//             filtered.map((r) => <RestaurantCard restaurant={r} key={r.id} />)
//           ) : (
//             <p className="restaurants-empty">No restaurants match your search.</p>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import RestaurantCard from "../components/RestaurantCard";
import { getAllRestaurants } from "../api/restaurant";
import { searchAll } from "../api/search";
import "../assets/css/Restaurants.css";

const FILTERS = ["All", "Rating 4.5+", "Under ₹200", "Fast Delivery"];

export default function Restaurants() {
  const [searchParams] = useSearchParams();
  const urlSearch = searchParams.get("search") || "";

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [query, setQuery] = useState(urlSearch);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    if (urlSearch) {
      searchAll(urlSearch)
        .then((res) => setAllRestaurants(res.data.restaurants || []))
        .catch((err) => console.log(err));
    } else {
      getAllRestaurants()
        .then((res) => setAllRestaurants(res.data))
        .catch((err) => console.log(err));
    }
  }, [urlSearch]);

  const filtered = allRestaurants.filter((r) => {
    const matchesQuery =
      r.name.toLowerCase().includes(query.toLowerCase()) ||
      (r.cuisine || "").toLowerCase().includes(query.toLowerCase());
    const priceNum = parseInt((r.priceForOne || "").replace(/\D/g, "")) || 0;
    const timeNum = parseInt(r.deliveryTime) || 0;
    const matchesFilter =
      filter === "All" ||
      (filter === "Rating 4.5+" && r.rating >= 4.5) ||
      (filter === "Under ₹200" && priceNum < 200) ||
      (filter === "Fast Delivery" && timeNum <= 25);
    return matchesQuery && matchesFilter;
  });

  return (
    <div className="home-layout">
      <Navbar active="explore" />
      <main className="restaurants-main">
        <header className="restaurants-header">
          <h1>Explore Restaurants</h1>
          <div className="restaurants-search">
            <span>🔍</span>
            <input
              type="text"
              placeholder="Search restaurants or cuisines..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </header>

        <div className="restaurants-filters">
          {FILTERS.map((f) => (
            <button key={f} className={filter === f ? "active" : ""} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>

        <div className="restaurants-grid">
          {filtered.length > 0 ? (
            filtered.map((r) => <RestaurantCard restaurant={r} key={r.id} />)
          ) : (
            <p className="restaurants-empty">No restaurants match your search.</p>
          )}
        </div>
      </main>
    </div>
  );
}