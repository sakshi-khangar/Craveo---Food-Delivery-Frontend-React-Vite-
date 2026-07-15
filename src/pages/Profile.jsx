// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";

// import { getProfile } from "../api/auth";
// import "../assets/css/Profile.css";

// const ORDER_HISTORY = [
//   { id: "CR1042", restaurant: "The Garden Cafe", date: "28 Jun 2026", amount: 480, status: "Delivered" },
//   { id: "CR1038", restaurant: "Wok & Roll", date: "22 Jun 2026", amount: 320, status: "Delivered" },
//   { id: "CR1029", restaurant: "Bombay Bites", date: "15 Jun 2026", amount: 150, status: "Cancelled" },
// ];

// export default function Profile() {
//   const [user, setUser] = useState(null);
//   const [tab, setTab] = useState("details");

//   return (
//     <div className="home-layout">
//       <Navbar active="profile" />

//       <main className="profile-main">
//         <div className="profile-header">
//           <div className="profile-avatar">🧑</div>
//           <div>
//             <h1>Aarav Sharma</h1>
//             <p>aarav.sharma@email.com</p>
//           </div>
//           <button className="profile-edit-btn">Edit Profile</button>
//         </div>

//         <div className="profile-tabs">
//           <button
//             className={tab === "details" ? "active" : ""}
//             onClick={() => setTab("details")}
//           >
//             Details
//           </button>
//           <button
//             className={tab === "orders" ? "active" : ""}
//             onClick={() => setTab("orders")}
//           >
//             Order History
//           </button>
//           <button
//             className={tab === "addresses" ? "active" : ""}
//             onClick={() => setTab("addresses")}
//           >
//             Addresses
//           </button>
//         </div>

//         {tab === "details" && (
//           <div className="profile-panel">
//             <div className="profile-field">
//               <span>Full Name</span>
//               <p>Aarav Sharma</p>
//             </div>
//             <div className="profile-field">
//               <span>Email</span>
//               <p>aarav.sharma@email.com</p>
//             </div>
//             <div className="profile-field">
//               <span>Phone</span>
//               <p>+91 98765 43210</p>
//             </div>
//             <div className="profile-field">
//               <span>Member Since</span>
//               <p>March 2024</p>
//             </div>
//           </div>
//         )}

//         {tab === "orders" && (
//           <div className="profile-panel">
//             {ORDER_HISTORY.map((o) => (
//               <div className="order-row" key={o.id}>
//                 <div>
//                   <p className="order-restaurant">{o.restaurant}</p>
//                   <p className="order-meta">
//                     #{o.id} • {o.date}
//                   </p>
//                 </div>
//                 <p className="order-amount">₹{o.amount}</p>
//                 <span className={`order-status ${o.status.toLowerCase()}`}>{o.status}</span>
//               </div>
//             ))}
//           </div>
//         )}

//         {tab === "addresses" && (
//           <div className="profile-panel">
//             <div className="address-card">
//               <p className="address-label">🏠 Home</p>
//               <p className="address-text">201, Sunrise Apartments, Andheri West, Mumbai, 400058</p>
//             </div>
//             <div className="address-card">
//               <p className="address-label">💼 Work</p>
//               <p className="address-text">4th Floor, Tech Park, Powai, Mumbai, 400076</p>
//             </div>
//             <button className="add-address-btn">+ Add New Address</button>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import { getProfile } from "../api/auth";
// import "../assets/css/Profile.css";

// const ORDER_HISTORY = [
//   { id: "CR1042", restaurant: "The Garden Cafe", date: "28 Jun 2026", amount: 480, status: "Delivered" },
//   { id: "CR1038", restaurant: "Wok & Roll", date: "22 Jun 2026", amount: 320, status: "Delivered" },
//   { id: "CR1029", restaurant: "Bombay Bites", date: "15 Jun 2026", amount: 150, status: "Cancelled" },
// ];




// export default function Profile() {
//   const [tab, setTab] = useState("details");
//   const [user, setUser] = useState(null);

//   const navigate = useNavigate();

// const handleLogout = () => {
//   localStorage.removeItem("token");
//   setUser(null);
//   navigate("/");
// };

//   // ❌ NOT LOGGED IN UI
// if (!user) {
//   return (
//     <div className="home-layout">
//       <Navbar />
//       <main className="profile-main">
//         <div className="guest-state">
//           <div className="guest-icon">🔒</div>
//           <h2>You're not logged in</h2>
//           <p>Login to view your orders, saved addresses, favourites and more.</p>

//           <div className="guest-actions">
//             <button className="guest-login-btn" onClick={() => navigate("/login")}>
//               Login
//             </button>
//             <button className="guest-signup-btn" onClick={() => navigate("/register")}>
//               Create Account
//             </button>
//           </div>

//           <div className="guest-perks">
//             <div className="perk-item">
//               <span>📦</span>
//               <p>Track Orders</p>
//             </div>
//             <div className="perk-item">
//               <span>❤️</span>
//               <p>Save Favourites</p>
//             </div>
//             <div className="perk-item">
//               <span>🏠</span>
//               <p>Manage Addresses</p>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

