import axios from "axios";

const BASE_URL = "http://localhost:8080/api/banners";

export const getAllBanners = () => {
    return axios.get(BASE_URL);
};