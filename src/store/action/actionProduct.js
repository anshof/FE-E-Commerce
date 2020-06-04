import axios from "axios";

const baseUrl = "https://ecommercebe.shofisticated.my.id";

export const getProduct = (category) => {
  return async (dispatch, getState) => {
    console.warn("cek getProduct");
    await axios({
      method: "GET",
      url: baseUrl + "/product",
    })
      .then(async (response) => {
        dispatch({
          type: "SUCCESS_GET_PRODUCT",
          payload: response.data,
        });
        console.log("dari action product", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getProductCategory = (category) => {
  return async (dispatch) => {
    await axios
      .get(baseUrl + "/product")
      .then((response) => {
        let id;
        if (category === "dress") {
          id = 1;
        } else if (category === "tops") {
          id = 2;
        } else {
          id = 3;
        }
        dispatch({
          type: "REQUEST_CATEGORY_PRODUCT",
          payload: response.data.filter((item) => item.product_type_id === id),
        });
        console.log("dari product category", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getDetailProduct = (category) => {
  return async (dispatch) => {
    const response = await axios.get(baseUrl + "/product/" + category);
    dispatch({
      type: "REQUEST_CATEGORY_PRODUCT_BY_ID",
      payload: response.data,
    });
    console.warn("cek dari getDetailProduct", response.data);
  };
};

export const postProduct = () => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      name: getState().product.name,
      price: getState().product.price,
      color: getState().product.color,
      weight: getState().product.weight,
      size: getState().product.size,
      img: getState().product.img,
      stock: getState().product.stock,
      promo: getState().product.promo,
      discount: getState().product.discount,
      product_type_id: getState().product.product_type_id,
    };
    const json = JSON.stringify(bodyRequest);
    const token = localStorage.getItem("token");
    await axios
      .post(baseUrl + "/product", json, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_POST_PRODUCT" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const changeInputProduct = (e) => {
  return {
    type: "CHANGE_INPUT_PRODUCT",
    payload: e,
  };
};
