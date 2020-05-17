import axios from "axios";

export const doLogin = () => {
  return async (dispatch, getState) => {
    await axios({
      method: "GET",
      url: "http://0.0.0.0:5050/login",
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
    const json=JSON.stringify(bodyRequest)
    await axios
      .post("http://0.0.0.0:5050/client", json,{headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json; charset=utf-8",
      },})
      .then(async (response) => {
        dispatch({ type: "SUCCESS_SIGNUP"});
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
      url: "http://0.0.0.0:5050/login",
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
