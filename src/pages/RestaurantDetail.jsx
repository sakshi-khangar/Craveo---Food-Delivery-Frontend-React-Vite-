import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";
import { getRestaurantById } from "../api/restaurant";
import { getFoodsByRestaurant } from "../api/food";
import "../assets/css/Restaurants.css";

export default function RestaurantDetail() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getRestaurantById(id).then((res) => setRestaurant(res.data)).catch((err) => console.log(err));
    getFoodsByRestaurant(id).then((res) => setFoods(res.data)).catch((err) => console.log(err));
  }, [id]);

  if (!restaurant) return <div className="home-layout"><Navbar /><main className="restaurants-main"><p>Loading...</p></main></div>;

  return (
    <div className="home-layout">
      <Navbar active="explore" />
      <main className="restaurants-main">
        {/* <header className="restaurants-header">
          <h1>{restaurant.name}</h1>
          <p>{restaurant.cuisine} • ⭐ {restaurant.rating} • {restaurant.deliveryTime}</p>
          <p>{restaurant.address}</p>
        </header> */}

        <header className="restaurant-detail-header">
  <div className="rdh-top">
    <h1>{restaurant.name}</h1>
    <p className="rdh-address">📍 {restaurant.address}</p>
  </div>
  <div className="rdh-meta">
    <span>{restaurant.cuisine}</span>
    <span className="rdh-dot">•</span>
    <span>⭐ {restaurant.rating}</span>
    <span className="rdh-dot">•</span>
    <span>🚴 {restaurant.deliveryTime}</span>
  </div>
</header>

        <h2 className="menu-heading">Menu</h2>
        <div className="restaurants-grid">
          {foods.length > 0 ? (
            foods.map((f) => <FoodCard food={f} key={f.id} />)
          ) : (
            <p className="restaurants-empty">No items available right now.</p>
          )}
        </div>
      </main>
    </div>
  );
}