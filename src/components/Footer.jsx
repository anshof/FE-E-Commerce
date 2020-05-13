import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer bg-dark font-small blue border-top">
      <div className="container text-center text-md-left">
        <div className="row mt-5">
          <div className="col-lg-5 row-sm-12 bt-0">
            <h2 className="text-uppercase navbar-brand">SOPHISTICATED</h2>
            <h6 className="text-white">
              Infuse your daily outfit with a SOPHISTICATED colors and patterns.
            </h6>
          </div>
          <div className="col-lg-3 row-sm-12 pt-2">
            <h6 className="text-white font">Social Media</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#!">
                  <img
                    className="logo mt-2"
                    src={require("../images/socMed/fb.png")}
                    alt="fb"
                  />
                </a>
              </li>
              <li>
                <a href="#!">
                  <img
                    className="logo mt-2"
                    src={require("../images/socMed/ig.png")}
                    alt="ig"
                  />
                </a>
              </li>
              <li>
                <a href="#!">
                  <img
                    className="logo mt-2"
                    src={require("../images/socMed/twitter.png")}
                    alt="twitter"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 pt-2">
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-decoration-none text-white font">
                  Tops
                </a>
              </li>
              <li>
                <a href="#!" className="text-decoration-none text-white font">
                  Bottom
                </a>
              </li>
              <li>
                <a href="#!" className="text-decoration-none text-white font">
                  Dress
                </a>
              </li>
              <li>
                <a href="#!" className="text-decoration-none text-white font">
                  Promo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
