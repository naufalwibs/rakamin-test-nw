import axios from "axios";

const instance = axios.create({
  baseURL: "https://todos-project-api.herokuapp.com",
});

export default instance;
