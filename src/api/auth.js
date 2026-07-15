import axios from "axios";

const API = "http://localhost:8080/api/auth";

export const registerUser = (data) => {
  return axios.post(`${API}/register`, data);
};

export const loginUser = (data) => {
  return axios.post(`${API}/login`, data);
};

export const getProfile = (token) => {
  return axios.get("http://localhost:8080/api/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// ================= ADDRESS API =================

// Get All Addresses
export const getAddresses = (token) => {
  return axios.get("http://localhost:8080/api/address", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Add Address
export const addAddress = (data, token) => {
  return axios.post("http://localhost:8080/api/address", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Update Address
export const updateAddress = (id, data, token) => {
  return axios.put(`http://localhost:8080/api/address/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Delete Address
export const deleteAddress = (id, token) => {
  return axios.delete(`http://localhost:8080/api/address/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// ================= USERS API (Admin) =================

// Get All Users
// ================= USERS API (Admin) =================

// Get All Users
export const getAllUsers = (token) => {
  return axios.get("http://localhost:8080/api/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};