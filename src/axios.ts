import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosNXS: AxiosInstance = axios.create({
  baseURL: `https://testnet.nexus.api.io:8070`,
});

export default axiosNXS;
