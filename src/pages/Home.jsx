// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import { useCart } from "../context/CartContext.jsx";
// import { useNavigate } from "react-router-dom";
// import "../assets/css/Home.css";

// const CRAVINGS = [
//   { key: "pizza", label: "Pizza", icon: "🍕" },
//   { key: "burgers", label: "Burgers", icon: "🍔" },
//   { key: "asian", label: "Asian", icon: "🍜" },
//   { key: "healthy", label: "Healthy", icon: "🥗" },
//   { key: "desserts", label: "Desserts", icon: "🍰" },
//   { key: "biryani", label: "Biryani", icon: "🍲" },
//   { key: "all", label: "All", icon: "🔎" },
// ];

// const RESTAURANTS = [
//   {
//     id: 1,
//     name: "The Garden Cafe",
//     cuisine: "Italian, Continental",  
//     rating: 4.6,
//     time: "30-40 mins",
//     price: "₹250 for one",
//     color: "linear-gradient(135deg,#e7c9a9,#8a5a3b)",
//   },
//   {
//     id: 2,
//     name: "Spice Route",
//     cuisine: "Indian, Mughlai",
//     rating: 4.7,
//     time: "25-35 mins",
//     price: "₹200 for one",
//     color: "linear-gradient(135deg,#3a2f28,#7a5230)",
//   },
//   {
//     id: 3,
//     name: "Wok & Roll",
//     cuisine: "Asian, Chinese",
//     rating: 4.5,
//     time: "20-30 mins",
//     price: "₹180 for one",
//     color: "linear-gradient(135deg,#3a0f2b,#8a1657)",
//   },
//   {
//     id: 4,
//     name: "Bombay Bites",
//     cuisine: "Street Food, Snacks",
//     rating: 4.8,
//     time: "20-30 mins",
//     price: "₹150 for one",
//     color: "linear-gradient(135deg,#241a33,#4a3564)",
//   },
// ];

// const QUICK_PROMPTS = ["Something Spicy 🌶️", "Healthy Food 🥦", "Comfort Food 🍜", "Budget Friendly 💰"];

// const HERO_SLIDES = [
//   {
//     title: "Good Food",
//     subtitle: "Great Vibes 💗",
//     desc: "Discover dishes crafted with love and delivered with care.",
//     emoji: "🥗",
//     button: "Explore Now",
//     bg: "linear-gradient(135deg,#f9d4ea,#efe8ff)",
//   },
//   {
//     title: "Flat 40% OFF",
//     subtitle: "On Your First Order 🎉",
//     desc: "Use coupon CRAVEO40 and save more on every meal.",
//     emoji: "🍔",
//     button: "Order Now",
//     bg: "linear-gradient(135deg,#ffe5c7,#ffd1d1)",
//   },
//   {
//     title: "Fast Delivery",
//     subtitle: "Within 30 Minutes ⚡",
//     desc: "Fresh food delivered quickly to your doorstep.",
//     emoji: "🛵",
//     button: "Browse Menu",
//     bg: "linear-gradient(135deg,#d8f7ff,#d8ffe8)",
//   },
// ];

// export default function Home() {
//   const [activeCraving, setActiveCraving] = useState("all");
//   const [favourites, setFavourites] = useState({});
//   const [chatInput, setChatInput] = useState("");
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [location, setLocation] = useState("Mumbai");
// const [showLocationMenu, setShowLocationMenu] = useState(false);


// const navigate = useNavigate();


// const [showMenu, setShowMenu] = useState(false);
// const token = localStorage.getItem("token");

// const LOCATIONS = ["Mumbai", "Pune", "Nagpur"];
  
//   const { totalItems } = useCart();

//   const toggleFavourite = (id) =>
//     setFavourites((prev) => ({ ...prev, [id]: !prev[id] }));

//   useEffect(() => {
//   const interval = setInterval(() => {
//     setCurrentSlide((prev) =>
//       prev === HERO_SLIDES.length - 1 ? 0 : prev + 1
//     );
//   }, 4000);

