import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://chatify-backend.liara.run/api/v1",
});

export default AxiosInstance;
