import axios from "axios";

const baseURL = "http://localhost:3333/";

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  async (config) => {
    const accessToken = await localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers!.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
