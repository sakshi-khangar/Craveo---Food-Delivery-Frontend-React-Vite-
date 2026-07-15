// import React, { createContext, useContext, useState, useMemo } from "react";

// const CartContext = createContext(null);

// export function CartProvider({ children }) {
//   const [items, setItems] = useState([]);

//   const addToCart = (food) => {
//     setItems((prev) => {
//       const existing = prev.find((i) => i.id === food.id);
//       if (existing) {
//         return prev.map((i) =>
//           i.id === food.id ? { ...i, qty: i.qty + 1 } : i
//         );
//       }
//       return [...prev, { ...food, qty: 1 }];
//     });
//   };

//   const updateQty = (id, delta) => {
//     setItems((prev) =>
//       prev
//         .map((i) => (i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i))
//         .filter((i) => i.qty > 0)
//     );
//   };

//   const removeFromCart = (id) => {
//     setItems((prev) => prev.filter((i) => i.id !== id));
//   };

//   const clearCart = () => setItems([]);

//   const totalItems = useMemo(
//     () => items.reduce((sum, i) => sum + i.qty, 0),
//     [items]
//   );

//   const subtotal = useMemo(
//     () => items.reduce((sum, i) => sum + i.price * i.qty, 0),
//     [items]
//   );

//   const value = {
//     items,
//     addToCart,
//     updateQty,
//     removeFromCart,
//     clearCart,
//     totalItems,
//     subtotal,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// }

// export function useCart() {
//   const ctx = useContext(CartContext);
//   if (!ctx) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return ctx;
// }

import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { getCart, addToCartApi, updateCartQty, removeCartItem, clearCartApi } from "../api/cart";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // backend CartItem list: [{id, food:{...}, quantity}]
  const [loading, setLoading] = useState(false);

  const token = () => localStorage.getItem("token");

  const refreshCart = async () => {
    const t = token();
    if (!t) {
      setItems([]);
      return;
    }
    try {
      setLoading(true);
      const res = await getCart(t);
      setItems(res.data.items || []);
    } catch (err) {
      console.log("Cart load failed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshCart();
  }, []);

  const addToCart = async (foodId, quantity = 1) => {
    const t = token();
    if (!t) {
      alert("Cart me add karne ke liye pehle login karo!");
      return;
    }
    await addToCartApi(foodId, quantity, t);
    await refreshCart();
  };

  // itemId = cart item ka id (food ka id nahi)
  const updateQty = async (itemId, newQuantity) => {
    const t = token();
    if (!t) return;
    if (newQuantity < 1) {
      await removeFromCart(itemId);
      return;
    }
    await updateCartQty(itemId, newQuantity, t);
    await refreshCart();
  };

  const removeFromCart = async (itemId) => {
    const t = token();
    if (!t) return;
    await removeCartItem(itemId, t);
    await refreshCart();
  };

  const clearCart = async () => {
    const t = token();
    if (!t) return;
    await clearCartApi(t);
    setItems([]);
  };

  const totalItems = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.food.price * i.quantity, 0),
    [items]
  );

  const value = {
    items,
    loading,
    addToCart,
    updateQty,
    removeFromCart,
    clearCart,
    refreshCart,
    totalItems,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}