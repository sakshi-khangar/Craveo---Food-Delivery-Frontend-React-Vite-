import axios from "axios";

const API_URL = "http://localhost:8080/api/banners";

// Get All Banners
export const getAllBanners = () => {
    return axios.get(API_URL);
};

// Add Banner
export const addBanner = (banner) => {
    return axios.post(API_URL, banner);
};

// Update Banner
export const updateBanner = (id, banner) => {
    return axios.put(`${API_URL}/${id}`, banner);
};

// Delete Banner
export const deleteBanner = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};