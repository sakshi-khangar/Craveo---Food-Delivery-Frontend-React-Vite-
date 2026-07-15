import axios from "axios";

export const getHomeData = () => axios.get("http://localhost:8080/api/home");