//   return () => clearInterval(interval);
// }, []);

// const nextSlide = () => {
//   setCurrentSlide((prev) =>
//     prev === HERO_SLIDES.length - 1 ? 0 : prev + 1
//   );
// };

// const prevSlide = () => {
//   setCurrentSlide((prev) =>
//     prev === 0 ? HERO_SLIDES.length - 1 : prev - 1
//   );
// };

//   return (
//     <div className="home-layout">
//       <Navbar active="home" />

//       <main className="home-main">
//         {/* Top bar */}
//         <header className="topbar">
// <div
//   className="topbar-location"
//   onClick={() => setShowLocationMenu(!showLocationMenu)}
// >
//   <span>📍</span>
//   <span>{location}, India</span>
//   <span className="chevron">
//     {showLocationMenu ? "▴" : "▾"}
//   </span>

//   {showLocationMenu && (
//     <div className="location-dropdown">
//       {LOCATIONS.map((city) => (
//         <div
//           key={city}
//           className={`location-item ${
//             location === city ? "active-location" : ""
//           }`}
//           onClick={() => {
//             setLocation(city);
//             setShowLocationMenu(false);
//           }}
//         >
//           📍 {city}
//         </div>
//       ))}
//     </div>
//   )}
// </div>

//           <div className="topbar-search">
//             <span>🔍</span>
//             <input type="text" placeholder="Search for food, restaurants, cuisines..." />
//           </div>

//           <div className="topbar-actions">
//             <button className="icon-btn">
//               🔔<span className="dot" />
//             </button>
//             <button className="icon-btn">
//               🛒<span className="count-badge">{totalItems}</span>
//             </button>
//             <div className="avatar-wrapper">

//   <div
//     className="avatar"
//     onClick={() => setShowMenu(!showMenu)}
//   >
//     🧑
//   </div>

//   {showMenu && (
//     <div className="avatar-menu">

//       {!token ? (
//         <>
//           <p className="menu-btn login-btn" onClick={() => navigate("/login")}> <span>🔐</span> Login</p>
//           <p  className="menu-btn signup-btn" onClick={() => navigate("/register")}><span>✨</span> Sign Up</p>
//         </>
//       ) : (
//         <>
//           <p className="menu-btn" onClick={() => navigate("/profile")}>Profile</p>
//           <p
//             className="menu-btn logout-btn" onClick={() => {
//               localStorage.removeItem("token");
//               navigate("/login");
//             }}
//           >
//             Logout
//           </p>
//         </>
//       )}

//     </div>
//   )}

// </div>
//           </div>
//         </header>

//         <div className="content-grid">
//           {/* LEFT / CENTER COLUMN */}
//           <div className="content-left">
// <section
//   key={currentSlide}
//   className="hero hero-animate"
//   style={{ background: HERO_SLIDES[currentSlide].bg }}
// >
//   <button className="hero-arrow left" onClick={prevSlide}>
//     ❮
//   </button>

//   <div className="hero-text">
//     <h1>
//       {HERO_SLIDES[currentSlide].title}
//       <br />
//       {HERO_SLIDES[currentSlide].subtitle}
//     </h1>

//     <p>{HERO_SLIDES[currentSlide].desc}</p>

// <button
//   className="hero-cta"
//   onClick={() =>
//     document
//       .querySelector(".recommended")
//       ?.scrollIntoView({ behavior: "smooth" })
//   }
// >
//   {HERO_SLIDES[currentSlide].button} →
// </button>
//   </div>

//   <div className="hero-bowl">
//     {HERO_SLIDES[currentSlide].emoji}
//   </div>

//   <button className="hero-arrow right" onClick={nextSlide}>
//     ❯
//   </button>

//   <div className="hero-dots">
//     {HERO_SLIDES.map((_, index) => (
//       <span
//         key={index}
//         className={currentSlide === index ? "active" : ""}
//         onClick={() => setCurrentSlide(index)}
//       />
//     ))}
//   </div>
// </section>

