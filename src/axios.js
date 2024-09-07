import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.kinopoisk.dev/v1.4',
  headers: {
    'X-API-KEY': '68YR40J-YENM25K-K03KW0S-HS0ETEC',
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
