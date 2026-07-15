import axios from "axios";

const BASE_URL = "http://localhost:8080/api/payment";

const authHeader = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

export const createRazorpayOrder = (amount, token) =>
  axios.post(`${BASE_URL}/create-order`, { amount }, authHeader(token));

export const verifyPayment = (data, token) =>
  axios.post(`${BASE_URL}/verify`, data, authHeader(token));