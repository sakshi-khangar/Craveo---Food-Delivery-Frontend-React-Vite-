import axios from "axios";

const BASE_URL = "http://localhost:8080/api/restaurants";

export const getAllRestaurants = () => axios.get(BASE_URL);
export const getRestaurantById = (id) => axios.get(`${BASE_URL}/${id}`);