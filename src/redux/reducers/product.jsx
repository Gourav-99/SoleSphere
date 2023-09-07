const initialState = {
  products: [],
  product: null,
  loaded: false,
};
const productReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case "ALL_PRODUCTS":
      return {
        ...state,
        products: [...payload],
        loaded: true,
      };
    case "GET_PRODUCT":
      return {
        ...state,
        product: payload,
        loaded: true,
      };
    default:
      return state;
  }
};
export default productReducer;
