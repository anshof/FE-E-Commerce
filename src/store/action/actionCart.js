import axios from "axios";

export const getTransDetail = (props) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios
      .get("http://0.0.0.0:5050/cart", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_GET_CART", payload: response.data });
        console.warn("dari action product", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
export const postCart = (item) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const bodyRequest = {
      product_id: item,
      qty: 1,
      shipping_method_id: 1,
      payment_method_id: 1,
    };
    const myJSON = JSON.stringify(bodyRequest);
    await axios
      .post("http://0.0.0.0:5050/cart", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_POST_CART" });
      })
      .catch(function (error) {
        alert("Please fill your personal data");
      });
  };
};

export const deleteTrans = (item) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios
      .delete("http://0.0.0.0:5050/cart/" + item, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_DELETE_CART" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
export const checkOut = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const bodyRequest = {
      status: false,
    };
    const myJSON = JSON.stringify(bodyRequest);
    await axios
      .post("http://0.0.0.0:5050/cart/checkout", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_CHECKOUT" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
