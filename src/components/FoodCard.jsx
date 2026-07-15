// import React from "react";
// import { useCart } from "../context/CartContext.jsx";
// import "../assets/css/FoodCard.css";

// export default function FoodCard({ food }) {
//   const { name, restaurant, price, icon, veg } = food;
//   const { addToCart } = useCart();

//   return (
//     <div className="fc-card">
//       <div className="fc-thumb">
//         <span>{icon}</span>
//         <span className={`fc-veg ${veg ? "veg" : "nonveg"}`} title={veg ? "Veg" : "Non-Veg"} />
//       </div>
//       <div className="fc-body">
//         <h4>{name}</h4>
//         <p className="fc-restaurant">{restaurant}</p>
//         <div className="fc-footer">
//           <span className="fc-price">₹{price}</span>
//           <button className="fc-add" onClick={() => addToCart(food)}>
//             + Add
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext.jsx";
import { addFavourite, removeFavourite, getFavourites } from "../api/favourite";
import "../assets/css/FoodCard.css";

export default function FoodCard({ food }) {
  const { id, name, price, image, veg, restaurant } = food;
  const { addToCart } = useCart();
  const [isFav, setIsFav] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;
    getFavourites(token)
      .then((res) => {
        const found = res.data.some((f) => f.food.id === id);
        setIsFav(found);
      })
      .catch(() => {});
  }, [id]);

  const toggleFavourite = async () => {
    if (!token) {
      alert("Favourite karne ke liye login karo!");
      return;
    }
    if (isFav) {
      await removeFavourite(id, token);
      setIsFav(false);
    } else {
      await addFavourite(id, token);
      setIsFav(true);
    }
  };

  return (
    <div className="fc-card">
      <div className="fc-thumb">
        {image ? <img src={image} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <span>🍽️</span>}
        <span className={`fc-veg ${veg ? "veg" : "nonveg"}`} title={veg ? "Veg" : "Non-Veg"} />
        <button className={`fc-fav ${isFav ? "active" : ""}`} onClick={toggleFavourite} aria-label="Toggle favourite">
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>
      <div className="fc-body">
        <h4>{name}</h4>
        {restaurant && <p className="fc-restaurant">{restaurant.name}</p>}
        <div className="fc-footer">
          <span className="fc-price">₹{price}</span>
          <button className="fc-add" onClick={() => addToCart(id, 1)}>
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}