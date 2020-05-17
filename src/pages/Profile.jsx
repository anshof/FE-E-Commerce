import React from "react";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { doSignOut } from "../store/action/actionUser";
import Navigation from "../components/Navigation";

import "../css/style.css";

class Profile extends React.Component {
  render() {
    console.warn("cek dari halaman profile", this);
    if (!this.props.login) {
      return <Redirect to={{ pathname: "/signin" }} />;
    } else {
      return (
        <div>
          <Navigation {...this.props} />
          <div className="d-flex signin d-flex justify-content-center align-items-center">
            <section className="content">
              <div className="container text-center mt-5 d-flex justify-content-center">
                <div>
                  <img
                    src={require("../images/user.png")}
                    alt="avatar"
                    style={{ height: "20vmin" }}
                  />
                  <h1 className="text-white">Profile</h1>
                  <h3 className="text-white">WELCOME BACK!!! <hr />Happy Shopping...</h3>
                </div>
              </div>
            </section>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.user.is_login,
    email: state.user.email,
    username: state.user.username,
    avatar: state.user.avatar,
  };
};
const mapDispatchToProps = {
  doSignOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