//   // useEffect(() => {
//   //   const token = localStorage.getItem("token");

//   //   if (!token) return;

//   //   getProfile(token)
//   //     .then((res) => setUser(res.data))
//   //     .catch((err) => console.log(err));
//   // }, []);
//   useEffect(() => {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     console.log("Guest user");
//   }
// }, []);

//   return (
//     <div className="home-layout">
//       <Navbar active="profile" />

//       <main className="profile-main">

//         {/* HEADER */}
//         <div className="profile-header">
//           <div className="profile-avatar">🧑</div>

//           <div>
//             <h1>{user?.name || "User"}</h1>
//             <p>{user?.email || "No email found"}</p>
//           </div>

//           <button className="profile-edit-btn">Edit Profile</button>
//           <button className="logout-btn" onClick={handleLogout}>
//     Logout
//   </button>
//         </div>

//         {/* TABS */}
//         <div className="profile-tabs">
//           <button
//             className={tab === "details" ? "active" : ""}
//             onClick={() => setTab("details")}
//           >
//             Details
//           </button>

//           <button
//             className={tab === "orders" ? "active" : ""}
//             onClick={() => setTab("orders")}
//           >
//             Order History
//           </button>

//           <button
//             className={tab === "addresses" ? "active" : ""}
//             onClick={() => setTab("addresses")}
//           >
//             Addresses
//           </button>
//         </div>

//         {/* DETAILS */}
//         {tab === "details" && (
//           <div className="profile-panel">

//             <div className="profile-field">
//               <span>Full Name</span>
//               <p>{user?.name || "User not available"}</p>
//             </div>

//             <div className="profile-field">
//               <span>Email</span>
//               <p>{user?.email || "No email"}</p>
//             </div>

//             <div className="profile-field">
//               <span>Phone</span>
//               <p>{user?.phone || "Not added"}</p>
//             </div>

//             <div className="profile-field">
//               <span>Member Since</span>
//               <p>{user?.createdAt || "N/A"}</p>
//             </div>

//           </div>
//         )}

//         {/* ORDERS */}
//         {tab === "orders" && (
//           <div className="profile-panel">
//             {ORDER_HISTORY.map((o) => (
//               <div className="order-row" key={o.id}>
//                 <div>
//                   <p className="order-restaurant">{o.restaurant}</p>
//                   <p className="order-meta">
//                     #{o.id} • {o.date}
//                   </p>
//                 </div>

//                 <p className="order-amount">₹{o.amount}</p>

//                 <span className={`order-status ${o.status.toLowerCase()}`}>
//                   {o.status}
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* ADDRESSES */}
//         {tab === "addresses" && (
//           <div className="profile-panel">

//             <div className="address-card">
//               <p className="address-label">🏠 Home</p>
//               <p className="address-text">
//                 201, Sunrise Apartments, Mumbai
//               </p>
//             </div>

//             <div className="address-card">
//               <p className="address-label">💼 Work</p>
//               <p className="address-text">
//                 Tech Park, Powai, Mumbai
//               </p>
//             </div>

//             <button className="add-address-btn">
//               + Add New Address
//             </button>

//           </div>
//         )}

//       </main>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  getProfile,
  getAddresses,
  addAddress,
} from "../api/auth";
import "../assets/css/Profile.css";

const ORDER_HISTORY = [
  { id: "CR1042", restaurant: "The Garden Cafe", date: "28 Jun 2026", amount: 480, status: "Delivered" },
  { id: "CR1038", restaurant: "Wok & Roll", date: "22 Jun 2026", amount: 320, status: "Delivered" },
  { id: "CR1029", restaurant: "Bombay Bites", date: "15 Jun 2026", amount: 150, status: "Cancelled" },
];

export default function Profile() {
  const [tab, setTab] = useState("details");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addresses, setAddresses] = useState([]);
const [showForm, setShowForm] = useState(false);

const [addressData, setAddressData] = useState({
  type: "HOME",
  addressLine: "",
  city: "",
  state: "",
  pincode: "",
  defaultAddress: false,
});
  const navigate = useNavigate();

  useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    setLoading(false);
    return;
  }

  getProfile(token)
    .then((res) => {
      setUser(res.data);

      return getAddresses(token);
    })
    .then((response) => {
      if (response) {
        setAddresses(response.data);
      }
    })
    .catch((err) => {
      console.log(err);
      localStorage.removeItem("token");
    })
    .finally(() => {
      setLoading(false);
    });
}, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  const handleAddressChange = (e) => {
  const { name, value, type, checked } = e.target;

  setAddressData({
    ...addressData,
    [name]: type === "checkbox" ? checked : value,
  });
};

