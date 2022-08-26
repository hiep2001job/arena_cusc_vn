import axios from 'axios';
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-
//config for the full list of configs

const axiosClient = axios.create({
  baseURL: 'https://opensheet.elk.sh/1M1uaegvEMvVCZIcmcMFtse0rdX2sSfXguisvMBOpyss',
  headers: {
    'content-type': 'application/json',
  },
});
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  },
);
export default axiosClient;
