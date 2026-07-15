import axios from "axios";

const API = "http://localhost:8080/api/restaurants";

export const getRestaurants = () => axios.get(API);

export const addRestaurant = (restaurant) => axios.post(API, restaurant);

export const updateRestaurant = (id, restaurant) =>
  axios.put(`${API}/${id}`, restaurant);

export const deleteRestaurant = (id) => axios.delete(`${API}/${id}`);