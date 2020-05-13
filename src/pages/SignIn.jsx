import React, { Component } from "react";
import Navigation from "../components/Navigation";
import { connect } from "react-redux";
import { doLogin, changeInputUser } from "../store/action/actionUser";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

class SignIn extends Component {
  postLogin = async () => {
    await this.props.doLogin();
    const is_login = this.props.login;
    if (is_login) {
      this.props.history.push("/profile");
    }
  };

  render() {
    console.warn("cek props dari page signin", this.props);
    const message = this.props.location.state
      ? this.props.location.state.message
      : "";
    return (
      <div>
        <Navigation {...this.props} />
        <div className="d-flex signin d-flex justify-content-center align-items-center">
          <section className="content">
            <div className="container text-center mt-5 d-flex justify-content-center">
              <form className="" onSubmit={(e) => e.preventDefault()}>
                <h2 className="text-white text-uppercase">LOGIN</h2>
                <div className="form-group">
                  <label
                    for="exampleInputEmail1"
                    className="text-white text-left"
                  >
                    Username
                  </label>
                  <input
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    type="text"
                    name="namaPengguna"
                    placeholder="Username"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
                <div className="form-group">
                  <label
                    for="exampleInputPassword1"
                    className="text-white text-left"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="kataKunci"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-dark btn-block mr-3 mt-2 text-white"
                  onClick={() => this.postLogin()}
                >
                  Sign In
                </button>
                <p className="mt-2 mb-3" style={{ color: "blue" }}>
                  {message}
                </p>
              </form>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    namaPengguna: state.user.namaPengguna,
    kataKunci: state.user.kataKunci,
    login: state.user.is_login,
  };
};

const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
  doLogin,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
