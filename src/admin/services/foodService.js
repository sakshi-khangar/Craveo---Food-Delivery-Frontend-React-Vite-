import axios from "axios";

const FOOD_URL = "http://localhost:8080/api/foods";

const getAuthHeader = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
});

export const getAllFoods = () => {
    return axios.get(FOOD_URL, getAuthHeader());
};

export const addFood = (foodData) => {
    return axios.post(FOOD_URL, foodData, getAuthHeader());
};

export const updateFood = (id, foodData) => {
    return axios.put(`${FOOD_URL}/${id}`, foodData, getAuthHeader());
};

export const deleteFood = (id) => {
    return axios.delete(`${FOOD_URL}/${id}`, getAuthHeader());
};