//             <section className="cravings">
//               <h2>What are you craving?</h2>
//               <div className="cravings-row">
//                 {CRAVINGS.map((c) => (
//                   <button
//                     key={c.key}
//                     className={`craving-chip ${activeCraving === c.key ? "active" : ""}`}
//                     onClick={() => setActiveCraving(c.key)}
//                   >
//                     <span className="craving-icon">{c.icon}</span>
//                     <span>{c.label}</span>
//                   </button>
//                 ))}
//               </div>
//             </section>

//             <section className="recommended">
//               <div className="section-heading">
//                 <h2>Recommended for you</h2>
//                 <a href="#all">View all →</a>
//               </div>

//               <div className="restaurant-grid">
//                 {RESTAURANTS.map((r) => (
//                   <div className="restaurant-card" key={r.id}>
//                     <div className="restaurant-thumb" style={{ background: r.color }}>
//                       <span className="rating-badge">⭐ {r.rating}</span>
//                       <button
//                         className={`fav-btn ${favourites[r.id] ? "active" : ""}`}
//                         onClick={() => toggleFavourite(r.id)}
//                         aria-label="Toggle favourite"
//                       >
//                         {favourites[r.id] ? "❤️" : "🤍"}
//                       </button>
//                     </div>
//                     <div className="restaurant-info">
//                       <h3>{r.name}</h3>
//                       <p className="cuisine">{r.cuisine}</p>
//                       <p className="meta">
//                         {r.time} • {r.price}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             <section className="feature-strip">
//               <div className="feature-item">
//                 <span className="feature-icon">🤖</span>
//                 <div>
//                   <p className="feature-title">AI Food Recommends</p>
//                   <p className="feature-text">Personalized for you</p>
//                 </div>
//               </div>
//               <div className="feature-item">
//                 <span className="feature-icon">⚡</span>
//                 <div>
//                   <p className="feature-title">Lightning Delivery</p>
//                   <p className="feature-text">Super fast at your door</p>
//                 </div>
//               </div>
//               <div className="feature-item">
//                 <span className="feature-icon">📍</span>
//                 <div>
//                   <p className="feature-title">Live Tracking</p>
//                   <p className="feature-text">Track your order real-time</p>
//                 </div>
//               </div>
//               <div className="feature-item">
//                 <span className="feature-icon">📦</span>
//                 <div>
//                   <p className="feature-title">Secure Packaging</p>
//                   <p className="feature-text">100% safe &amp; hygienic</p>
//                 </div>
//               </div>
//             </section>
//           </div>

//           {/* RIGHT COLUMN */}
//           <aside className="content-right">
//             <div className="weather-card">
//               <div>
//                 <p className="weather-temp">28°C</p>
//                 <p className="weather-desc">Partly Cloudy</p>
//                 <p className="weather-loc">Mumbai • AQI 45</p>
//               </div>
//               <span className="weather-icon">⛅</span>
//             </div>

//             <div className="assistant-card">
//               <div className="assistant-header">
//                 <span className="assistant-avatar">🤖</span>
//                 <span>Craveo AI Assistant</span>
//                 <span className="assistant-status">Online</span>
//               </div>
//               <div className="assistant-bubble">
//                 Hi there! 👋 What are you in the mood for today?
//               </div>
//               <div className="assistant-prompts">
//                 {QUICK_PROMPTS.map((p) => (
//                   <button key={p} className="assistant-prompt-btn">
//                     {p}
//                   </button>
//                 ))}
//               </div>
//               <div className="assistant-input">
//                 <input
//                   type="text"
//                   placeholder="Type your message..."
//                   value={chatInput}
//                   onChange={(e) => setChatInput(e.target.value)}
//                 />
//                 <button aria-label="Send">➤</button>
//               </div>
//             </div>

//             <div className="offer-card">
//               <p className="offer-flat">Flat</p>
//               <p className="offer-percent">40% OFF</p>
//               <p className="offer-sub">On your first order</p>
//               <span className="offer-code">CRAVEO40</span>
//               <span className="offer-emoji">🍔</span>
//             </div>

