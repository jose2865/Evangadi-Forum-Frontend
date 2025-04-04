import axios from "axios";

const axiosBase = axios.create({
  // baseURL: "http://localhost:6063/api",

  baseURL: "https://evangadi-forum-backend-ors0.onrender.com/api",
});
export default axiosBase;