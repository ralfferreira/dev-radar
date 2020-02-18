import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3840"
});

export default api;
