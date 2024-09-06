import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.kinopoisk.dev/v1.4',
  headers: {
    'X-API-KEY': 'V8J0YG0-0GTM95J-H9HDD7D-XZFM48N',
  },
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('Error fetching data:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
