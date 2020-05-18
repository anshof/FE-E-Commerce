const initialState = {
  username: "",
  email: "",
  avatar: "",
  is_login: false,
  namaPengguna: "",
  kataKunci: "",
  token: "",
  status: "",
  statusError: true,
};

export default function userReducer(userState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_USER":
      return {
        ...userState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "SUCCESS_LOGIN":
      return {
        ...userState,
        token: action.payload.token,
        status: action.payload.status,
        is_login: true,
      };
    case "SUCCESS_SIGNUP":
      return {
        ...userState,
      };
    case "SUCCESS_LOGOUT":
      return {
        ...userState,
        is_login: false,
      };
    case "SUCCESS_POST_CUSTOMER":
      return {
        ...userState,
        statusError: false,
      };
    default:
      return userState;
  }
}
