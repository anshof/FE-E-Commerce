import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

const Navigation = (props, postSignout) => {
  postSignout = () => {
    props.doSignOut();
    props.history.push("/");
  };

  const login = localStorage.getItem("is_login");
  const status = localStorage.getItem("status");

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          SOPHISTICATED
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link navBarText" to="/shopnow">
                SHOP now!
              </Link>
            </li>
          </ul>
          {login ? (
            <ul className="navbar-nav d-lg-flex">
              <li className="nav-item">
                <Link to="/profile" className="navBarText nav-link">
                  <i class="fa fa-user"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navBarText nav-link" to="/profile">
                  <i class="fa fa-shopping-bag"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="navBarText nav-link"
                  to="/signin"
                  onClick={() => postSignout()}
                >
                  Sign Out
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav d-lg-flex">
              <li className="nav-item">
                <Link className="navBarText nav-link" to="/signin">
                  <i class="fa fa-user"></i>
                </Link>
              </li>
            </ul>
          )}

          {status === "seller" ? (
            <ul className="navbar-nav">
              <li className="">
                <Link to="/startselling" className="nav-link">
                  Start Selling
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className=""></li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
