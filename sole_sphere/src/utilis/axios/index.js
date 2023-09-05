import axios from "axios";
import store from "../../redux/store";
// console.log(process.env.REACT_APP_API_BASE_URI);
const instance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 5000,
  headers: {},
});

instance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response.data;
  },
  (error) => {
    console.log(error);
    if (error.response.status === 401) {
      store.dispatch({
        type: "LOGOUT",
      });
    }
    return Promise.reject(error);
  }
);
export default instance;
