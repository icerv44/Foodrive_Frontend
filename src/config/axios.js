import axios from "axios";
import { getAccessToken } from "../services/localstorage";
import { API_ENDPOINT_URL } from "./env";

axios.defaults.baseURL = API_ENDPOINT_URL;
axios.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (config.url.includes("https://maps.googleapis.com/maps/api/geocode")) {
      return config;
    }

    if (token) {
      config.headers.authorization = "Bearer " + token;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default axios;
