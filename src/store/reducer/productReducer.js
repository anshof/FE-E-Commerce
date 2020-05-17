const initialState = {
  name: "",
  price: "",
  color: "",
  weight: "",
  size: "",
  img: "",
  stock: "",
  promo: "",
  discount: "",
  product_type_id: "",
  data: [],
  detailData: [],
};

export default function productReducer(productState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_PRODUCT":
      return {
        ...productState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "SUCCESS_POST_PRODUCT":
      return {
        ...productState,
      };
    case "SUCCESS_GET_PRODUCT":
      return {
        ...productState,
        data: action.payload,
      };
    case "REQUEST_CATEGORY_PRODUCT":
      return {
        ...productState,
        data: action.payload,
      };
    case "REQUEST_CATEGORY_PRODUCT_BY_ID":
      return {
        ...productState,
        detailData: action.payload,
      };
    default:
      return productState;
  }
}
