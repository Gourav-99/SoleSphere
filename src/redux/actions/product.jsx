import { toast } from "react-hot-toast";
import axios from "../../utilis/axios/index";
export const getProducts = (search) => async (dispatch) => {
  try {
    const res = await axios.get(`/product/get-products?_search=${search}`);

    dispatch({ type: "ALL_PRODUCTS", payload: res.data });
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};
export const getProductById = (payload) => async (dispatch) => {
  try {
    const res = await axios.get(`/product/${payload}`);

    dispatch({ type: "GET_PRODUCT", payload: res.data });

    toast.success("Product Fetched Successfully");
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};
