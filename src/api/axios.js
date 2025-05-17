import axios from "axios";

const API_URL = "http://localhost:3000"; // Verify this is correct

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// Add request interceptor to add auth token to requests
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    try {
      const userData = localStorage.getItem("userData");
      if (userData) {
        const parsedData = JSON.parse(userData);
        if (parsedData && parsedData.access_token) {
          // Add Authorization header with token
          config.headers.Authorization = `Bearer ${parsedData.access_token}`;
        }
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized errors (token expired)
    if (error.response && error.response.status === 401) {
      // Clear localStorage and redirect to login
      localStorage.removeItem("userData");
      localStorage.removeItem("isAuthenticated");
      window.location.href = "/#/login";
    }
    return Promise.reject(error);
  }
);

export default api;
