import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://cocokin-api.vercel.app",
//   timeout: 10000, // Opsional: atur timeout untuk request
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;