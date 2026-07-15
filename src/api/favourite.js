import axios from "axios";

const BASE_URL = "http://localhost:8080/api/favourites";

const authHeader = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

export const getFavourites = (token) => axios.get(BASE_URL, authHeader(token));

export const addFavourite = (foodId, token) =>
  axios.post(`${BASE_URL}/${foodId}`, {}, authHeader(token));

export const removeFavourite = (foodId, token) =>
  axios.delete(`${BASE_URL}/${foodId}`, authHeader(token));