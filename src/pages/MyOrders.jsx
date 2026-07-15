// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import { getMyOrders } from "../api/order";
// import "../assets/css/Cart.css";

// export default function MyOrders() {
//   const [orders, setOrders] = useState([]);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     if (!token) return;
//     getMyOrders(token).then((res) => setOrders(res.data)).catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="home-layout">
//       <Navbar active="orders" />
//       <main className="cart-main">
//         <h1>My Orders</h1>

//         {orders.length === 0 ? (
//           <p>Aapne abhi tak koi order nahi kiya.</p>
//         ) : (
//           <div className="cart-items">
//             {orders.map((o) => (
//               <div className="cart-item" key={o.id} style={{ flexDirection: "column", alignItems: "flex-start" }}>
//                 <p className="cart-item-name">Order #{o.id} — {o.status}</p>
//                 <p>{new Date(o.orderDate).toLocaleString()}</p>
//                 <p>{o.address}</p>
//                 <ul>
//                   {o.orderItems?.map((oi) => (
//                     <li key={oi.id}>{oi.food.name} x {oi.quantity} — ₹{oi.price * oi.quantity}</li>
//                   ))}
//                 </ul>
//                 <p className="cart-item-price">Total: ₹{o.totalAmount}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { getMyOrders } from "../api/order";
import "../assets/css/Cart.css";

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }
    getMyOrders(token)
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const statusClass = (status) => {
    const s = (status || "").toLowerCase();
    if (s.includes("deliver")) return "status-delivered";
    if (s.includes("prepar") || s.includes("way") || s.includes("transit")) return "status-progress";
    if (s.includes("cancel")) return "status-cancelled";
    return "status-pending";
  };

  return (
    <div className="home-layout">
      <Navbar active="orders" />
      <main className="orders-main">
        <h1 className="orders-title">My Orders</h1>

        {loading ? (
          <p className="orders-loading">Loading your orders...</p>
        ) : orders.length === 0 ? (
          <div className="orders-empty">
            <p className="orders-empty-icon">📋</p>
            <p>Your order history is empty. Let's order something delicious! 🍕</p>
          </div>
        ) : (
          <div className="orders-list">
            {orders
              .slice()
              .reverse()
              .map((o) => (
                <div className="order-card" key={o.id}>
                  <div className="order-card-header">
                    <div>
                      <p className="order-id">Order #{o.id}</p>
                      <p className="order-date">
                        {new Date(o.orderDate).toLocaleString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                    <span className={`order-status ${statusClass(o.status)}`}>
                      {o.status}
                    </span>
                  </div>

                  <p className="order-address">📍 {o.address}</p>

                  <div className="order-items">
                    {o.orderItems?.map((oi) => (
                      <div className="order-item-row" key={oi.id}>
                        <span className="order-item-name">
                          {oi.food.name} <span className="order-item-qty">x{oi.quantity}</span>
                        </span>
                        <span className="order-item-price">₹{oi.price * oi.quantity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="order-total-row">
                    <span>Total</span>
                    <span className="order-total-amount">₹{o.totalAmount}</span>
                  </div>
                </div>
              ))}
          </div>
        )}
      </main>
    </div>
  );
}