//             <div className="track-card">
//               <div className="track-header">
//                 <h3>Track Your Order</h3>
//                 <a href="#see-all">See All →</a>
//               </div>
//               <p className="track-status">Out for Delivery</p>
//               <p className="track-eta">Arriving in 18 mins</p>
//               <div className="track-progress">
//                 <div className="track-line">
//                   <div className="track-line-fill" />
//                 </div>
//                 <div className="track-steps">
//                   <span className="done">Placed</span>
//                   <span className="done">Confirmed</span>
//                   <span className="current">On the way</span>
//                   <span>Delivered</span>
//                 </div>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </main>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import Footer from "../components/Footer.jsx";
// import { login } from "../services/authService"; // 👈 apna actual path check kar lijiye
import "../assets/css/Home.css";
import { getHomeData } from "../api/home";
import { getMyOrders } from "../api/order";
import { getWeather, getWeatherInfo } from "../api/weather";



const CRAVINGS = [
  { key: "pizza", label: "Pizza", icon: "🍕" },
  { key: "burgers", label: "Burgers", icon: "🍔" },
  { key: "asian", label: "Asian", icon: "🍜" },
  { key: "healthy", label: "Healthy", icon: "🥗" },
  { key: "desserts", label: "Desserts", icon: "🍰" },
  { key: "biryani", label: "Biryani", icon: "🍲" },
  { key: "all", label: "All", icon: "🔎" },
];



const QUICK_PROMPTS = ["Something Spicy 🌶️", "Healthy Food 🥦", "Comfort Food 🍜", "Budget Friendly 💰"];

const HERO_SLIDES = [
  {
    title: "Good Food",
    subtitle: "Great Vibes 💗",
    desc: "Discover dishes crafted with love and delivered with care.",
    emoji: "🥗",
    button: "Explore Now",
    bg: "linear-gradient(135deg,#f9d4ea,#efe8ff)",
  },
  {
    title: "Flat 40% OFF",
    subtitle: "On Your First Order 🎉",
    desc: "Use coupon CRAVEO40 and save more on every meal.",
    emoji: "🍔",
    button: "Order Now",
    bg: "linear-gradient(135deg,#ffe5c7,#ffd1d1)",
  },
  {
    title: "Fast Delivery",
    subtitle: "Within 30 Minutes ⚡",
    desc: "Fresh food delivered quickly to your doorstep.",
    emoji: "🛵",
    button: "Browse Menu",
    bg: "linear-gradient(135deg,#d8f7ff,#d8ffe8)",
  },
];

export default function Home() {
  const [activeCraving, setActiveCraving] = useState("all");
  const [favourites, setFavourites] = useState({});
  const [chatInput, setChatInput] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [location, setLocation] = useState("Mumbai");
const [showLocationMenu, setShowLocationMenu] = useState(false);
const [restaurants, setRestaurants] = useState([]);
const [categories, setCategories] = useState([]);
const [banners, setBanners] = useState([]);
const [latestOrder, setLatestOrder] = useState(null);




const navigate = useNavigate();


const [showMenu, setShowMenu] = useState(false);
const token = localStorage.getItem("token");

const LOCATIONS = ["Mumbai", "Pune", "Nagpur"];
const CITY_COORDS = {
  Mumbai: { lat: 19.076, lon: 72.8777 },
  Pune: { lat: 18.5204, lon: 73.8567 },
  Nagpur: { lat: 21.1458, lon: 79.0882 },
};

  // 👇 Admin login modal ke liye naye states
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminError, setAdminError] = useState("");
  const [adminLoading, setAdminLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [weather, setWeather] = useState(null);
const [weatherLoading, setWeatherLoading] = useState(true);


  const { totalItems } = useCart();

  const toggleFavourite = (id) =>
    setFavourites((prev) => ({ ...prev, [id]: !prev[id] }));

useEffect(() => {
  const len = banners.length > 0 ? banners.length : HERO_SLIDES.length;
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev === len - 1 ? 0 : prev + 1));
  }, 4000);

  return () => clearInterval(interval);
}, [banners]);

