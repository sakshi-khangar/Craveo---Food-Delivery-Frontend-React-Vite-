import axios from "axios";

export const searchAll = (keyword) =>
  axios.get(`http://localhost:8080/api/search?keyword=${encodeURIComponent(keyword)}`);