const initialState = {
  token: null,
  user: null,
  loaded: false,
};
const authReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case "LOGIN_USER":
      return {
        ...state,
        ...payload,
        loaded: true,
      };
    case "LOAD_USER":
      return {
        ...state,
        ...payload,
        loaded: true,
      };
    case "SIGN_UP":
      return {
        ...state,
        ...payload,
        loaded: true,
      };
    default:
      return state;
  }
};
export default authReducer;
