import axios from "axios";

const baseUrl = "https://ecommercebe.shofisticated.my.id";

export const doLogin = () => {
  return async (dispatch, getState) => {
    await axios({
      method: "GET",
      url: baseUrl + "/login",
      params: {
        username: getState().user.namaPengguna,
        password: getState().user.kataKunci,
      },
    })
      .then(async (response) => {
        if (response.data.hasOwnProperty("token")) {
          dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("is_login", true);
          localStorage.setItem("status", response.data.status);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const signUp = () => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      username: getState().user.namaPengguna,
      password: getState().user.kataKunci,
      status: getState().user.status,
    };
    const json = JSON.stringify(bodyRequest);
    await axios
      .post(baseUrl + "/client", json, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_SIGNUP" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const changeInputUser = (e) => {
  return {
    type: "CHANGE_INPUT_USER",
    payload: e,
  };
};

export const getProfile = () => {
  return async (dispatch, getState) => {
    await axios({
      method: "GET",
      url: baseUrl + "/login",
      params: {
        username: getState().user.namaPengguna,
        password: getState().user.kataKunci,
      },
    })
      .then(async (response) => {
        if (response.data.hasOwnProperty("token")) {
          dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("is_login", true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const doSignOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("is_login");
  localStorage.removeItem("status");
  return {
    type: "SUCCESS_LOGOUT",
  };
};

export const postCustomer = (props) => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      name: getState().user.name,
      email: getState().user.email,
      province: getState().user.province,
      city: getState().user.city,
      postal_code: getState().user.postal_code,
      city_type: getState().user.city_type,
      street: getState().user.street,
      phone: getState().user.phone,
    };
    const myJSON = JSON.stringify(bodyRequest);
    const status = localStorage.getItem("status");
    const token = localStorage.getItem("token");

    if (status === "buyer") {
      await axios
        .post(baseUrl + "/customer/profile", myJSON, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json; charset=utf-8",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_POST_CUSTOMER" });
        })
        .catch(function (error) {
          console.log(error);
        });
    } else if (status === "seller") {
      await axios
        .post(baseUrl + "/seller/profile", myJSON, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json; charset=utf-8",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_POST_CUSTOMER" });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
};
