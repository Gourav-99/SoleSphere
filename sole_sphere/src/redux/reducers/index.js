import { combineReducers } from "redux";
import authReducer from "./auth";
import productReducer from "./product";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
});
export default rootReducer;
