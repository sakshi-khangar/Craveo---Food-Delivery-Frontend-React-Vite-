// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import { useCart } from "../context/CartContext.jsx";
// import "../assets/css/Cart.css";

// export default function Cart() {
//   const { items, updateQty, removeFromCart, subtotal } = useCart();

//   const deliveryFee = items.length > 0 ? 30 : 0;
//   const tax = Math.round(subtotal * 0.05);
//   const total = subtotal + deliveryFee + tax;

//   return (
//     <div className="home-layout">
//       <Navbar active="orders" />

//       <main className="cart-main">
//         <h1>Your Cart</h1>

//         {items.length === 0 ? (
//           <div className="cart-empty">
//             <p className="cart-empty-icon">🛒</p>
//             <p>Your cart is empty.</p>
//             <Link to="/restaurants" className="cart-empty-btn">
//               Browse Restaurants
//             </Link>
//           </div>
//         ) : (
//           <div className="cart-grid">
//             <div className="cart-items">
//               {items.map((item) => (
//                 <div className="cart-item" key={item.id}>
//                   <span className="cart-item-icon">{item.icon}</span>
//                   <div className="cart-item-info">
//                     <p className="cart-item-name">{item.name}</p>
//                     <p className="cart-item-restaurant">{item.restaurant}</p>
//                   </div>
//                   <div className="cart-qty">
//                     <button onClick={() => updateQty(item.id, -1)}>−</button>
//                     <span>{item.qty}</span>
//                     <button onClick={() => updateQty(item.id, 1)}>+</button>
//                   </div>
//                   <p className="cart-item-price">₹{item.price * item.qty}</p>
//                   <button className="cart-remove" onClick={() => removeFromCart(item.id)}>
//                     🗑️
//                   </button>
//                 </div>
//               ))}
//             </div>

//             <div className="cart-summary">
//               <h3>Order Summary</h3>
//               <div className="summary-row">
//                 <span>Subtotal</span>
//                 <span>₹{subtotal}</span>
//               </div>
//               <div className="summary-row">
//                 <span>Delivery Fee</span>
//                 <span>₹{deliveryFee}</span>
//               </div>
//               <div className="summary-row">
//                 <span>Taxes</span>
//                 <span>₹{tax}</span>
//               </div>
//               <div className="summary-row total">
//                 <span>Total</span>
//                 <span>₹{total}</span>
//               </div>
//               <button className="checkout-btn">Proceed to Checkout →</button>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext.jsx";
import "../assets/css/Cart.css";

export default function Cart() {
  const { items, updateQty, removeFromCart, subtotal, loading } = useCart();
  const navigate = useNavigate();

  const deliveryFee = items.length > 0 ? 30 : 0;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + tax;

  if (loading) return <div className="home-layout"><Navbar active="orders" /><main className="cart-main"><p>Loading cart...</p></main></div>;

  return (
    <div className="home-layout">
      <Navbar active="orders" />
      <main className="cart-main">
        <h1>Your Cart</h1>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p className="cart-empty-icon">🛒</p>
            <p>Your cart is empty.</p>
            <Link to="/restaurants" className="cart-empty-btn">Browse Restaurants</Link>
          </div>
        ) : (
          <div className="cart-grid">
            <div className="cart-items">
              {items.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-icon">
  {item.food.image ? (
    <img src={item.food.image} alt={item.food.name} />
  ) : (
    <span>🍽️</span>
  )}
</div>
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.food.name}</p>
                  </div>
                  <div className="cart-qty">
                    <button onClick={() => updateQty(item.id, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQty(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <p className="cart-item-price">₹{item.food.price * item.quantity}</p>
                  <button className="cart-remove" onClick={() => removeFromCart(item.id)}>🗑️</button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Order Summary</h3>
              <div className="summary-row"><span>Subtotal</span><span>₹{subtotal}</span></div>
              <div className="summary-row"><span>Delivery Fee</span><span>₹{deliveryFee}</span></div>
              <div className="summary-row"><span>Taxes</span><span>₹{tax}</span></div>
              <div className="summary-row total"><span>Total</span><span>₹{total}</span></div>
              <button className="checkout-btn" onClick={() => navigate("/checkout")}>
                Proceed to Checkout →
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}