import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

const login = localStorage.getItem("is_login");
const Navigation = (props, postSignout) => {
  postSignout = () => {
    props.doSignOut();
    props.history.push("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
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
              <Link className="nav-link" to="/">
                Promo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Tops
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Bottoms
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Dress
              </Link>
            </li>
            {login ? (
              <ul className="navbar-nav d-lg-flex">
                <li className="nav-item">
                  <Link to="/profile" className=" nav-link">
                    Account
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Cart
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/signin"
                    onClick={() => postSignout()}
                  >
                    Sign Out
                  </Link>
                </li>
              </ul>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Sign In
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
