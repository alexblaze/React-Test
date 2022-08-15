import Axios from "axios";
import { getUser, removeUser } from "../utils/cookieHelper";

export const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 20000,
});

//add token to all request
axiosInstance.interceptors.request.use(function (config) {
  const { token } = getUser();
  if (token) {
    config.headers = {
      ...config.headers,
      melatoken: token,
    };
  }

  return config;
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (
      (error.response &&
        error.response.data.message === "invalid_or_missing_token") ||
      (error.response && error.response.data.message === "Request Denied")
    ) {
      removeUser();
      window.location.replace("/gettoken");
      localStorage.setItem("InvalidToken", 1);
    } else if (error.response && error.response.data) {
      if (error.response.data?.message) {
        const message = error.response?.data?.message;
        return Promise.reject({ message });
      } else return Promise.reject(error.response?.data);
    } else {
      return Promise.reject({
        message: "Some unusual error occured, please try again",
      });
    }
  }
);
