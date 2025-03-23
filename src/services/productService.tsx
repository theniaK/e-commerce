import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7231/api/Items",
});

const getProducts = async () => api.get("/items");

export { getProducts };
