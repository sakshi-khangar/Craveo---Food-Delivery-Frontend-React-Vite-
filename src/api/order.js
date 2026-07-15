import axios from "axios";

const BASE_URL = "http://localhost:8080/api/orders";

const authHeader = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

export const checkoutOrder = (addressId, token) =>
  axios.post(`${BASE_URL}/checkout`, { addressId }, authHeader(token));

export const getMyOrders = (token) =>
  axios.get(`${BASE_URL}/my`, authHeader(token));