const handleSaveAddress = () => {
  const token = localStorage.getItem("token");

  addAddress(addressData, token)
    .then((res) => {
      setAddresses([...addresses, res.data]);

      setAddressData({
        type: "HOME",
        addressLine: "",
        city: "",
        state: "",
        pincode: "",
        defaultAddress: false,
      });

      setShowForm(false);
    })
    .catch((err) => console.log(err));
};

  // ⏳ token check hone tak kuch mat dikhao
  if (loading) {
    return (
      <div className="home-layout">
        <Navbar active="profile" />
        <main className="profile-main">
          <div className="profile-loading">Loading profile...</div>
        </main>
      </div>
    );
  }

  // ❌ NOT LOGGED IN UI — bilkul same jaisa aapko pasand hai
  if (!user) {
    return (
      <div className="home-layout">
        <Navbar />
        <main className="profile-main">
          <div className="guest-state">
            <div className="guest-icon">🔒</div>
            <h2>You're not logged in</h2>
            <p>Login to view your orders, saved addresses, favourites and more.</p>

            <div className="guest-actions">
              <button className="guest-login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
              <button className="guest-signup-btn" onClick={() => navigate("/register")}>
                Create Account
              </button>
            </div>

            <div className="guest-perks">
              <div className="perk-item">
                <span>📦</span>
                <p>Track Orders</p>
              </div>
              <div className="perk-item">
                <span>❤️</span>
                <p>Save Favourites</p>
              </div>
              <div className="perk-item">
                <span>🏠</span>
                <p>Manage Addresses</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // ✅ LOGGED IN UI
  return (
    <div className="home-layout">
      <Navbar active="profile" />
      <main className="profile-main">
        <div className="profile-header">
          <div className="profile-avatar">🧑</div>
          <div>
            <h1>{user?.name || "User"}</h1>
            <p>{user?.email || "No email found"}</p>
          </div>
          <button className="profile-edit-btn">Edit Profile</button>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="profile-tabs">
          <button className={tab === "details" ? "active" : ""} onClick={() => setTab("details")}>
            Details
          </button>
          <button className={tab === "orders" ? "active" : ""} onClick={() => setTab("orders")}>
            Order History
          </button>
          <button className={tab === "addresses" ? "active" : ""} onClick={() => setTab("addresses")}>
            Addresses
          </button>
        </div>

        {tab === "details" && (
          <div className="profile-panel">
            <div className="profile-field">
              <span>Full Name</span>
              <p>{user?.name || "User not available"}</p>
            </div>
            <div className="profile-field">
              <span>Email</span>
              <p>{user?.email || "No email"}</p>
            </div>
            <div className="profile-field">
              <span>Phone</span>
              <p>{user?.phone || "Not added"}</p>
            </div>
            {/* <div className="profile-field">
              <span>Member Since</span>
              <p>{user?.createdAt || "N/A"}</p>
            </div> */}
          </div>
        )}

        {tab === "orders" && (
          <div className="profile-panel">
            {ORDER_HISTORY.map((o) => (
              <div className="order-row" key={o.id}>
                <div>
                  <p className="order-restaurant">{o.restaurant}</p>
                  <p className="order-meta">#{o.id} • {o.date}</p>
                </div>
                <p className="order-amount">₹{o.amount}</p>
                <span className={`order-status ${o.status.toLowerCase()}`}>{o.status}</span>
              </div>
            ))}
          </div>
        )}

        {/* {tab === "addresses" && (
          <div className="profile-panel">
            <div className="address-card">
              <p className="address-label">🏠 Home</p>
              <p className="address-text">201, Sunrise Apartments, Mumbai</p>
            </div>
            <div className="address-card">
              <p className="address-label">💼 Work</p>
              <p className="address-text">Tech Park, Powai, Mumbai</p>
            </div>
            <button className="add-address-btn">+ Add New Address</button>
          </div>
        )} */}


        {tab === "addresses" && (
  <div className="profile-panel">

    {addresses.map((address) => (
      <div className="address-card" key={address.id}>
        <p className="address-label">
          {address.type}
        </p>

        <p className="address-text">
          {address.addressLine}, {address.city}, {address.state} - {address.pincode}
        </p>
      </div>
    ))}

    <button
      className="add-address-btn"
      onClick={() => setShowForm(!showForm)}
    >
      + Add New Address
    </button>

    {showForm && (
      <div className="address-form">

        <select
          name="type"
          value={addressData.type}
          onChange={handleAddressChange}
        >
          <option value="HOME">Home</option>
          <option value="WORK">Work</option>
          <option value="OTHER">Other</option>
        </select>

        <input
          type="text"
          name="addressLine"
          placeholder="Address Line"
          value={addressData.addressLine}
          onChange={handleAddressChange}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={addressData.city}
          onChange={handleAddressChange}
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          value={addressData.state}
          onChange={handleAddressChange}
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={addressData.pincode}
          onChange={handleAddressChange}
        />

        <label>
          <input
            type="checkbox"
            name="defaultAddress"
            checked={addressData.defaultAddress}
            onChange={handleAddressChange}
          />
          Default Address
        </label>

        <button
          className="add-address-btn"
          onClick={handleSaveAddress}
        >
          Save Address
        </button>

      </div>
    )}

  </div>
)}
      </main>
    </div>
  );
}