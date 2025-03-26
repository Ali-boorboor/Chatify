import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://192.168.1.100:4030/api/v1",
});

export default AxiosInstance;
