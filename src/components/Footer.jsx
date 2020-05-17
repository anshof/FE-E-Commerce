import React from "react";

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
              <a className="text-white" href="/">
                How To Buy
              </a>
            </p>
            <p className="my-0">
              <a className="text-white" href="/">
                Our Story
              </a>
            </p>
            <p className="my-0">
              <a className="text-white" href="/">
                Shipping Information
              </a>
            </p>
            <p className="my-0">
              <a className="text-white" href="/">
                Returns &#38; Exchanges
              </a>
            </p>
            <p className="my-0">
              <a className="text-white" href="/">
                Privacy Policy
              </a>
            </p>
            <p className="my-0">
              <a className="text-white" href="/">
                Contact Us
              </a>
            </p>
          </div>
          <div className="col-lg-3 row-sm-12 pt-2">
            <h6 className="font text-white">Get connected with us</h6>
            <ul className="list-unstyled d-flex">
              <li>
                <a href="#!">
                  <img
                    className="logo mt-2 mx-2"
                    src={require("../images/socMed/fb.png")}
                    alt="fb"
                  />
                </a>
              </li>
              <li>
                <a href="#!">
                  <img
                    className="logo mt-2 mx-2"
                    src={require("../images/socMed/ig.png")}
                    alt="ig"
                  />
                </a>
              </li>
              <li>
                <a href="#!">
                  <img
                    className="logo mt-2 mx-2"
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
                <p className="text-white font">Our collections</p>
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
                  Tops
                </a>
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
