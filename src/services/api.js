import axios from "axios";

const api = axios.create({
  baseURL: "https://recantocafeapp.herokuapp.com/",
});

export default api;
