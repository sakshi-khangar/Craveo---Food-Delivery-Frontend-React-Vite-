import React, { useEffect, useState } from "react";

import {
  getRestaurants,
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from "../services/restaurantService";

import { getCategories } from "../services/categoryService";

import "../css/Restaurants.css";

export default function Restaurants() {

  const [restaurants, setRestaurants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    cuisine: "",
    rating: "",
    deliveryTime: "",
    priceForOne: "",
    image: "",
    address: "",
    categoryId: "",
  });

  useEffect(() => {
    loadRestaurants();
    loadCategories();
  }, []);

  const loadRestaurants = async () => {
    const res = await getRestaurants();
    setRestaurants(res.data);
  };

  const loadCategories = async () => {
    const res = await getCategories();
    setCategories(res.data);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (editingId == null) {

        await addRestaurant(form);

    } else {

        await updateRestaurant(editingId, form);

        setEditingId(null);

    }

    setForm({
        name: "",
        cuisine: "",
        rating: "",
        deliveryTime: "",
        priceForOne: "",
        image: "",
        address: "",
        categoryId: "",
    });

    loadRestaurants();

};

  const handleDelete = async (id) => {

    if (window.confirm("Delete Restaurant?")) {

      await deleteRestaurant(id);

      loadRestaurants();

    }

  };

  const handleEdit = (restaurant) => {

    setEditingId(restaurant.id);

    setForm({
        name: restaurant.name,
        cuisine: restaurant.cuisine,
        rating: restaurant.rating,
        deliveryTime: restaurant.deliveryTime,
        priceForOne: restaurant.priceForOne,
        image: restaurant.image,
        address: restaurant.address,
        categoryId: restaurant.category.id,
    });

};

  return (
    <div className="restaurant-container">

      <h2>Restaurant Management</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Restaurant Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="cuisine"
          placeholder="Cuisine"
          value={form.cuisine}
          onChange={handleChange}
          required
        />

        <input
          name="rating"
          type="number"
          step="0.1"
          placeholder="Rating"
          value={form.rating}
          onChange={handleChange}
          required
        />

        <input
          name="deliveryTime"
          placeholder="Delivery Time"
          value={form.deliveryTime}
          onChange={handleChange}
          required
        />

        <input
          name="priceForOne"
          placeholder="Price For One"
          value={form.priceForOne}
          onChange={handleChange}
          required
        />

        <input
          name="image"
          placeholder="Image URL / Emoji"
          value={form.image}
          onChange={handleChange}
          required
        />

        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
        />

        <select
          name="categoryId"
          value={form.categoryId}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>

          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}

        </select>

        <button type="submit">
    {editingId ? "Update Restaurant" : "Add Restaurant"}
</button>

      </form>

      <table>

        <thead>

          <tr>
            <th>ID</th>
    <th>Image</th>
    <th>Name</th>
    <th>Cuisine</th>
    <th>Rating</th>
    <th>Delivery Time</th>
    <th>Price</th>
    <th>Address</th>
    <th>Category</th>
    <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {restaurants.map((r) => (

            <tr key={r.id}>

              <td>{r.id}</td>
         <td>
  <img
    src={r.image}
    alt={r.name}
    className="restaurant-img"
    onError={(e) => {
      e.target.src =
        "https://via.placeholder.com/80x60?text=No+Image";
    }}
  />
</td>
      <td>{r.name}</td>
      <td>{r.cuisine}</td>
      <td>{r.rating}</td>
      <td>{r.deliveryTime}</td>
      <td>{r.priceForOne}</td>
      <td>{r.address}</td>
      <td>{r.category?.name}</td>
      <td>

    <button onClick={() => handleEdit(r)}>
        Edit
    </button>

    <button
        className="delete"
        onClick={() => handleDelete(r.id)}
    >
        Delete
    </button>

</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}