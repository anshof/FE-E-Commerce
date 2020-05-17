import React, { Component } from "react";
import { connect } from "react-redux";
import { doLogin, changeInputUser, signUp } from "../store/action/actionUser";

import Navigation from "../components/Navigation";

class SignUp extends Component {
  postSignup = async () => {
    await this.props.signUp();
    this.props.history.push("/signin");
  };

  render() {
    console.warn("cek props dari page signup", this.props);
    const message = this.props.location.state
      ? this.props.location.state.message
      : "";
    return (
      <div>
        <Navigation {...this.props} />
        <div className="d-flex signup d-flex justify-content-center align-items-center">
          <section className="contentSignup">
            <div className="container text-center mt-5 d-flex justify-content-center">
              <form className="" onSubmit={(e) => e.preventDefault()}>
                <h2 className="text-white text-uppercase">SIGN UP</h2>
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
                <div className="form-group">
                  <label
                    for="exampleInputPassword1"
                    className="text-white text-left"
                  >
                    <h5>What do you wanna do:</h5>
                  </label>
                  <div class="form-check">
                    <input class="form-check-input d-block" onChange={(e) => this.props.changeInput(e)} type="radio" name="status" id="exampleRadios1" value="seller"/>
                  <label class="d-block text-white text-left form-check-label" for="exampleRadios1">
                      Sell something
                    </label>
                    <input class="form-check-input d-block" onChange={(e) => this.props.changeInput(e)} type="radio" name="status" id="exampleRadios2" value="buyer"/>
                    <label class="d-block text-left text-white form-check-label" for="exampleRadios2">
                      Buy something
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-dark btn-block mr-3 mt-2 text-white"
                  onClick={() => this.postSignup()}
                >
                  Sign Up
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
  signUp,
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
