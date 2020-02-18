import axios from "axios";

// baseURl
// 192.168.1.107 - Do expo
// 3840 - Porta do backend
const api = axios.create({
  baseURL: "http://192.168.0.17:3840"
});

export default api;
