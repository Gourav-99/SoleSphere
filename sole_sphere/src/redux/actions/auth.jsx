import { toast } from "react-hot-toast";
import axios from "../../utilis/axios/index";
export const loginUser = (payload) => async (dispatch) => {
  try {
    const res = await axios.post("/auth/signin", payload);
    const { token } = res.data;

    axios.defaults.headers.common["Authorization"] = `${token}`;
    localStorage.setItem("access_token", token);
    dispatch({ type: "LOGIN_USER", payload: res.data });
    toast.success("Signed In Successfully");
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};
export const loadUser = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("access_token");
    if (!token) return;
    const res = await axios.get(`/auth/validate/${token}`);
    axios.defaults.headers.common["Authorization"] = `${token}`;

    dispatch({ type: "LOAD_USER", payload: { user: res.data, token: token } });

    toast.success("Validated User");
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};
export const signUpUser = (payload) => async (dispatch) => {
  try {
    const res = await axios.post("/auth/signup", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: "SIGN_UP", payload: res.data });
    toast.success("Signed up successfully");
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};