useEffect(() => {
  getHomeData()
    .then((res) => {
      setRestaurants(res.data.restaurants || []);
      setCategories(res.data.categories || []);
      setBanners((res.data.banners || []).filter((b) => b.active));
    })
    .catch((err) => console.log("Home data load failed:", err));
}, []);

useEffect(() => {
  if (!token) return;
  getMyOrders(token)
    .then((res) => {
      const orders = res.data || [];
      if (orders.length > 0) {
        setLatestOrder(orders[orders.length - 1]); // sabse recent order
      }
    })
    .catch((err) => console.log("Orders load failed:", err));
}, [token]);


useEffect(() => {
  const coords = CITY_COORDS[location];
  if (!coords) return;

  setWeatherLoading(true);
  getWeather(coords.lat, coords.lon)
    .then((res) => {
      setWeather(res.data.current_weather);
    })
    .catch((err) => console.log("Weather load failed:", err))
    .finally(() => setWeatherLoading(false));
}, [location]);


const nextSlide = () => {
  const len = banners.length > 0 ? banners.length : HERO_SLIDES.length;
  setCurrentSlide((prev) => (prev === len - 1 ? 0 : prev + 1));
};

const prevSlide = () => {
  const len = banners.length > 0 ? banners.length : HERO_SLIDES.length;
  setCurrentSlide((prev) => (prev === 0 ? len - 1 : prev - 1));
};

const handleSearchSubmit = (e) => {
  if (e.key === "Enter" && searchQuery.trim()) {
    navigate(`/restaurants?search=${encodeURIComponent(searchQuery)}`);
  }
};

const getOrderProgress = (status) => {
  const s = (status || "").toLowerCase();
  if (s.includes("deliver") && !s.includes("out")) return { step: 3, label: "Delivered", percent: 100 };
  if (s.includes("out") || s.includes("way") || s.includes("transit")) return { step: 2, label: "Out for Delivery", percent: 66 };
  if (s.includes("prepar") || s.includes("confirm")) return { step: 1, label: "Confirmed", percent: 33 };
  return { step: 0, label: "Placed", percent: 10 }; // Pending / default
};

// 👇 Hardcoded admin credentials
  const ADMIN_EMAIL = "admin@craveo.com";
  const ADMIN_PASSWORD = "Admin@123";

  const handleAdminLogin = (e) => {
    e.preventDefault();
    setAdminError("");
    setAdminLoading(true);

    setTimeout(() => {
      if (adminEmail === ADMIN_EMAIL && adminPassword === ADMIN_PASSWORD) {
        localStorage.setItem("token", "admin-hardcoded-token");
        localStorage.setItem("role", "ADMIN");
        setShowAdminModal(false);
        setAdminEmail("");
        setAdminPassword("");
        navigate("/admin");
      } else {
        setAdminError("Invalid admin email or password.");
      }
      setAdminLoading(false);
    }, 500); // thoda delay taaki loading state dikhe, chahe to hata sakte hain
  };

// const handleAdminLogin = async (e) => {
//   e.preventDefault();
//   setAdminError("");
//   setAdminLoading(true);

//   try {
//     const res = await loginUser({ email: adminEmail, password: adminPassword });

