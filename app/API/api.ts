
import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:4000", //ruta de la API
  headers: {
    "Content-Type": "application/json",
  },
});
console.log("API initialized with base URL:", api.defaults.baseURL);
export default api;

