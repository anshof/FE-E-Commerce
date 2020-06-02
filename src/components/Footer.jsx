import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="pb-5 page-footer">
      <div className="container">
        <div className="row border-bottom text-md-left py-5">
          <div className="col-lg-5 row-sm-12 bt-0">
            <h2 className="text-uppercase text-white navbar-brand">
              SOPHISTICATED
            </h2>
            <p className="my-0">
              <Link className="text-white" to="/">
                How To Buy
              </Link>
            </p>
            <p className="my-0">
              <Link className="text-white" to="/">
                Our Story
              </Link>
            </p>
            <p className="my-0">
              <Link className="text-white" to="/">
                Shipping Information
              </Link>
            </p>
            <p className="my-0">
              <Link className="text-white" to="/">
                Returns &#38; Exchanges
              </Link>
            </p>
            <p className="my-0">
              <Link className="text-white" to="/">
                Privacy Policy
              </Link>
            </p>
            <p className="my-0">
              <Link className="text-white" to="/">
                Contact Us
              </Link>
            </p>
          </div>
          <div className="col-lg-3 row-sm-12 pt-2">
            <h6 className="font text-white">Get connected with us</h6>
            <ul className="list-unstyled d-flex">
              <li>
                <Link to="#!">
                  <img
                    className="logo mt-2 mx-2"
                    src={require("../images/socMed/fb.png")}
                    alt="fb"
                  />
                </Link>
              </li>
              <li>
                <Link to="#!">
                  <img
                    className="logo mt-2 mx-2"
                    src={require("../images/socMed/ig.png")}
                    alt="ig"
                  />
                </Link>
              </li>
              <li>
                <Link to="#!">
                  <img
                    className="logo mt-2 mx-2"
                    src={require("../images/socMed/twitter.png")}
                    alt="twitter"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 pt-2">
            <ul className="list-unstyled">
              <li>
                <p className="text-white font">Our collections</p>
              </li>
              <li>
                <Link to="#!" className="text-decoration-none text-white font">
                  Bottom
                </Link>
              </li>
              <li>
                <Link to="#!" className="text-decoration-none text-white font">
                  Dress
                </Link>
              </li>
              <li>
                <Link to="#!" className="text-decoration-none text-white font">
                  Tops
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row pt-5 d-flex justify-content-center text-white">
          <ul className="list-unstyled">
            <li>
              <p>&copy; Sophisticated by Ana Shofiya Kurniawati</p>
            </li>
            <li>
              <p>Copyright &copy; 2020 Sophisticated</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
