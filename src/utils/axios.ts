import axios from "axios";

const request = axios.create({
  baseURL: "https://api.gridge-test.com",
});
request.defaults.timeout = 2500;

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // eslint-disable-next-line no-console
    console.log(error);
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },

  (error) => {
    // eslint-disable-next-line no-console
    console.log(error);
    return Promise.reject(error);
  }
);

export default request;