//     if (res.data.role === "ADMIN") {
//       localStorage.setItem("token", res.data.token);
//       setShowAdminModal(false);
//       setAdminEmail("");
//       setAdminPassword("");
//       navigate("/admin");
//     } else {
//       setAdminError("You are not authorized as Admin.");
//     }
//   } catch (err) {
//     console.log(err);
//     setAdminError("Invalid email or password.");
//   } finally {
//     setAdminLoading(false);
//   }
// };

  return (
    <div className="home-layout">
      <Navbar active="home" />

      <main className="home-main">
        {/* Top bar */}
        <header className="topbar">
<div
  className="topbar-location"
  onClick={() => setShowLocationMenu(!showLocationMenu)}
>
  <span>📍</span>
  <span>{location}, India</span>
  <span className="chevron">
    {showLocationMenu ? "▴" : "▾"}
  </span>

  {showLocationMenu && (
    <div className="location-dropdown">
      {LOCATIONS.map((city) => (
        <div
          key={city}
          className={`location-item ${
            location === city ? "active-location" : ""
          }`}
          onClick={() => {
            setLocation(city);
            setShowLocationMenu(false);
          }}
        >
          📍 {city}
        </div>
      ))}
    </div>
  )}
</div>

          <div className="topbar-search">
  <span>🔍</span>
  <input
    type="text"
    placeholder="Search for food, restaurants, cuisines..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    onKeyDown={handleSearchSubmit}
  />
</div>





          <div className="topbar-actions">
            <button className="icon-btn">
              🔔<span className="dot" />
            </button>
            <button
  className="icon-btn"
  onClick={() => navigate("/cart")}
>
  🛒
  <span className="count-badge">{totalItems}</span>
</button>
            <div className="avatar-wrapper">

  <div
    className="avatar"
    onClick={() => setShowMenu(!showMenu)}
  >
    🧑
  </div>

  {showMenu && (
    <div className="avatar-menu">

      {!token ? (
        <>
          <p className="menu-btn login-btn" onClick={() => navigate("/login")}> <span>🔐</span> Login</p>
          <p  className="menu-btn signup-btn" onClick={() => navigate("/register")}><span>✨</span> Sign Up</p>
        </>
      ) : (
        <>
          <p className="menu-btn" onClick={() => navigate("/profile")}>Profile</p>
          <p
            className="menu-btn logout-btn" onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            Logout
          </p>
        </>
      )}

      {/* 👇 Naya Admin button, hamesha dikhega */}
      <p
        className="menu-btn admin-btn"
        onClick={() => {
          setShowMenu(false);
          setShowAdminModal(true);
        }}
      >
        <span>🛡️</span> Admin
      </p>

    </div>
  )}

</div>
          </div>
        </header>

        <div className="content-grid">
          {/* LEFT / CENTER COLUMN */}
          <div className="content-left">
{banners.length > 0 ? (
  <section
    key={currentSlide}
    className="hero hero-animate"
    style={{
      background: banners[currentSlide]?.image
        ? `url(${banners[currentSlide].image}) center/cover`
        : "linear-gradient(135deg,#f9d4ea,#efe8ff)",
    }}
  >
    <button className="hero-arrow left" onClick={prevSlide}>❮</button>

    <div className="hero-text">
      <h1>{banners[currentSlide].title}</h1>
      <p>{banners[currentSlide].subtitle}</p>
      <button
        className="hero-cta"
        onClick={() => document.querySelector(".recommended")?.scrollIntoView({ behavior: "smooth" })}
      >
        Explore Now →
      </button>
    </div>

    <button className="hero-arrow right" onClick={nextSlide}>❯</button>

    <div className="hero-dots">
      {banners.map((_, index) => (
        <span
          key={index}
          className={currentSlide === index ? "active" : ""}
          onClick={() => setCurrentSlide(index)}
        />
      ))}
    </div>
  </section>
) : (
  <section
    key={currentSlide}
    className="hero hero-animate"
    style={{ background: HERO_SLIDES[currentSlide].bg }}
  >
    <button className="hero-arrow left" onClick={prevSlide}>❮</button>
    <div className="hero-text">
      <h1>
        {HERO_SLIDES[currentSlide].title}
        <br />
        {HERO_SLIDES[currentSlide].subtitle}
      </h1>
      <p>{HERO_SLIDES[currentSlide].desc}</p>
      <button
        className="hero-cta"
        onClick={() => document.querySelector(".recommended")?.scrollIntoView({ behavior: "smooth" })}
      >
        {HERO_SLIDES[currentSlide].button} →
      </button>
    </div>
    <div className="hero-bowl">{HERO_SLIDES[currentSlide].emoji}</div>
    <button className="hero-arrow right" onClick={nextSlide}>❯</button>
    <div className="hero-dots">
      {HERO_SLIDES.map((_, index) => (
        <span
          key={index}
          className={currentSlide === index ? "active" : ""}
          onClick={() => setCurrentSlide(index)}
        />
      ))}
    </div>
  </section>
)}

            <section className="cravings">
              <h2>What are you craving?</h2>
              <div className="cravings-row">
                {CRAVINGS.map((c) => (
                  <button
                    key={c.key}
                    className={`craving-chip ${activeCraving === c.key ? "active" : ""}`}
                    onClick={() => setActiveCraving(c.key)}
                  >
                    <span className="craving-icon">{c.icon}</span>
                    <span>{c.label}</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="recommended">
              <div className="section-heading">
                <h2>Recommended for you</h2>
                <a href="#all"
  onClick={(e) => {
    e.preventDefault();
    navigate("/restaurants");
  }}
>
  View all →
</a>
</div>

              <div className="restaurant-grid">
                {restaurants.slice(0, 6).map((r) => (
  <div
    className="restaurant-card"
    key={r.id}
    onClick={() => navigate(`/restaurants/${r.id}`)}
    style={{ cursor: "pointer" }}
  >
                    {/* <div
  className="restaurant-thumb"
  style={{
    background: r.image ? `url(${r.image}) center/cover` : "linear-gradient(135deg,#e7c9a9,#8a5a3b)",
  }}
>
                      <span className="rating-badge">⭐ {r.rating}</span>
                      <button
                        className={`fav-btn ${favourites[r.id] ? "active" : ""}`}
                        onClick={() => toggleFavourite(r.id)}
                        aria-label="Toggle favourite"
                      >
                        {favourites[r.id] ? "❤️" : "🤍"}
                      </button>
                    </div> */}

                    <div className="restaurant-thumb">
  {r.image && (
    <div
      className="restaurant-thumb-bg"
      style={{ backgroundImage: `url(${r.image})` }}
    />
  )}
  {r.image ? (
    <img src={r.image} alt={r.name} className="restaurant-thumb-img" />
  ) : (
    <div
      className="restaurant-thumb-fallback"
      style={{ background: "linear-gradient(135deg,#e7c9a9,#8a5a3b)" }}
    />
  )}
  <span className="rating-badge">⭐ {r.rating}</span>
  {/* <button
    className={`fav-btn ${favourites[r.id] ? "active" : ""}`}
    onClick={(e) => {
      e.stopPropagation();
      toggleFavourite(r.id);
    }}
    aria-label="Toggle favourite"
  >
    {favourites[r.id] ? "❤️" : "🤍"}
  </button> */}
</div>
                    <div className="restaurant-info">
                      <h3>{r.name}</h3>
                      <p className="cuisine">{r.cuisine}</p>
                      <p className="meta">
                        {r.deliveryTime} • {r.priceForOne}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="feature-strip">
              <div className="feature-item">
                <span className="feature-icon">🤖</span>
                <div>
                  <p className="feature-title">AI Food Recommends</p>
                  <p className="feature-text">Personalized for you</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <div>
                  <p className="feature-title">Lightning Delivery</p>
                  <p className="feature-text">Super fast at your door</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📍</span>
                <div>
                  <p className="feature-title">Live Tracking</p>
                  <p className="feature-text">Track your order real-time</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📦</span>
                <div>
                  <p className="feature-title">Secure Packaging</p>
                  <p className="feature-text">100% safe &amp; hygienic</p>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <aside className="content-right">
            {/* <div className="weather-card">
              <div>
                <p className="weather-temp">28°C</p>
                <p className="weather-desc">Partly Cloudy</p>
                <p className="weather-loc">Mumbai • AQI 45</p>
              </div>
              <span className="weather-icon">⛅</span>
            </div> */}

            <div className="weather-card">
  {weatherLoading ? (
    <p style={{ fontSize: "12px", color: "#7c86a8", margin: 0 }}>Loading weather...</p>
  ) : weather ? (
    <>
      <div>
        <p className="weather-temp">{Math.round(weather.temperature)}°C</p>
        <p className="weather-desc">{getWeatherInfo(weather.weathercode).desc}</p>
        <p className="weather-loc">{location} • Wind {Math.round(weather.windspeed)} km/h</p>
      </div>
      <span className="weather-icon">{getWeatherInfo(weather.weathercode).icon}</span>
    </>
  ) : (
    <p style={{ fontSize: "12px", color: "#7c86a8", margin: 0 }}>Weather unavailable</p>
  )}
</div>

            <div className="assistant-card">
              <div className="assistant-header">
                <span className="assistant-avatar">🤖</span>
                <span>Craveo AI Assistant</span>
                <span className="assistant-status">Online</span>
              </div>
              <div className="assistant-bubble">
                Hi there! 👋 What are you in the mood for today?
              </div>
              <div className="assistant-prompts">
                {QUICK_PROMPTS.map((p) => (
                  <button key={p} className="assistant-prompt-btn">
                    {p}
                  </button>
                ))}
              </div>
              <div className="assistant-input">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                />
                <button aria-label="Send">➤</button>
              </div>
            </div>

            <div className="offer-card">
              <p className="offer-flat">Flat</p>
              <p className="offer-percent">40% OFF</p>
              <p className="offer-sub">On your first order</p>
              <span className="offer-code">CRAVEO40</span>
              <span className="offer-emoji">🍔</span>
            </div>

            {/* <div className="track-card">
              <div className="track-header">
                <h3>Track Your Order</h3>
                <a href="#see-all">See All →</a>
              </div>
              <p className="track-status">Out for Delivery</p>
              <p className="track-eta">Arriving in 18 mins</p>
              <div className="track-progress">
                <div className="track-line">
                  <div className="track-line-fill" />
                </div>
                <div className="track-steps">
                  <span className="done">Placed</span>
                  <span className="done">Confirmed</span>
                  <span className="current">On the way</span>
                  <span>Delivered</span>
                </div>
              </div>
            </div> */}

            {token && latestOrder && (
  <div className="track-card">
    <div className="track-header">
      <h3>Track Your Order</h3>
      
      <a  href="#see-all"
        onClick={(e) => {
          e.preventDefault();
          navigate("/orders");
        }}
      >
        See All →
      </a>
    </div>

    {(() => {
      const progress = getOrderProgress(latestOrder.status);
      const steps = ["Placed", "Confirmed", "On the way", "Delivered"];
      return (
        <>
          <p className="track-status">Order #{latestOrder.id} — {latestOrder.status}</p>
          <p className="track-eta">₹{latestOrder.totalAmount} • {latestOrder.orderItems?.length || 0} items</p>
          <div className="track-progress">
            <div className="track-line">
              <div className="track-line-fill" style={{ width: `${progress.percent}%` }} />
            </div>
            <div className="track-steps">
              {steps.map((label, index) => (
                <span
                  key={label}
                  className={
                    index < progress.step
                      ? "done"
                      : index === progress.step
                      ? "current"
                      : ""
                  }
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </>
      );
    })()}
  </div>
)}



            
          </aside>
        </div>
        <Footer />
      </main>

      {/* 👇 Admin Login Modal */}
      {showAdminModal && (
        <div className="admin-modal-overlay" onClick={() => setShowAdminModal(false)}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="admin-modal-close"
              onClick={() => setShowAdminModal(false)}
            >
              ✕
            </button>

            <div className="admin-modal-icon">🛡️</div>
            <h2>Admin Login</h2>
            <p>Enter your admin credentials to continue</p>

            <form onSubmit={handleAdminLogin}>
              <input
                type="email"
                placeholder="Admin Email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                required
              />

              {adminError && <p className="admin-modal-error">{adminError}</p>}

              <button type="submit" disabled={adminLoading}>
                {adminLoading ? "Checking..." : "Login as Admin"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}