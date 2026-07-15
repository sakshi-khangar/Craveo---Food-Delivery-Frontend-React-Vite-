import axios from "axios";

const BASE_URL = "http://localhost:8080/api/foods";

export const getAllFoods = () => axios.get(BASE_URL);
export const getFoodById = (id) => axios.get(`${BASE_URL}/${id}`);
export const getFoodsByRestaurant = (restaurantId) =>
  axios.get(`${BASE_URL}/restaurant/${restaurantId}`);