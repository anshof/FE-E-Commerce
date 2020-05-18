import React, { Component } from "react";
import { connect } from "react-redux";

import {
  doLogin,
  changeInputUser,
  doSignOut,
  postCustomer,
} from "../store/action/actionUser";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../css/style.css";

class RegisterCustomer extends Component {
  postCust = async () => {
    await this.props.postCustomer();
    this.props.userData.statusError
      ? alert("you're not registered")
      : this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Navigation {...this.props} />
        <div className="d-flex personalData d-flex justify-content-center align-items-center">
          <section className="">
            <div className="container text-center mt-5 d-flex justify-content-center">
              <form className="" onSubmit={(e) => e.preventDefault()}>
                <h2 className="text-uppercase">Fill Your Personal Data</h2>
                <div className="form-group">
                  <label for="exampleInputEmail1" className="text-left">
                    Name :
                  </label>
                  <input
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    type="text"
                    name="name"
                    placeholder="your name..."
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>

                <div className="form-group">
                  <label for="exampleInputPassword1" className="text-left">
                    Email :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="your email..."
                    name="name"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1" className="text-left">
                    Birth of Date :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="your birt of date (eg. YYYY-MM-DD)..."
                    name="bod"
                    // onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1" className="text-left">
                    Phone Number :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="your phone number..."
                    name="phone"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1" className="text-left">
                    Address :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="your address..."
                    name="street"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1" className="text-left">
                    City :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="your city..."
                    name="city"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1" className="text-left">
                    City type :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="kabupaten / kota..."
                    name="city_type"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1" className="text-left">
                    Province :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="your province..."
                    name="province"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1" className="text-left">
                    Postal Code :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="your postal code..."
                    name="postal_code"
                    onChange={(e) => this.props.changeInput(e)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-dark btn-block mr-3 mt-2 text-white"
                  onClick={() => this.postCust()}
                >
                  Register
                </button>
              </form>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
  doLogin,
  doSignOut,
  postCustomer,
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterCustomer);
