import axios from "../../utilis/axios/index";
import { toast } from "react-hot-toast";

export const cartItems = (payload) => async (dispatch) => {
  try {
    const { activeSize, quantity, id } = payload;
    console.log(payload);
    const res = await axios.get(`/product/${id}`);
    const product = res.data;
    dispatch({
      type: "CART_ITEMS",
      payload: {
        activeSize,
        selectedQuantity: quantity,
        product,
      },
    });
    toast.success("Added to cart");
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
};
