import axios from "axios";

const baseUrl = axios.create({ baseURL: "https://e-shop-ten-pi.vercel.app" });

export default baseUrl;
