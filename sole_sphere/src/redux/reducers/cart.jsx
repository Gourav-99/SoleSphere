const initialState = {
  cartItems: [],
  loaded: false,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CART_ITEMS":
      // Check if the product is already in the cart
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) =>
          item.product._id === payload.product._id &&
          item.activeSize === payload.activeSize
      );

      if (existingCartItemIndex !== -1) {
        // If the product is already in the cart, update its quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingCartItemIndex].selectedQuantity +=
          payload.selectedQuantity;

        return {
          ...state,
          cartItems: updatedCartItems,
          loaded: true,
        };
      } else {
        // If the product is not in the cart, add it
        return {
          ...state,
          cartItems: [...state.cartItems, payload],
          loaded: true,
        };
      }
    case "REMOVE_CART_ITEM":
      const remainingProducts = state.cartItems.filter(
        (item) => item.product._id !== payload
      );
      return {
        ...state,
        cartItems: remainingProducts,
        loaded: true,
      };
    default:
      return state;
  }
};

export default cartReducer;
