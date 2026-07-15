import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext.jsx";
import { getAddresses } from "../api/auth";
import { checkoutOrder } from "../api/order";
import "../assets/css/Cart.css";

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [placing, setPlacing] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const deliveryFee = items.length > 0 ? 30 : 0;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + tax;

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    getAddresses(token)
      .then((res) => {
        setAddresses(res.data);
        const def = res.data.find((a) => a.defaultAddress);
        setSelectedAddress(def ? def.id : res.data[0]?.id);
      })
      .catch((err) => console.log(err));
  }, []);

  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      alert("Pehle delivery address select karo ya add karo (Profile page se)");
      return;
    }
    try {
      setPlacing(true);
      await checkoutOrder(selectedAddress, token);
      await clearCart();
      alert("Order placed successfully! 🎉");
      navigate("/orders");
    } catch (err) {
      console.log(err);
      alert("Order place karne me error aaya");
    } finally {
      setPlacing(false);
    }
  };

  return (
    <div className="home-layout">
      <Navbar active="orders" />
      <main className="cart-main">
        <h1>Checkout</h1>

        <h3>Select Delivery Address</h3>
        {addresses.length === 0 ? (
          <p>Koi address nahi mila. Pehle Profile page se address add karo.</p>
        ) : (
          <div className="cart-items">
            {addresses.map((a) => (
              <label key={a.id} className="cart-item" style={{ cursor: "pointer" }}>
                <input
                  type="radio"
                  name="address"
                  checked={selectedAddress === a.id}
                  onChange={() => setSelectedAddress(a.id)}
                  style={{ marginRight: "10px" }}
                />
                <div className="cart-item-info">
                  <p className="cart-item-name">{a.type}</p>
                  <p>{a.addressLine}, {a.city}, {a.state} - {a.pincode}</p>
                </div>
              </label>
            ))}
          </div>
        )}

        <div className="cart-summary" style={{ marginTop: "20px" }}>
          <h3>Order Summary</h3>
          <div className="summary-row"><span>Subtotal</span><span>₹{subtotal}</span></div>
          <div className="summary-row"><span>Delivery Fee</span><span>₹{deliveryFee}</span></div>
          <div className="summary-row"><span>Taxes</span><span>₹{tax}</span></div>
          <div className="summary-row total"><span>Total</span><span>₹{total}</span></div>
          <button className="checkout-btn" onClick={handlePlaceOrder} disabled={placing}>
            {placing ? "Placing Order..." : "Place Order →"}
          </button>
        </div>
      </main>
    </div>
  );
}