import axios from "axios";

const api = axios.create({
  baseURL: "https://busy-blue-sawfish-wig.cyclic.app", // Replace with the URL of your Node.js API
});

export default api;
