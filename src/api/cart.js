import axios from "axios";

const BASE_URL = "http://localhost:8080/api/cart";

const authHeader = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

export const getCart = (token) => axios.get(BASE_URL, authHeader(token));

export const addToCartApi = (foodId, quantity, token) =>
  axios.post(`${BASE_URL}/add`, { foodId, quantity }, authHeader(token));

export const updateCartQty = (itemId, quantity, token) =>
  axios.put(`${BASE_URL}/update/${itemId}?quantity=${quantity}`, {}, authHeader(token));

export const removeCartItem = (itemId, token) =>
  axios.delete(`${BASE_URL}/remove/${itemId}`, authHeader(token));

export const clearCartApi = (token) =>
  axios.delete(`${BASE_URL}/clear`, authHeader(token));