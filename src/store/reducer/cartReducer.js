const initialState = {
  dataCart: [],
  countCart: 0,
  statusError: true,
  product_id: 0,
  qty: 0,
};
export default function cartReducer(cartState = initialState, action) {
  switch (action.type) {
    case "SUCCESS_GET_CART":
      return {
        ...cartState,
        dataCart: action.payload,
      };
    case "SUCCESS_POST_CART":
      return {
        ...cartState,
        statusError: false,
      };
    case "SUCCESS_DELETE_CART":
      return {
        ...cartState,
        statusError: false,
      };
    case "SUCCESS_CHECKOUT":
      return {
        ...cartState,
      };

    default:
      return cartState;
  }
}
