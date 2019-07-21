import axios from "axios";

const client = axios.create({
  baseURL: "http://api.service.com"
});

export default client;
