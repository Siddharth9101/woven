import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
  baseURL: `${BACKEND_URL}/api/v1/products`,
});

export const getAllProductsService = async () => {
  const res = await api.get("/");
  return res.data;
};

export const getProductById = async (id) => {
  const res = await api.get(`/${id}`);
  return res.data;
};
