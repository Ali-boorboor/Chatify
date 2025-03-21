import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:4030/api/v1",
});

export default AxiosInstance;
