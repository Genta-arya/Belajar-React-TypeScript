import axios from "axios";

// Mengambil baseURL dari variabel lingkungan
const baseURL = process.env.REACT_APP_API;

export const ConfigAxios = () => {
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: { "Content-Type": "application/json" },
  });

  return instance;
};
